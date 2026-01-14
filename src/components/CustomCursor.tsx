import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    // Center the cursor elements initially
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.15, ease: "power2.out" });
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Hover detection
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for clickable elements
      const isLink = target.closest('a, button, [role="button"], input, textarea, .cursor-hover');
      setIsHovering(!!isLink);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", onMouseOver);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", onMouseOver);
      // Restore default cursor
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Don't render on touch devices or if user prefers reduced motion
  if (typeof window !== 'undefined' && (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return null;

  return (
    <>
      {/* Inner Dot - The precise pointer */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[1001] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
      
      {/* Outer Ring - The magnetic field */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 rounded-full border pointer-events-none z-[1000] transition-all duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isHovering 
            ? "w-12 h-12 bg-primary/10 border-primary/50 scale-110" 
            : "w-8 h-8 border-primary/30 scale-100"
        }`}
      />
    </>
  );
};

export default CustomCursor;
