import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { ArrowRight, Play, ChevronDown, Sparkles, Zap, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLenisContext } from "@/contexts/LenisContext";

const HeroSection = () => {
  const { lenis } = useLenisContext();
  const [currentText, setCurrentText] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [userCountry, setUserCountry] = useState("United States");

  const texts = useMemo(() => [
    "We Power Businesses.",
    "We Power the Future.",
    "We Power You."
  ], []);

  // Typing animation effect
  useEffect(() => {
    const currentFullText = texts[currentText];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentFullText.length) {
        setDisplayText(currentFullText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentText((prev) => (prev + 1) % texts.length);
            setIsTyping(true);
          }, 1000);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentText, texts]);

  // Auto-scroll functionality using Lenis
  const handleScroll = useCallback(() => {
    if (!lenis) return;
    
    const nextSection = document.querySelector('#about-section') as HTMLElement;
    if (nextSection) {
      const targetPosition = nextSection.offsetTop;
      lenis.scrollTo(targetPosition, {
        duration: 2.0, // Slightly longer duration for luxury feel
        easing: (t: number) => 1 - Math.pow(2, -10 * t), // Same exponential easing
      });
    }
  }, [lenis]);

  useEffect(() => {
    if (!lenis) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        handleScroll();
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        event.preventDefault();
        handleScroll();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleScroll, lenis]);

  // Get user's country (simplified)
  useEffect(() => {
    // In a real implementation, you'd use a geolocation API
    const countries = ["United States", "India", "United Kingdom", "Canada", "Australia"];
    setUserCountry(countries[Math.floor(Math.random() * countries.length)]);
  }, []);

  return (
    <section className="relative pt-20 pb-0 overflow-hidden gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-sky/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-brand-violet/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-brand-pink/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-brand-cyan/20 rounded-full blur-xl animate-float-delayed"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--brand-sky)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--brand-sky)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Light-themed Holographic Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-brand-sky/30 rounded-lg rotate-45 animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-brand-violet/30 rounded-full animate-float-delayed opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-brand-pink/30 transform rotate-12 animate-float opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/3 w-14 h-14 border border-brand-cyan/30 rounded-lg animate-float-delayed opacity-60"></div>
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--brand-sky))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--brand-violet))" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <line x1="20%" y1="30%" x2="80%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4" />
          <line x1="80%" y1="30%" x2="20%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4" />
          <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4" />
        </svg>

        {/* Subtle particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-brand-sky/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-0 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Country Highlight Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-brand-sky/30 mb-8 animate-fade-in">
            <span className="w-3 h-3 bg-brand-sky rounded-full mr-3 animate-pulse"></span>
            <span className="text-brand-sky font-medium">Connected from {userCountry}</span>
          </div>

          {/* Animated Typing Headline */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="text-foreground">
                {displayText}
                <span className={`inline-block w-2 h-16 bg-brand-sky ml-2 ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            Transform your business with cutting-edge AI solutions, holographic interfaces, 
            and next-generation technology that drives exponential growth.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto animate-fade-in-delayed-2">
            <div className="flex flex-col items-center p-6 rounded-xl glass border border-brand-sky/20 hover:border-brand-sky/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-brand-sky/10 flex items-center justify-center mb-4 group-hover:bg-brand-sky/20 transition-colors">
                <Sparkles className="h-6 w-6 text-brand-sky" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">AI-Powered</h3>
              <p className="text-sm text-muted-foreground text-center">Cutting-edge artificial intelligence solutions</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-xl glass border border-brand-violet/20 hover:border-brand-violet/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-brand-violet/10 flex items-center justify-center mb-4 group-hover:bg-brand-violet/20 transition-colors">
                <Zap className="h-6 w-6 text-brand-violet" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground text-center">3x faster than industry average</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-xl glass border border-brand-pink/20 hover:border-brand-pink/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center mb-4 group-hover:bg-brand-pink/20 transition-colors">
                <Target className="h-6 w-6 text-brand-violet" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Results-Driven</h3>
              <p className="text-sm text-muted-foreground text-center">Proven track record of success</p>
            </div>
          </div>

          {/* Glowing CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 animate-fade-in-delayed-2">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
            >
              <Play className="mr-2 h-5 w-5" />
              Book a Demo
            </Button>
          </div>

          {/* Stats with Neon Glow */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-delayed-3">
            <div className="text-center group">
              <div className="text-4xl font-bold text-brand-sky mb-2 group-hover:text-brand-sky/80 transition-colors">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-brand-violet mb-2 group-hover:text-brand-violet/80 transition-colors">200+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-brand-pink mb-2 group-hover:text-brand-pink/80 transition-colors">4.9★</div>
              <div className="text-sm text-muted-foreground">Client Rating</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-brand-cyan mb-2 group-hover:text-brand-cyan/80 transition-colors">24/7</div>
              <div className="text-sm text-muted-foreground">AI Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="text-center mt-0 animate-bounce">
        <button 
          onClick={handleScroll}
          className="w-12 h-12 border-2 border-brand-sky rounded-full flex items-center justify-center text-brand-sky hover:bg-brand-sky hover:text-white transition-all duration-300 backdrop-blur-sm mx-auto"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;