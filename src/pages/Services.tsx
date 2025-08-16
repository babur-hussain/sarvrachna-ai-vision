import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import FloatingChatbot from "@/components/sections/FloatingChatbot";
import { 
  Smartphone, 
  Globe, 
  ShoppingCart, 
  QrCode, 
  Brain, 
  Star, 
  Camera, 
  TrendingUp,
  ArrowRight,
  Play,
  CheckCircle,
  Zap,
  Shield,
  Clock,
  Users,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native iOS & Android apps with cutting-edge features and seamless user experience.",
      features: ["Cross-platform compatibility", "Native performance", "Modern UI/UX", "App Store optimization"],
      color: "brand-sky",
      price: "From $5,000"
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites built with the latest technologies and best practices.",
      features: ["Responsive design", "SEO optimized", "Fast loading", "Modern tech stack"],
      color: "brand-cyan",
      price: "From $3,000"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Stores",
      description: "Complete online stores with secure payments and inventory management systems.",
      features: ["Payment integration", "Inventory management", "Order tracking", "Analytics dashboard"],
      color: "brand-violet",
      price: "From $8,000"
    },
    {
      icon: QrCode,
      title: "QR Menus & POS",
      description: "Digital menu solutions and point-of-sale systems for restaurants and retail.",
      features: ["Contactless ordering", "Real-time updates", "Payment processing", "Analytics"],
      color: "brand-pink",
      price: "From $2,500"
    },
    {
      icon: Brain,
      title: "AI Integrations",
      description: "Custom AI solutions including chatbots, automation, and machine learning models.",
      features: ["Custom AI models", "Process automation", "Predictive analytics", "Natural language processing"],
      color: "brand-sky",
      price: "From $10,000"
    },
    {
      icon: Star,
      title: "Google Reviews Boost",
      description: "Strategies to improve your online reputation and increase positive reviews.",
      features: ["Review management", "Reputation monitoring", "Customer feedback", "Response automation"],
      color: "brand-cyan",
      price: "From $1,500"
    },
    {
      icon: Camera,
      title: "360° Google Maps",
      description: "Professional virtual tours and 360° photography for your business location.",
      features: ["360° photography", "Virtual tours", "Google Maps integration", "Professional quality"],
      color: "brand-violet",
      price: "From $2,000"
    },
    {
      icon: TrendingUp,
      title: "SEO & Ranking",
      description: "Advanced SEO strategies to improve your search engine rankings and visibility.",
      features: ["Keyword research", "Content optimization", "Technical SEO", "Performance tracking"],
      color: "brand-pink",
      price: "From $2,000"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a comprehensive project plan.",
      icon: Brain
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create beautiful, user-friendly interfaces and prototypes.",
      icon: Globe
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Expert developers build your solution with rigorous testing at every stage.",
      icon: Smartphone
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We launch your project and provide ongoing support and maintenance.",
      icon: Award
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "3x faster than industry average with optimized performance."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols to protect your data and users."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced developers, designers, and AI specialists."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-brand-sky/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-brand-violet/20 rounded-full blur-xl animate-float-delayed"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-brand-sky/30 mb-8 animate-fade-in">
              <span className="w-3 h-3 bg-brand-sky rounded-full mr-3 animate-pulse"></span>
              <span className="text-brand-sky font-medium">Our Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Comprehensive{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              From mobile apps to AI-powered solutions, we deliver cutting-edge technology 
              that transforms your business and accelerates growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="hero" size="lg" className="group">
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We <span className="gradient-primary bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored solutions designed to meet your specific business needs and drive results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group p-8 rounded-2xl glass border border-brand-sky/20 hover:border-brand-sky/40 transition-all duration-300 hover:shadow-glow hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-2xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:bg-${service.color}/20 transition-colors`}>
                    <Icon className={`h-8 w-8 text-${service.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-brand-sky mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-brand-sky">{service.price}</span>
                    <Button variant="outline" size="sm" className="group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-primary bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures your project is delivered on time, 
              within budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-sky/20 to-brand-violet/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Icon className="h-10 w-10 text-brand-sky" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-sky text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-primary bg-clip-text text-transparent">Sarvrachna</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just build solutions - we build partnerships that drive lasting success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6 rounded-2xl glass border border-brand-sky/20 hover:border-brand-sky/40 transition-all duration-300 hover:shadow-glow">
                  <div className="w-16 h-16 rounded-2xl bg-brand-sky/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-sky/20 transition-colors">
                    <Icon className="h-8 w-8 text-brand-sky" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-brand-pink/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-brand-cyan/20 rounded-full blur-xl animate-float-delayed"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get <span className="gradient-primary bg-clip-text text-transparent">Started?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Let's discuss your project requirements and create a custom solution 
              that perfectly fits your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="hero" size="lg" className="group">
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChatbot />
    </div>
  );
};

export default Services;
