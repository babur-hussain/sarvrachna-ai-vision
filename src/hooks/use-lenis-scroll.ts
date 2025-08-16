import { useEffect, useRef } from 'react';
import { useLenisContext } from '@/contexts/LenisContext';
import { LenisScrollEvent } from '@/types/lenis';

export const useLenisScroll = (callback: (e: LenisScrollEvent) => void) => {
  const { lenis } = useLenisContext();
  const callbackRef = useRef(callback);

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!lenis) return;

    // Add scroll event listener
    const handleScroll = (e: LenisScrollEvent) => {
      callbackRef.current(e);
    };

    lenis.on('scroll', handleScroll);

    // Cleanup
    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [lenis]);

  return lenis;
};
