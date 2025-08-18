import React, { useState, useEffect } from 'react';
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
    name: 'Priya Sharma',
    company: 'TechCorp India',
    review: 'Sarvrachna transformed our business with their AI solutions. Incredible results!',
    rating: 5
  },
  {
    id: '2',
    name: 'Arjun Patel',
    company: 'InnovateLab Solutions',
    review: 'The holographic interfaces are mind-blowing. Our clients love it!',
    rating: 5
  },
  {
    id: '3',
    name: 'Ananya Reddy',
    company: 'FutureTech Systems',
    review: '3x faster performance as promised. Exceeded all expectations!',
    rating: 5
  },
  {
    id: '4',
    name: 'Rahul Verma',
    company: 'SmartSolutions India',
    review: 'Best investment we made this year. ROI was immediate!',
    rating: 5
  },
  {
    id: '5',
    name: 'Zara Khan',
    company: 'NextGen Technologies',
    review: 'Professional team, cutting-edge technology, outstanding results!',
    rating: 5
  },
  {
    id: '6',
    name: 'Vikram Singh',
    company: 'Digital Dynamics',
    review: 'They delivered everything on time and beyond our expectations!',
    rating: 5
  }
];

const FloatingReviews: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentReviews, setCurrentReviews] = useState<number[]>([]);

  useEffect(() => {
    console.log('FloatingReviews component mounted');
    
    // Show balloons after a short delay
    const timer = setTimeout(() => {
      console.log('Setting balloons visible');
      setIsVisible(true);
      
      // Start with 3 random reviews
      const initialReviews = [0, 1, 2];
      setCurrentReviews(initialReviews);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Show new review every 6 seconds
    const showInterval = setInterval(() => {
      setCurrentReviews(prev => {
        const availableReviews = [0, 1, 2, 3, 4, 5].filter(i => !prev.includes(i));
        if (availableReviews.length === 0) return prev;
        
        const newReviewIndex = availableReviews[Math.floor(Math.random() * availableReviews.length)];
        const newReviews = [...prev, newReviewIndex];
        
        // Keep only 4 reviews visible
        if (newReviews.length > 4) {
          return newReviews.slice(-4);
        }
        
        return newReviews;
      });
    }, 6000);

    // Hide random review every 8 seconds
    const hideInterval = setInterval(() => {
      setCurrentReviews(prev => {
        if (prev.length <= 1) return prev;
        
        const randomIndex = Math.floor(Math.random() * prev.length);
        return prev.filter((_, index) => index !== randomIndex);
      });
    }, 8000);

    return () => {
      clearInterval(showInterval);
      clearInterval(hideInterval);
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  console.log('Rendering floating balloons, current reviews:', currentReviews);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Balloon 1 - Top Left Corner (Blank Space) */}
      {currentReviews.includes(0) && (
        <div className="absolute top-8 left-8 animate-float">
          <div className="relative">
            <div className="w-64 h-28 bg-gradient-to-br from-white/30 via-white/25 to-white/20 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-3">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center space-x-1">
                  {[...Array(reviews[0].rating)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-3 h-3 text-blue-400/70" />
              </div>
              
              <p className="text-xs text-gray-800 mb-2 font-medium">
                "{reviews[0].review}"
              </p>
              
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-blue-400/60 flex items-center justify-center">
                  <User className="w-2.5 h-2.5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-800">{reviews[0].name}</div>
                  <div className="text-xs text-gray-600">{reviews[0].company}</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-white/30"></div>
            </div>
          </div>
        </div>
      )}

      {/* Balloon 2 - Top Right Corner (Blank Space) */}
      {currentReviews.includes(1) && (
        <div className="absolute top-8 right-8 animate-float" style={{ animationDelay: '1s' }}>
          <div className="relative">
            <div className="w-64 h-28 bg-gradient-to-br from-white/30 via-white/25 to-white/20 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-3">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center space-x-1">
                  {[...Array(reviews[1].rating)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-3 h-3 text-purple-400/70" />
              </div>
              
              <p className="text-xs text-gray-800 mb-2 font-medium">
                "{reviews[1].review}"
              </p>
              
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-purple-400/60 flex items-center justify-center">
                  <User className="w-2.5 h-2.5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-800">{reviews[1].name}</div>
                  <div className="text-xs text-gray-600">{reviews[1].company}</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-white/30"></div>
            </div>
          </div>
        </div>
      )}

      {/* Balloon 3 - Bottom Left Corner (Blank Space) */}
      {currentReviews.includes(2) && (
        <div className="absolute bottom-8 left-8 animate-float" style={{ animationDelay: '2s' }}>
          <div className="relative">
            <div className="w-64 h-28 bg-gradient-to-br from-white/30 via-white/25 to-white/20 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-3">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center space-x-1">
                  {[...Array(reviews[2].rating)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-3 h-3 text-green-400/70" />
              </div>
              
              <p className="text-xs text-gray-800 mb-2 font-medium">
                "{reviews[2].review}"
              </p>
              
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-green-400/60 flex items-center justify-center">
                  <User className="w-2.5 h-2.5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-800">{reviews[2].name}</div>
                  <div className="text-xs text-gray-600">{reviews[2].company}</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-white/30"></div>
            </div>
          </div>
        </div>
      )}

      {/* Balloon 4 - Bottom Right Corner (Blank Space) */}
      {currentReviews.includes(3) && (
        <div className="absolute bottom-8 right-8 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="relative">
            <div className="w-64 h-28 bg-gradient-to-br from-white/30 via-white/25 to-white/20 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-3">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center space-x-1">
                  {[...Array(reviews[3].rating)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-3 h-3 text-orange-400/70" />
              </div>
              
              <p className="text-xs text-gray-800 mb-2 font-medium">
                "{reviews[3].review}"
              </p>
              
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-orange-400/60 flex items-center justify-center">
                  <User className="w-2.5 h-2.5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-800">{reviews[3].name}</div>
                  <div className="text-xs text-gray-600">{reviews[3].company}</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-white/30"></div>
            </div>
          </div>
        </div>
      )}

      {/* Balloon 5 - Top Center (Blank Space) */}
      {currentReviews.includes(4) && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="relative">
            <div className="w-64 h-28 bg-gradient-to-br from-white/30 via-white/25 to-white/20 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-3">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center space-x-1">
                  {[...Array(reviews[4].rating)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-3 h-3 text-pink-400/70" />
              </div>
              
              <p className="text-xs text-gray-800 mb-2 font-medium">
                "{reviews[4].review}"
              </p>
              
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-pink-400/60 flex items-center justify-center">
                  <User className="w-2.5 h-2.5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-800">{reviews[4].name}</div>
                  <div className="text-xs text-gray-600">{reviews[4].company}</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-white/30"></div>
            </div>
          </div>
        </div>
      )}

      {/* Balloon 6 - Center Right (Blank Space) */}
      {currentReviews.includes(5) && (
        <div className="absolute top-1/2 right-16 transform -translate-y-1/2 animate-float" style={{ animationDelay: '2.5s' }}>
          <div className="relative">
            <div className="w-64 h-28 bg-gradient-to-br from-white/30 via-white/25 to-white/20 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-3">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center space-x-1">
                  {[...Array(reviews[5].rating)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-3 h-3 text-indigo-400/70" />
              </div>
              
              <p className="text-xs text-gray-800 mb-2 font-medium">
                "{reviews[5].review}"
              </p>
              
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-indigo-400/60 flex items-center justify-center">
                  <User className="w-2.5 h-2.5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-800">{reviews[5].name}</div>
                  <div className="text-xs text-gray-600">{reviews[5].company}</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-white/30"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingReviews;
