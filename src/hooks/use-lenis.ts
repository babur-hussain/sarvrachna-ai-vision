import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { LenisScrollEvent } from '@/types/lenis';

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with luxury settings
    lenisRef.current = new Lenis({
      duration: 1.6, // Premium duration between 1.4-1.8
      easing: (t: number) => 1 - Math.pow(2, -10 * t), // Exponential easing for luxury feel
      orientation: 'vertical', // Enable vertical smooth scrolling
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2, // Enhanced trackpad experience
      infinite: false, // Disable infinite loop
      lerp: 0.1, // Smooth interpolation
    });

    // RequestAnimationFrame loop for smooth performance
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Add scroll event listener for debugging and synchronization
    lenisRef.current.on('scroll', (e: LenisScrollEvent) => {
      // Log scroll progress for debugging
      console.log('Lenis Scroll Progress:', {
        scroll: e.scroll,
        limit: e.limit,
        progress: e.progress,
        velocity: e.velocity,
        direction: e.direction
      });
    });

    // Add resize event listener for responsive behavior
    const handleResize = () => {
      lenisRef.current?.resize();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return lenisRef.current;
};
