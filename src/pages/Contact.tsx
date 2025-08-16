import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import FloatingChatbot from "@/components/sections/FloatingChatbot";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  ArrowRight,
  CheckCircle,
  Globe,
  Users,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@sarvrachna.com", "support@sarvrachna.com"],
      color: "brand-sky"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "brand-violet"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Innovation Drive", "Tech Valley, CA 94000"],
      color: "brand-pink"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM-6PM PST", "Sat: 10AM-4PM PST"],
      color: "brand-cyan"
    }
  ];

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications"
    },
    {
      icon: Users,
      title: "Mobile Apps",
      description: "iOS and Android development"
    },
    {
      icon: Zap,
      title: "AI Solutions",
      description: "Machine learning and automation"
    }
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes, we offer various support packages including maintenance, updates, and 24/7 technical support. We're committed to your long-term success."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We work with modern technologies including React, Node.js, Python, AI/ML frameworks, and cloud platforms. We choose the best tech stack for your specific needs."
    },
    {
      question: "How do you handle project communication?",
      answer: "We use project management tools, regular video calls, and detailed progress reports. You'll have a dedicated project manager for seamless communication."
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
              <span className="text-brand-sky font-medium">Get in Touch</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Let's Build{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? 
              Let's discuss your project and explore the possibilities together.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="hero" size="lg" className="group">
                <span className="relative z-10">Start a Project</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <MessageSquare className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="text-center p-6 rounded-2xl glass border border-brand-sky/20 hover:border-brand-sky/40 transition-all duration-300 hover:shadow-glow">
                  <div className={`w-16 h-16 rounded-2xl bg-${info.color}/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-${info.color}/20 transition-colors`}>
                    <Icon className={`h-8 w-8 text-${info.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Send Us a <span className="gradient-primary bg-clip-text text-transparent">Message</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-brand-sky/30 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky/50 transition-all"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-brand-sky/30 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky/50 transition-all"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brand-sky/30 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky/50 transition-all"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-brand-sky/30 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky/50 transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-brand-sky/30 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky/50 transition-all"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Type *</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brand-sky/30 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky/50 transition-all"
                  >
                    <option value="">Select a project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="e-commerce">E-commerce</option>
                    <option value="ai-integration">AI Integration</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Budget</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-brand-sky/30 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky/50 transition-all">
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Description *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-brand-sky/30 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky/50 transition-all resize-none"
                    placeholder="Tell us about your project, goals, and requirements..."
                  ></textarea>
                </div>
                
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 text-brand-sky focus:ring-brand-sky/50 border-brand-sky/30 rounded"
                  />
                  <label className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <a href="#" className="text-brand-sky hover:underline">Privacy Policy</a>{" "}
                    and{" "}
                    <a href="#" className="text-brand-sky hover:underline">Terms of Service</a>
                  </label>
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  <span className="relative z-10">Send Message</span>
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
            
            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="rounded-2xl glass border border-brand-sky/20 overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-brand-sky/10 to-brand-violet/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-24 w-24 text-brand-sky mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Our Location</h3>
                    <p className="text-muted-foreground mb-4">Tech Valley, California</p>
                    <Button variant="outline" size="sm">
                      View on Google Maps
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Services */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Services We Offer</h3>
                <div className="space-y-4">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-lg glass border border-brand-sky/20">
                        <div className="w-12 h-12 rounded-lg bg-brand-sky/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-brand-sky" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{service.title}</h4>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Response Time */}
              <div className="p-6 rounded-2xl glass border border-brand-sky/20 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-sky/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-brand-sky" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Quick Response</h3>
                <p className="text-sm text-muted-foreground">We typically respond within 2-4 hours during business hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="gradient-primary bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about working with us.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl glass border border-brand-sky/20">
                <h3 className="text-lg font-semibold mb-3 text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
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
              Let's discuss your vision and turn it into reality. 
              Our team is ready to help you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="hero" size="lg" className="group">
                <span className="relative z-10">Start a Project</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <MessageSquare className="mr-2 h-5 w-5" />
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

export default Contact;
