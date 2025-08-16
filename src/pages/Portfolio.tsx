import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import FloatingChatbot from "@/components/sections/FloatingChatbot";
import { 
  ExternalLink, 
  Play, 
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Smartphone,
  Globe,
  ShoppingCart,
  Brain,
  Camera,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "EcoSmart Mobile App",
      category: "Mobile Development",
      description: "A sustainable living app that helps users track their carbon footprint and make eco-friendly choices.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Node.js", "MongoDB", "AI Analytics"],
      results: {
        users: "50K+",
        rating: "4.8",
        downloads: "100K+"
      },
      icon: Smartphone,
      color: "brand-sky"
    },
    {
      id: 2,
      title: "GlobalTech E-commerce",
      category: "E-commerce Platform",
      description: "A comprehensive online marketplace connecting global suppliers with businesses worldwide.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      results: {
        revenue: "$2M+",
        orders: "25K+",
        countries: "45+"
      },
      icon: ShoppingCart,
      color: "brand-violet"
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      category: "AI Integration",
      description: "Intelligent business intelligence platform with predictive analytics and automated insights.",
      image: "/placeholder.svg",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      results: {
        accuracy: "95%",
        insights: "1000+",
        timeSaved: "40hrs/week"
      },
      icon: Brain,
      color: "brand-pink"
    },
    {
      id: 4,
      title: "Restaurant360 Management System",
      category: "QR & POS Solutions",
      description: "Complete restaurant management system with QR menus, POS, and inventory tracking.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Node.js", "MySQL", "Socket.io"],
      results: {
        efficiency: "60%",
        orders: "500+/day",
        satisfaction: "4.9"
      },
      icon: Camera,
      color: "brand-cyan"
    },
    {
      id: 5,
      title: "FinTech Mobile Banking",
      category: "Financial Technology",
      description: "Secure mobile banking app with AI-powered fraud detection and personalized financial insights.",
      image: "/placeholder.svg",
      technologies: ["Flutter", "Firebase", "TensorFlow", "Blockchain"],
      results: {
        users: "200K+",
        security: "99.9%",
        transactions: "$50M+"
      },
      icon: Smartphone,
      color: "brand-sky"
    },
    {
      id: 6,
      title: "Smart City IoT Platform",
      category: "IoT & Smart Cities",
      description: "Comprehensive IoT platform for smart city management and infrastructure monitoring.",
      image: "/placeholder.svg",
      technologies: ["Python", "Kubernetes", "InfluxDB", "React"],
      results: {
        sensors: "10K+",
        cities: "15+",
        efficiency: "35%"
      },
      icon: Globe,
      color: "brand-violet"
    }
  ];

  const categories = [
    "All Projects",
    "Mobile Development",
    "E-commerce",
    "AI Integration",
    "Web Applications",
    "IoT Solutions"
  ];

  const stats = [
    { label: "Projects Completed", value: "150+", icon: Star },
    { label: "Happy Clients", value: "80+", icon: Users },
    { label: "Success Rate", value: "98%", icon: TrendingUp },
    { label: "Technologies Used", value: "25+", icon: Zap }
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
              <span className="text-brand-sky font-medium">Our Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Showcasing{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform their digital presence 
              with cutting-edge technology and innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="hero" size="lg" className="group">
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-brand-sky/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-brand-sky" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each project represents our commitment to excellence and innovation in digital transformation.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  index === 0
                    ? 'bg-brand-sky text-white border-brand-sky'
                    : 'bg-transparent text-foreground border-brand-sky/30 hover:border-brand-sky/60'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div key={project.id} className="group rounded-2xl glass border border-brand-sky/20 hover:border-brand-sky/40 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-to-br from-brand-sky/10 to-brand-violet/10 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className={`h-24 w-24 text-${project.color}`} />
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="outline" size="sm" className="bg-white/90 text-foreground hover:bg-white">
                        <Play className="h-4 w-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-brand-sky font-medium">{project.category}</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-brand-sky transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs bg-brand-sky/10 text-brand-sky rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Results */}
                    <div className="border-t border-brand-sky/20 pt-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {Object.entries(project.results).slice(0, 3).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-lg font-bold text-brand-sky">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full glass border mb-6">
                <span className="w-2 h-2 bg-brand-pink rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-medium">Featured Case Study</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How We Helped{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  EcoSmart
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover how our AI-powered mobile app helped EcoSmart achieve 500% user growth 
                and become the leading sustainable living platform in their market.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-brand-sky rounded-full mr-3"></div>
                  <span className="text-foreground">500% user growth in 6 months</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-brand-sky rounded-full mr-3"></div>
                  <span className="text-foreground">4.8-star app store rating</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-brand-sky rounded-full mr-3"></div>
                  <span className="text-foreground">$2M+ in funding secured</span>
                </div>
              </div>
              
              <Button variant="hero" size="lg" className="group">
                <span className="relative z-10">Read Full Case Study</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 rounded-2xl glass border border-brand-sky/20 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-brand-sky/10 to-brand-pink/10 flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="h-24 w-24 text-brand-sky mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">EcoSmart App</h3>
                    <p className="text-muted-foreground">Sustainable living made simple</p>
                  </div>
                </div>
              </div>
            </div>
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
              Ready to Start Your{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Project?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Let's create something amazing together. Your next success story starts here.
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

export default Portfolio;
