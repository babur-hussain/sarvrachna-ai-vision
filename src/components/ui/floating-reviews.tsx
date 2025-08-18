import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote, User } from 'lucide-react';

interface ClientReview {
  id: string;
  name: string;
  company: string;
  review: string;
  rating: number;
  avatar?: string;
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

const FloatingReviews: React.FC = () => {
  const [visibleReviews, setVisibleReviews] = useState<Array<ClientReview & { 
    position: { x: number; y: number };
    opacity: number;
    scale: number;
    rotation: number;
    delay: number;
    isEntering: boolean;
    isExiting: boolean;
  }>>([]);

  const generateRandomPosition = useCallback(() => {
    const margin = 120;
    const maxX = Math.min(window.innerWidth - 320, window.innerWidth - margin);
    const maxY = Math.min(window.innerHeight - 160, window.innerHeight - margin);
    
    return {
      x: Math.max(margin, Math.random() * maxX),
      y: Math.max(margin, Math.random() * maxY)
    };
  }, []);

  const generateRandomTransform = useCallback(() => {
    return {
      opacity: 0.85 + Math.random() * 0.15,
      scale: 0.92 + Math.random() * 0.16,
      rotation: (Math.random() - 0.5) * 16,
      delay: Math.random() * 1.5
    };
  }, []);

  const showNewReview = useCallback(() => {
    const availableReviews = reviews.filter(review => 
      !visibleReviews.some(vr => vr.id === review.id)
    );
    
    if (availableReviews.length === 0) return;
    
    const randomReview = availableReviews[Math.floor(Math.random() * availableReviews.length)];
    const newReview = {
      ...randomReview,
      ...generateRandomPosition(),
      ...generateRandomTransform(),
      isEntering: true,
      isExiting: false
    };
    
    setVisibleReviews(prev => [...prev, newReview]);
    
    // Remove entering state after animation
    setTimeout(() => {
      setVisibleReviews(prev => 
        prev.map(r => r.id === newReview.id ? { ...r, isEntering: false } : r)
      );
    }, 600);
  }, [visibleReviews, generateRandomPosition, generateRandomTransform]);

  const hideReview = useCallback((id: string) => {
    setVisibleReviews(prev => 
      prev.map(r => r.id === id ? { ...r, isExiting: true } : r)
    );
    
    // Remove from state after exit animation
    setTimeout(() => {
      setVisibleReviews(prev => prev.filter(review => review.id !== id));
    }, 600);
  }, []);

  useEffect(() => {
    // Show initial reviews
    const initialReviews = reviews.slice(0, 3).map(review => ({
      ...review,
      ...generateRandomPosition(),
      ...generateRandomTransform(),
      isEntering: false,
      isExiting: false
    }));
    setVisibleReviews(initialReviews);

    // Show new review every 5-8 seconds
    const showInterval = setInterval(() => {
      if (visibleReviews.length < 4) {
        showNewReview();
      }
    }, 5000 + Math.random() * 3000);

    // Hide random review every 7-12 seconds
    const hideInterval = setInterval(() => {
      if (visibleReviews.length > 0) {
        const randomIndex = Math.floor(Math.random() * visibleReviews.length);
        const reviewToHide = visibleReviews[randomIndex];
        if (reviewToHide && !reviewToHide.isExiting) {
          hideReview(reviewToHide.id);
        }
      }
    }, 7000 + Math.random() * 5000);

    return () => {
      clearInterval(showInterval);
      clearInterval(hideInterval);
    };
  }, [visibleReviews.length, showNewReview, hideReview, generateRandomPosition, generateRandomTransform]);

  if (visibleReviews.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {visibleReviews.map((review) => (
        <div
          key={review.id}
          className={`absolute transition-all duration-600 ${
            review.isEntering ? 'animate-float-enter' : 
            review.isExiting ? 'animate-float-exit' : 'animate-float'
          }`}
          style={{
            left: review.position.x,
            top: review.position.y,
            opacity: review.opacity,
            transform: `scale(${review.scale}) rotate(${review.rotation}deg)`,
            animationDelay: `${review.delay}s`,
            animationDuration: review.isEntering || review.isExiting ? '0.6s' : '6s'
          }}
        >
          {/* Balloon/Cloud Shape */}
          <div className="relative">
            {/* Main balloon body */}
            <div className="relative w-72 h-32 bg-gradient-to-br from-white/95 via-white/85 to-white/75 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden hover:shadow-3xl transition-all duration-500">
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-2 left-4 w-2 h-2 bg-brand-sky/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-brand-violet/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-4 left-8 w-1 h-1 bg-brand-pink/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
            
            {/* Balloon tail/string */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white/80"></div>
            </div>
            
            {/* Floating animation overlay */}
            <div className="absolute inset-0 animate-float-gentle pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingReviews;
