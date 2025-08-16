import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as THREE from "three";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [userCountry, setUserCountry] = useState("United States");
  const globeRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const globeRef3D = useRef<THREE.Mesh | null>(null);
  const animationRef = useRef<number | null>(null);

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

  // Initialize 3D Globe
  const initGlobe = useCallback(() => {
    if (!globeRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      globeRef.current.clientWidth / globeRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(globeRef.current.clientWidth, globeRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    globeRef.current.appendChild(renderer.domElement);

    // Create globe geometry
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Create holographic material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        glowColor: { value: new THREE.Color(0x00ffff) }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 glowColor;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          vec3 glow = glowColor * intensity * 0.5;
          
          // Grid pattern
          float grid = 0.0;
          vec2 uv = vPosition.xy;
          grid += step(0.95, fract(uv.x * 10.0));
          grid += step(0.95, fract(uv.y * 10.0));
          grid = min(grid, 1.0);
          
          // Animated glow
          float pulse = sin(time * 2.0) * 0.5 + 0.5;
          vec3 finalColor = glow + grid * glowColor * pulse * 0.3;
          
          gl_FragColor = vec4(finalColor, 0.8);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    });

    const globe = new THREE.Mesh(geometry, material);
    globeRef3D.current = globe;
    scene.add(globe);

    // Add connection lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    
    // Create random connection points
    for (let i = 0; i < 50; i++) {
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      const x = Math.sin(theta) * Math.cos(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(theta);
      
      linePositions.push(x * 1.2, y * 1.2, z * 1.2);
    }
    
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.3
    });
    
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Add floating particles
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = [];
    
    for (let i = 0; i < 200; i++) {
      particlePositions.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
    }
    
    particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.02,
      transparent: true,
      opacity: 0.6
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Animation loop
    const animate = (time: number) => {
      animationRef.current = requestAnimationFrame(animate);
      
      if (material.uniforms) {
        material.uniforms.time.value = time * 0.001;
      }
      
      globe.rotation.y += 0.005;
      globe.rotation.x += 0.002;
      
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;
      
      lines.rotation.y += 0.003;
      
      renderer.render(scene, camera);
    };
    
    animate(0);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      globe.rotation.y += mouseX * 0.01;
      globe.rotation.x += mouseY * 0.01;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Touch interaction
    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      const touch = event.touches[0];
      mouseX = (touch.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(touch.clientY / window.innerHeight) * 2 + 1;
      
      globe.rotation.y += mouseX * 0.01;
      globe.rotation.x += mouseY * 0.01;
    };
    
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (globeRef.current && renderer.domElement) {
        globeRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Initialize globe on mount
  useEffect(() => {
    const cleanup = initGlobe();
    
    // Handle resize
    const handleResize = () => {
      if (globeRef.current && rendererRef.current) {
        const width = globeRef.current.clientWidth;
        const height = globeRef.current.clientHeight;
        rendererRef.current.setSize(width, height);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cleanup?.();
      window.removeEventListener('resize', handleResize);
    };
  }, [initGlobe]);

  // Auto-scroll functionality
  const handleScroll = useCallback(() => {
    const nextSection = document.querySelector('#about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        handleScroll();
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        handleScroll();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleScroll]);

  // Get user's country (simplified)
  useEffect(() => {
    // In a real implementation, you'd use a geolocation API
    const countries = ["United States", "India", "United Kingdom", "Canada", "Australia"];
    setUserCountry(countries[Math.floor(Math.random() * countries.length)]);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Globe Container */}
      <div 
        ref={globeRef} 
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Holographic Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #00ffff 1px, transparent 1px),
            linear-gradient(0deg, #00ffff 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Neon Accents */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Country Highlight Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-black/50 backdrop-blur-sm border border-cyan-500/30 mb-8 animate-fade-in">
            <span className="w-3 h-3 bg-cyan-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-cyan-400 font-medium">Connected from {userCountry}</span>
          </div>

          {/* Animated Typing Headline */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="text-white">
                {displayText}
                <span className={`inline-block w-2 h-16 bg-cyan-500 ml-2 ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            Transform your business with cutting-edge AI solutions, holographic interfaces, 
            and next-generation technology that drives exponential growth.
          </p>

          {/* Glowing CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in-delayed-2">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group relative overflow-hidden border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Book a Demo
            </Button>
          </div>

          {/* Stats with Neon Glow */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in-delayed-3">
            <div className="text-center group">
              <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">500+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">200+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-pink-400 mb-2 group-hover:text-pink-300 transition-colors">4.9★</div>
              <div className="text-sm text-gray-400">Client Rating</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">24/7</div>
              <div className="text-sm text-gray-400">AI Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <button 
          onClick={handleScroll}
          className="w-12 h-12 border-2 border-cyan-500 rounded-full flex items-center justify-center text-cyan-500 hover:bg-cyan-500 hover:text-black transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;