import { Zap, Shield, Clock, Trophy, Users, Lightbulb } from "lucide-react";
import { useState } from "react";

const WhyChooseUsSection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const reasons = [
    {
      icon: Zap,
      title: "Lightning Fast",
      subtitle: "Rapid Development",
      frontContent: "We deliver projects 3x faster than industry average with our streamlined processes.",
      backContent: "Our agile methodology and pre-built components allow us to reduce development time by 60-70% while maintaining quality.",
      color: "brand-sky",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      subtitle: "Cutting-Edge Tech",
      frontContent: "Always using the latest technologies and AI advancements for your competitive edge.",
      backContent: "We invest 20% of our time in R&D, ensuring our clients get access to emerging technologies before their competitors.",
      color: "brand-cyan",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      subtitle: "Bank-Level Protection",
      frontContent: "Military-grade security protocols protecting your data and customer information.",
      backContent: "ISO 27001 certified processes, end-to-end encryption, and compliance with GDPR, HIPAA, and other regulations.",
      color: "brand-violet",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      subtitle: "Always Available",
      frontContent: "Round-the-clock technical support and maintenance for uninterrupted operations.",
      backContent: "Dedicated support team with 15-minute response time and 99.9% uptime guarantee for all our solutions.",
      color: "brand-pink",
    },
    {
      icon: Trophy,
      title: "Proven Results",
      subtitle: "Success Stories",
      frontContent: "Over 500 successful projects with measurable ROI improvements for our clients.",
      backContent: "Average 40% increase in efficiency, 60% cost reduction, and 300% ROI within the first year of implementation.",
      color: "brand-sky",
    },
    {
      icon: Users,
      title: "Expert Team",
      subtitle: "Industry Leaders",
      frontContent: "World-class developers, AI specialists, and digital strategists at your service.",
      backContent: "Team of 50+ certified professionals with expertise in 20+ technologies and 10+ industries.",
      color: "brand-cyan",
    },
  ];

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-40 h-40 bg-brand-violet rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-brand-cyan rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border mb-6">
            <Trophy className="w-4 h-4 text-brand-sky mr-2" />
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

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isFlipped = flippedCard === index;
            
            return (
              <div
                key={index}
                className="h-64 cursor-pointer perspective-1000"
                onClick={() => handleCardClick(index)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl glass border p-6 hover-lift transition-smooth">
                    <div className={`w-12 h-12 rounded-xl bg-${reason.color}/10 flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 text-${reason.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {reason.title}
                    </h3>
                    
                    <p className="text-sm text-brand-sky font-medium mb-4">
                      {reason.subtitle}
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.frontContent}
                    </p>

                    <div className="absolute bottom-4 right-4 text-xs text-muted-foreground">
                      Click to flip →
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl glass border p-6 hover-lift transition-smooth gradient-card">
                    <div className={`w-12 h-12 rounded-xl bg-${reason.color}/20 flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 text-${reason.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {reason.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {reason.backContent}
                    </p>

                    <div className="absolute bottom-4 right-4 text-xs text-muted-foreground">
                      ← Click to flip back
                    </div>
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
    </section>
  );
};

export default WhyChooseUsSection;