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
  }
];

const FloatingReviews: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('FloatingReviews component mounted');
    
    // Show reviews after a short delay
    const timer = setTimeout(() => {
      console.log('Setting reviews visible');
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    console.log('Reviews not visible yet');
    return null;
  }

  console.log('Rendering floating reviews');

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Test review - always visible */}
      <div
        className="absolute top-20 left-20 w-72 h-32 bg-white rounded-3xl shadow-2xl border border-gray-200 p-4"
        style={{ zIndex: 50 }}
      >
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <Quote className="w-4 h-4 text-blue-500" />
        </div>
        
        <p className="text-sm text-gray-700 mb-3">
          "Sarvrachna transformed our business with their AI solutions. Incredible results!"
        </p>
        
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
            <User className="w-3 h-3 text-white" />
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-800">Sarah Johnson</div>
            <div className="text-xs text-gray-600">TechCorp Inc.</div>
          </div>
        </div>
      </div>

      {/* Additional test reviews */}
      <div
        className="absolute top-20 right-20 w-72 h-32 bg-white rounded-3xl shadow-2xl border border-gray-200 p-4"
        style={{ zIndex: 50 }}
      >
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <Quote className="w-4 h-4 text-blue-500" />
        </div>
        
        <p className="text-sm text-gray-700 mb-3">
          "The holographic interfaces are mind-blowing. Our clients love it!"
        </p>
        
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
            <User className="w-3 h-3 text-white" />
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-800">Michael Chen</div>
            <div className="text-xs text-gray-600">InnovateLab</div>
          </div>
        </div>
      </div>

      {/* Third test review */}
      <div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-32 bg-white rounded-3xl shadow-2xl border border-gray-200 p-4"
        style={{ zIndex: 50 }}
      >
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <Quote className="w-4 h-4 text-blue-500" />
        </div>
        
        <p className="text-sm text-gray-700 mb-3">
          "3x faster performance as promised. Exceeded all expectations!"
        </p>
        
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
            <User className="w-3 h-3 text-white" />
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-800">Emily Rodriguez</div>
            <div className="text-xs text-gray-600">FutureTech</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingReviews;
