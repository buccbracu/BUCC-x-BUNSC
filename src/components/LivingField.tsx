import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Instance,
  Instances,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";
import { createNoise3D } from "simplex-noise";

// --- Configuration ---
const CONFIG = {
  colors: {
    forest: "#16191D", // Site Background (Dark Blue-Grey)
    moss: "#1C2126",   // Slightly lighter for gradient
    fern: "#59A673",   // Site Primary (Muted Green)
    clay: "#8F7E6B",   // Muddy Brown
    sand: "#F4F4F0",   // Site Foreground (Off-White)
    cta: "#59A673",    // Site Primary
  },
  counts: {
    macro: 15,
    meso: 75,
    micro: 300,
  },
  motion: {
    driftSpeed: 0.03,
    cursorRadius: 3,
    cursorForce: 0.5,
    returnSpeed: 0.02,
  },
};

// --- Instanced Particles ---

const ParticleLayer = ({
  count,
  color,
  scaleRange,
  speedRange,
  shape = "sphere",
  mouse,
}) => {
  const instancesRef = useRef();
  const noise3D = useMemo(() => createNoise3D(), []);

  // Generate initial data for each instance
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const scale =
        scaleRange[0] + Math.random() * (scaleRange[1] - scaleRange[0]);
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 5
        ),
        basePosition: new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 5
        ),
        velocity: new THREE.Vector3(0, 0, 0),
        scale: scale,
        speed: speedRange[0] + Math.random() * (speedRange[1] - speedRange[0]),
        timeOffset: Math.random() * 100,
      });
    }
    return temp;
  }, [count, scaleRange, speedRange]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!instancesRef.current) return;

    const time = state.clock.getElapsedTime();
    const { x: mx, y: my } = mouse.current;

    // Convert mouse to world coords (approximate at z=0)
    const mouseVec = new THREE.Vector3(mx * 12, my * 8, 0);

    particles.forEach((particle, i) => {
      // 1. Natural Drift (Perlin Noise)
      const noiseX = noise3D(
        particle.basePosition.x * 0.1,
        particle.basePosition.y * 0.1,
        time * 0.1 + particle.timeOffset
      );
      const noiseY = noise3D(
        particle.basePosition.y * 0.1,
        particle.basePosition.z * 0.1,
        time * 0.1 + particle.timeOffset + 100
      );

      const driftX = noiseX * CONFIG.motion.driftSpeed;
      const driftY = noiseY * CONFIG.motion.driftSpeed;

      // 2. Cursor Interaction (Repulsion)
      const dist = particle.position.distanceTo(mouseVec);
      let force = new THREE.Vector3(0, 0, 0);

      if (dist < CONFIG.motion.cursorRadius) {
        const forceDir = new THREE.Vector3()
          .subVectors(particle.position, mouseVec)
          .normalize();
        const forceMag =
          (CONFIG.motion.cursorRadius - dist) * CONFIG.motion.cursorForce;
        force.copy(forceDir).multiplyScalar(forceMag);
      }

      // Apply forces to velocity (simplified physics)
      particle.velocity.x += force.x * 0.1;
      particle.velocity.y += force.y * 0.1;

      // Return to base position (spring-like)
      const returnForce = new THREE.Vector3()
        .subVectors(particle.basePosition, particle.position)
        .multiplyScalar(CONFIG.motion.returnSpeed);
      particle.velocity.add(returnForce);

      // Damping
      particle.velocity.multiplyScalar(0.9);

      // Update position
      particle.position.add(particle.velocity);
      particle.position.x += driftX;
      particle.position.y += driftY;

      // Update Instance Matrix
      dummy.position.copy(particle.position);
      dummy.scale.setScalar(particle.scale);
      dummy.rotation.x = time * particle.speed * 0.1;
      dummy.rotation.y = time * particle.speed * 0.1;
      dummy.updateMatrix();

      instancesRef.current.setMatrixAt(i, dummy.matrix);
    });

    instancesRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <Instances range={count} ref={instancesRef}>
      {shape === "sphere" ? (
        <sphereGeometry args={[1, 16, 16]} />
      ) : (
        <dodecahedronGeometry args={[1, 0]} /> // More "pebble" like
      )}
      <meshStandardMaterial
        color={color}
        roughness={0.8}
        metalness={0.1}
        transparent
        opacity={0.6}
      />
      {particles.map((data, i) => (
        <Instance key={i} />
      ))}
    </Instances>
  );
};

// --- Background ---
const Background = () => (
  <mesh position={[0, 0, -10]}>
    <planeGeometry args={[100, 100]} />
    <shaderMaterial
      uniforms={{
        uColorTop: { value: new THREE.Color(CONFIG.colors.forest) },
        uColorBottom: { value: new THREE.Color(CONFIG.colors.moss) },
      }}
      vertexShader={`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `}
      fragmentShader={`
        uniform vec3 uColorTop;
        uniform vec3 uColorBottom;
        varying vec2 vUv;
        void main() {
          // Soft vertical gradient
          vec3 color = mix(uColorBottom, uColorTop, vUv.y * 1.2);
          // Vignette
          float dist = distance(vUv, vec2(0.5));
          color *= smoothstep(0.8, 0.2, dist);
          gl_FragColor = vec4(color, 1.0);
        }
      `}
    />
  </mesh>
);

// --- Main Component ---

export default function LivingField({
  children,
}: {
  children?: React.ReactNode;
}) {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  // Gyroscopic effect for mobile
  React.useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      // Gamma: Left/Right tilt (-90 to 90)
      // Beta: Front/Back tilt (-180 to 180)
      const { gamma, beta } = event;
      
      if (gamma !== null && beta !== null) {
        // Normalize gamma (-45 to 45 degrees -> -1 to 1)
        const x = Math.min(Math.max(gamma, -45), 45) / 45;
        
        // Normalize beta (0 to 90 degrees -> -1 to 1) - assuming holding phone somewhat upright
        // Adjusting range to be more natural for viewing
        const y = Math.min(Math.max(beta - 45, -45), 45) / 45;

        mouse.current.x = x;
        mouse.current.y = -y; // Invert Y to match screen coordinates
      }
    };

    // Check if device orientation is supported and request permission if needed (iOS 13+)
    if (typeof DeviceOrientationEvent !== 'undefined') {
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        // iOS 13+ requires permission, but we can't request it automatically on load.
        // It usually needs a user interaction. For now, we'll just try to add the listener
        // if permission was already granted or if it's not required.
        // A button to enable motion might be needed for iOS 13+ if not already handled.
        // For this implementation, we'll assume standard support or already granted.
         window.addEventListener('deviceorientation', handleOrientation);
      } else {
        window.addEventListener('deviceorientation', handleOrientation);
      }
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-background overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Background />

          {/* Lighting: Soft directional key + ambient */}
          <ambientLight intensity={0.4} color={CONFIG.colors.sand} />
          <directionalLight
            position={[5, 10, 5]}
            intensity={1}
            color={CONFIG.colors.sand}
            castShadow
          />
          <pointLight
            position={[-5, -5, 2]}
            intensity={0.5}
            color={CONFIG.colors.fern}
          />

          {/* Macro Elements (Pebbles/Leaves) */}
          <ParticleLayer
            count={CONFIG.counts.macro}
            color={CONFIG.colors.clay}
            scaleRange={[0.04, 0.08]}
            speedRange={[0.1, 0.3]}
            shape="pebble"
            mouse={mouse}
          />

          {/* Meso Elements (Spores) */}
          <ParticleLayer
            count={CONFIG.counts.meso}
            color={CONFIG.colors.fern}
            scaleRange={[0.03, 0.05]}
            speedRange={[0.2, 0.5]}
            shape="sphere"
            mouse={mouse}
          />

          {/* Micro Elements (Dust) */}
          <ParticleLayer
            count={CONFIG.counts.micro}
            color={CONFIG.colors.sand}
            scaleRange={[0.01, 0.02]}
            speedRange={[0.05, 0.1]}
            shape="sphere"
            mouse={mouse}
          />

          {/* Environment for subtle reflections */}
          <Environment preset="forest" blur={1} />
        </Suspense>
      </Canvas>

      {/* HTML Overlay for Typography */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
