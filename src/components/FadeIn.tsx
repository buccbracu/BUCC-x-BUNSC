import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  fullWidth?: boolean;
}

const FadeIn = ({ 
  children, 
  delay = 0, 
  className = "", 
  direction = "up",
  duration = 1000,
  fullWidth = false
}: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up": return "translate-y-8 blur-sm";
        case "down": return "-translate-y-8 blur-sm";
        case "left": return "translate-x-8 blur-sm";
        case "right": return "-translate-x-8 blur-sm";
        default: return "blur-sm";
      }
    }
    return "translate-x-0 translate-y-0 blur-0";
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${getTransform()} ${className} ${fullWidth ? "w-full" : ""}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
