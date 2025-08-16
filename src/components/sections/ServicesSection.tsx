import { 
  Smartphone, 
  Globe, 
  ShoppingCart, 
  QrCode, 
  Brain, 
  Star, 
  Camera, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native iOS & Android apps with cutting-edge features and seamless user experience.",
      color: "brand-sky",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites built with the latest technologies and best practices.",
      color: "brand-cyan",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Stores",
      description: "Complete online stores with secure payments and inventory management systems.",
      color: "brand-violet",
    },
    {
      icon: QrCode,
      title: "QR Menus & POS",
      description: "Digital menu solutions and point-of-sale systems for restaurants and retail.",
      color: "brand-pink",
    },
    {
      icon: Brain,
      title: "AI Integrations",
      description: "Custom AI solutions including chatbots, automation, and machine learning models.",
      color: "brand-sky",
    },
    {
      icon: Star,
      title: "Google Reviews Boost",
      description: "Strategies to improve your online reputation and increase positive reviews.",
      color: "brand-cyan",
    },
    {
      icon: Camera,
      title: "360° Google Maps",
      description: "Professional virtual tours and 360° photography for your business location.",
      color: "brand-violet",
    },
    {
      icon: TrendingUp,
      title: "SEO & Ranking",
      description: "Advanced SEO strategies to improve your search engine rankings and visibility.",
      color: "brand-pink",
    },
  ];

  return (
    <section className="pt-0 pb-24 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to transform your business 
            and accelerate your growth in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl glass hover-lift hover-glow cursor-pointer transition-smooth"
              >
                <div className={`w-12 h-12 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-6 w-6 text-${service.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4">
                  <a 
                    href={(() => {
                      let href;
                      if (service.title === "360° Google Maps") {
                        href = "/google-maps-360";
                      } else {
                        href = `/${service.title.toLowerCase()
                          .replace(/[°]/g, '') // Remove degree symbol first
                          .replace(/[&]/g, 'and') // Replace & with 'and' before removing special chars
                          .replace(/[^\w\s-]/g, '') // Remove remaining special characters except letters, numbers, spaces, and hyphens
                          .replace(/\s+/g, '-') // Replace spaces with hyphens
                          .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
                          .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
                        }`;
                      }
                      console.log(`Generated href for "${service.title}": ${href}`);
                      return href;
                    })()}
                    onClick={(e) => {
                      console.log(`Clicked on: ${service.title}`);
                      console.log(`Navigating to: ${e.currentTarget.href}`);
                    }}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-foreground bg-transparent border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group cursor-pointer"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-4 rounded-2xl glass border hover-glow transition-smooth">
            <span className="text-lg font-medium mr-4">
              Need a custom solution?
            </span>
            <button className="px-6 py-2 gradient-primary text-white rounded-lg font-medium hover:shadow-glow transition-smooth">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;