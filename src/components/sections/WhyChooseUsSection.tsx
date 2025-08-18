import { Zap, Shield, Clock, Trophy, Users, Lightbulb, X } from "lucide-react";
import { useState } from "react";

const WhyChooseUsSection = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const reasons = [
    {
      icon: Zap,
      title: "Lightning Fast",
      subtitle: "Rapid Development",
      frontContent: "We deliver projects 3x faster than industry average with our streamlined processes.",
      backContent: "Our agile methodology and pre-built components allow us to reduce development time by 60-70% while maintaining quality.",
      color: "blue",
      bgColor: "bg-blue-500",
      textColor: "text-blue-500",
      details: [
        "Agile Development Methodology",
        "Pre-built Component Library",
        "Automated Testing & Deployment",
        "Continuous Integration/Continuous Deployment (CI/CD)",
        "Microservices Architecture",
        "Cloud-Native Development",
        "Performance Optimization",
        "Scalability Planning"
      ]
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      subtitle: "Cutting-Edge Tech",
      frontContent: "Always using the latest technologies and AI advancements for your competitive edge.",
      backContent: "We invest 20% of our time in R&D, ensuring our clients get access to emerging technologies before their competitors.",
      color: "cyan",
      bgColor: "bg-cyan-500",
      textColor: "text-cyan-500",
      details: [
        "AI & Machine Learning Integration",
        "Blockchain & Web3 Solutions",
        "IoT & Edge Computing",
        "Augmented & Virtual Reality",
        "Quantum Computing Research",
        "5G & Next-Gen Networks",
        "Sustainable Tech Solutions",
        "Emerging Framework Adoption"
      ]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      subtitle: "Bank-Level Protection",
      frontContent: "Military-grade security protocols protecting your data and customer information.",
      backContent: "ISO 27001 certified processes, end-to-end encryption, and compliance with GDPR, HIPAA, and other regulations.",
      color: "violet",
      bgColor: "bg-violet-500",
      textColor: "text-violet-500",
      details: [
        "ISO 27001 Certification",
        "End-to-End Encryption",
        "Multi-Factor Authentication",
        "Penetration Testing",
        "Security Audits & Compliance",
        "Data Privacy Protection",
        "Threat Detection & Response",
        "Disaster Recovery Planning"
      ]
    },
    {
      icon: Clock,
      title: "24/7 Support",
      subtitle: "Always Available",
      frontContent: "Round-the-clock technical support and maintenance for uninterrupted operations.",
      backContent: "Dedicated support team with 15-minute response time and 99.9% uptime guarantee for all our solutions.",
      color: "pink",
      bgColor: "bg-pink-500",
      textColor: "text-pink-500",
      details: [
        "24/7 Technical Support",
        "15-Minute Response Time",
        "99.9% Uptime Guarantee",
        "Dedicated Support Team",
        "Remote Monitoring & Maintenance",
        "Emergency Response Protocols",
        "Proactive Issue Detection",
        "Performance Optimization"
      ]
    },
    {
      icon: Trophy,
      title: "Proven Results",
      subtitle: "Success Stories",
      frontContent: "Over 500 successful projects with measurable ROI improvements for our clients.",
      backContent: "Average 40% increase in efficiency, 60% cost reduction, and 300% ROI within the first year of implementation.",
      color: "sky",
      bgColor: "bg-sky-500",
      textColor: "text-sky-500",
      details: [
        "500+ Successful Projects",
        "40% Average Efficiency Gain",
        "60% Cost Reduction",
        "300% Average ROI",
        "Client Success Stories",
        "Case Study Documentation",
        "Performance Metrics",
        "Long-term Partnership Success"
      ]
    },
    {
      icon: Users,
      title: "Expert Team",
      subtitle: "Industry Leaders",
      frontContent: "World-class developers, AI specialists, and digital strategists at your service.",
      backContent: "Team of 50+ certified professionals with expertise in 20+ technologies and 10+ industries.",
      color: "cyan",
      bgColor: "bg-cyan-500",
      textColor: "text-cyan-500",
      details: [
        "50+ Certified Professionals",
        "20+ Technology Expertise",
        "10+ Industry Experience",
        "AI & ML Specialists",
        "Full-Stack Developers",
        "DevOps Engineers",
        "UX/UI Designers",
        "Project Managers"
      ]
    },
  ];

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-40 h-40 bg-violet-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-cyan-500 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border mb-6">
            <Trophy className="w-4 h-4 text-sky-500 mr-2" />
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Businesses <span className="gradient-secondary bg-clip-text text-transparent">Choose Sarvrachna</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what sets us apart and why leading companies trust us with their 
            digital transformation journey.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            
            return (
              <div
                key={index}
                className="h-64 cursor-pointer group"
                onClick={() => handleCardClick(index)}
              >
                <div className="relative w-full h-full rounded-2xl glass border p-6 hover-lift transition-smooth">
                  <div className={`w-12 h-12 rounded-xl ${reason.bgColor}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-6 w-6 ${reason.textColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {reason.title}
                  </h3>
                  
                  <p className="text-sm text-sky-500 font-medium mb-4">
                    {reason.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.frontContent}
                  </p>

                  <div className="absolute bottom-4 right-4 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    Click for details →
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">15min</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">40%</div>
            <div className="text-sm text-muted-foreground">Avg. Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">300%</div>
            <div className="text-sm text-muted-foreground">Average ROI</div>
          </div>
        </div>
      </div>

      {/* Detail Popup Modal */}
      {selectedCard !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl border shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-xl ${reasons[selectedCard].bgColor}/10 flex items-center justify-center`}>
                    {(() => {
                      const IconComponent = reasons[selectedCard].icon;
                      return <IconComponent className={`h-8 w-8 ${reasons[selectedCard].textColor}`} />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {reasons[selectedCard].title}
                    </h3>
                    <p className="text-lg text-sky-500 font-medium">
                      {reasons[selectedCard].subtitle}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closePopup}
                  className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {reasons[selectedCard].frontContent}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">What We Deliver</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {reasons[selectedCard].backContent}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {reasons[selectedCard].details.map((detail, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${reasons[selectedCard].bgColor}`}></div>
                        <span className="text-muted-foreground text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Ready to experience the difference?
                  </div>
                  <button
                    onClick={closePopup}
                    className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyChooseUsSection;