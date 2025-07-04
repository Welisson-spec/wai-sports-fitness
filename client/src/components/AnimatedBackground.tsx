import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = backgroundRef.current;
    if (!bg) return;

    // Create floating particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-neon-orange rounded-full opacity-30 animate-float';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 3 + 's';
      particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
      bg.appendChild(particle);
    }

    return () => {
      bg.innerHTML = '';
    };
  }, []);

  return (
    <div 
      ref={backgroundRef}
      className="fixed inset-0 z-0 opacity-30 pointer-events-none"
    />
  );
}
