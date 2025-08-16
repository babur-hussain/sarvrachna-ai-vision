import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started",
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        "Basic Website Development",
        "Mobile Responsive Design",
        "SEO Optimization",
        "3 Months Support",
        "Basic Analytics",
        "Contact Forms"
      ],
      popular: false,
      color: "brand-sky"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 2499,
      yearlyPrice: 24990,
      features: [
        "Everything in Starter",
        "Custom Web Application",
        "AI Chatbot Integration",
        "E-commerce Functionality",
        "6 Months Support",
        "Advanced Analytics",
        "Payment Gateway Integration",
        "Social Media Integration"
      ],
      popular: true,
      color: "brand-violet"
    },
    {
      name: "Enterprise",
      description: "For large-scale business transformation",
      monthlyPrice: 4999,
      yearlyPrice: 49990,
      features: [
        "Everything in Professional",
        "Custom AI Solutions",
        "Advanced Automation",
        "Multi-platform Development",
        "12 Months Support",
        "Dedicated Account Manager",
        "Custom Integrations",
        "Priority Support",
        "Training & Onboarding"
      ],
      popular: false,
      color: "brand-pink"
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border mb-6">
            <Star className="w-4 h-4 text-brand-sky mr-2" />
            <span className="text-sm font-medium">Pricing Plans</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="gradient-primary bg-clip-text text-transparent">Growth Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Flexible pricing options designed to scale with your business. 
            All plans include our cutting-edge technology and expert support.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 rounded-full glass border">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-smooth ${
                !isYearly 
                  ? 'gradient-primary text-white shadow-glow' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-smooth ${
                isYearly 
                  ? 'gradient-primary text-white shadow-glow' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              <span className="ml-2 px-2 py-1 bg-brand-sky/20 text-brand-sky rounded text-xs">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const period = isYearly ? '/year' : '/month';
            
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-smooth hover-lift ${
                  plan.popular 
                    ? 'glass border-brand-violet shadow-glow' 
                    : 'glass hover-glow'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-2 gradient-secondary text-white rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-${plan.color}/10 flex items-center justify-center mx-auto mb-4`}>
                    <Zap className={`h-8 w-8 text-${plan.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">
                      ${price.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground ml-2">{period}</span>
                  </div>

                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    size="lg" 
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">What's included:</h4>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full bg-${plan.color}/10 flex items-center justify-center`}>
                        <Check className={`h-3 w-3 text-${plan.color}`} />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center px-8 py-6 rounded-2xl glass border hover-glow transition-smooth">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-4">
              Contact our team for enterprise pricing and custom packages
            </p>
            <Button variant="outline" size="lg">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;