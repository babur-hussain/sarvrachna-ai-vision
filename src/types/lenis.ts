export interface LenisScrollEvent {
  scroll: number;
  limit: number;
  progress: number;
  velocity: number;
  direction: number;
  animatedScroll: number;
  targetScroll: number;
  isScrolling: boolean | string;
  isStopped: boolean | string;
  isSmooth: boolean | string;
}

export interface LenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  orientation?: 'vertical' | 'horizontal';
  gestureOrientation?: 'vertical' | 'horizontal';
  smoothWheel?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  infinite?: boolean;
  lerp?: number;
}
