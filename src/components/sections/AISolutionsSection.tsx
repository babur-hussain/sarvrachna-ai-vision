import { Bot, Brain, BarChart3, Zap, MessageSquare, TrendingUp, Eye, Cog } from "lucide-react";
import { useState } from "react";
import CustomSolutionDialog from "@/components/ui/custom-solution-dialog";

const AISolutionsSection = () => {
  const [isCustomSolutionOpen, setIsCustomSolutionOpen] = useState(false);
  
  const aiSolutions = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Intelligent conversational AI that handles customer queries 24/7 with natural language processing.",
      features: ["Natural Language Processing", "Multi-language Support", "Learning Capabilities"],
      color: "brand-sky",
    },
    {
      icon: Brain,
      title: "Business Automation",
      description: "Streamline operations with AI-powered workflows that reduce manual tasks by up to 80%.",
      features: ["Workflow Automation", "Document Processing", "Smart Scheduling"],
      color: "brand-cyan",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Leverage data insights to forecast trends, optimize inventory, and make informed decisions.",
      features: ["Demand Forecasting", "Risk Analysis", "Performance Optimization"],
      color: "brand-violet",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced image recognition for quality control, security monitoring, and automated inspections.",
      features: ["Image Recognition", "Quality Control", "Real-time Monitoring"],
      color: "brand-pink",
    },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border mb-6">
            <Brain className="w-4 h-4 text-brand-sky mr-2" />
            <span className="text-sm font-medium">AI Solutions</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Intelligent <span className="gradient-primary bg-clip-text text-transparent">AI Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Harness the power of artificial intelligence to automate processes, gain insights, 
            and create exceptional customer experiences.
          </p>
        </div>

        {/* AI Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {aiSolutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl glass hover-lift hover-glow cursor-pointer transition-smooth border"
              >
                <div className={`w-16 h-16 rounded-2xl bg-${solution.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-8 w-8 text-${solution.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {solution.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${solution.color} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-sm font-medium text-brand-sky group-hover:text-brand-cyan transition-colors">
                  Explore Solution →
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center px-8 py-4 rounded-2xl glass border hover-glow transition-smooth">
            <MessageSquare className="w-5 h-5 text-brand-sky mr-3" />
            <span className="text-lg font-medium mr-6">
              Ready to implement AI in your business?
            </span>
            <button 
              onClick={() => setIsCustomSolutionOpen(true)}
              className="px-6 py-2 gradient-primary text-white rounded-lg font-medium hover:shadow-glow transition-smooth"
            >
              Schedule AI Consultation
            </button>
          </div>
        </div>
      </div>
      
      {/* Custom Solution Dialog */}
      <CustomSolutionDialog 
        isOpen={isCustomSolutionOpen} 
        onClose={() => setIsCustomSolutionOpen(false)} 
      />
    </section>
  );
};

export default AISolutionsSection;