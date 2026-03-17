import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;
    let animationId;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      // dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animate = () => {
      // ring lags behind with lerp (ease toward mouse)
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    const hide = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring — lags behind */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-neutral-900"
      />
      {/* Inner dot — instant */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-900"
      />
    </>
  );
}

export default CustomCursor;
