import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote, User } from 'lucide-react';

interface ClientReview {
  id: string;
  name: string;
  company: string;
  review: string;
  rating: number;
}

const reviews: ClientReview[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'TechCorp Inc.',
    review: 'Sarvrachna transformed our business with their AI solutions. Incredible results!',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'InnovateLab',
    review: 'The holographic interfaces are mind-blowing. Our clients love it!',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    company: 'FutureTech',
    review: '3x faster performance as promised. Exceeded all expectations!',
    rating: 5
  },
  {
    id: '4',
    name: 'David Kim',
    company: 'SmartSolutions',
    review: 'Best investment we made this year. ROI was immediate!',
    rating: 5
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    company: 'NextGen Systems',
    review: 'Professional team, cutting-edge technology, outstanding results!',
    rating: 5
  },
  {
    id: '6',
    name: 'Alex Morgan',
    company: 'Digital Dynamics',
    review: 'They delivered everything on time and beyond our expectations!',
    rating: 5
  }
];

interface VisibleReview extends ClientReview {
  position: { x: number; y: number };
  opacity: number;
  scale: number;
  rotation: number;
  delay: number;
  isVisible: boolean;
}

const FloatingReviews: React.FC = () => {
  const [visibleReviews, setVisibleReviews] = useState<VisibleReview[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  const generateRandomPosition = useCallback(() => {
    if (typeof window === 'undefined') {
      return { x: 100, y: 100 };
    }
    
    const margin = 150;
    const maxX = Math.max(100, window.innerWidth - 400);
    const maxY = Math.max(100, window.innerHeight - 200);
    
    return {
      x: margin + Math.random() * (maxX - margin),
      y: margin + Math.random() * (maxY - margin)
    };
  }, []);

  const generateRandomTransform = useCallback(() => {
    return {
      opacity: 0.9 + Math.random() * 0.1,
      scale: 0.95 + Math.random() * 0.1,
      rotation: (Math.random() - 0.5) * 8,
      delay: Math.random() * 2
    };
  }, []);

  const createReview = useCallback((review: ClientReview): VisibleReview => {
    return {
      ...review,
      ...generateRandomPosition(),
      ...generateRandomTransform(),
      isVisible: true
    };
  }, [generateRandomPosition, generateRandomTransform]);

  const showNewReview = useCallback(() => {
    setVisibleReviews(prev => {
      const availableReviews = reviews.filter(review => 
        !prev.some(vr => vr.id === review.id)
      );
      
      if (availableReviews.length === 0) return prev;
      
      const randomReview = availableReviews[Math.floor(Math.random() * availableReviews.length)];
      const newReview = createReview(randomReview);
      
      return [...prev, newReview];
    });
  }, [createReview]);

  const hideRandomReview = useCallback(() => {
    setVisibleReviews(prev => {
      if (prev.length === 0) return prev;
      
      const randomIndex = Math.floor(Math.random() * prev.length);
      const updatedReviews = prev.map((review, index) => 
        index === randomIndex ? { ...review, isVisible: false } : review
      );
      
      // Remove the hidden review after animation
      setTimeout(() => {
        setVisibleReviews(current => current.filter((_, idx) => idx !== randomIndex));
      }, 1000);
      
      return updatedReviews;
    });
  }, []);

  // Initialize component
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Set up initial reviews and intervals
  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return;

    console.log('Setting up floating reviews...');

    // Show initial reviews immediately
    const initialReviews = reviews.slice(0, 3).map(review => createReview(review));
    setVisibleReviews(initialReviews);

    // Show new review every 5-7 seconds
    const showInterval = setInterval(() => {
      if (visibleReviews.length < 4) {
        showNewReview();
      }
    }, 5000 + Math.random() * 2000);

    // Hide random review every 6-9 seconds
    const hideInterval = setInterval(() => {
      if (visibleReviews.length > 0) {
        hideRandomReview();
      }
    }, 6000 + Math.random() * 3000);

    return () => {
      clearInterval(showInterval);
      clearInterval(hideInterval);
    };
  }, [isMounted, createReview, showNewReview, hideRandomReview, visibleReviews.length]);

  // Don't render until mounted
  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {visibleReviews.map((review) => (
        <div
          key={review.id}
          className={`absolute transition-all duration-1000 ease-out ${
            review.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 -translate-y-4'
          }`}
          style={{
            left: review.position.x,
            top: review.position.y,
            transform: `scale(${review.scale}) rotate(${review.rotation}deg)`,
            animationDelay: `${review.delay}s`
          }}
        >
          {/* Cloud/Balloon Shape */}
          <div className="relative animate-float-gentle">
            {/* Main cloud body with soft edges */}
            <div className="relative w-72 h-32 bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/40 overflow-hidden hover:shadow-3xl transition-all duration-500">
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-3 left-6 w-2 h-2 bg-brand-sky/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-brand-violet/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 left-10 w-1 h-1 bg-brand-pink/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-4 h-full flex flex-col">
                {/* Header with rating */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 text-brand-sky/70" />
                </div>
                
                {/* Review text */}
                <p className="text-sm text-gray-700 leading-relaxed flex-1 mb-3 line-clamp-3 font-medium">
                  "{review.review}"
                </p>
                
                {/* Author info */}
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-sky to-brand-violet flex items-center justify-center shadow-sm">
                    <User className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-800">{review.name}</div>
                    <div className="text-xs text-gray-600">{review.company}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cloud tail/bottom */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-white/80"></div>
            </div>
            
            {/* Floating animation overlay */}
            <div className="absolute inset-0 animate-float-gentle pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/20 to-transparent rounded-[2rem]"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingReviews;
