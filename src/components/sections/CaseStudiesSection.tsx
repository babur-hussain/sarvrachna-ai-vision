import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudiesSection = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const caseStudies = [
    {
      client: "TechFlow Solutions",
      industry: "SaaS",
      challenge: "Manual customer support overwhelming team",
      solution: "AI-powered chatbot with smart routing",
      results: {
        efficiency: "+75%",
        cost: "-60%",
        satisfaction: "4.9/5"
      },
      image: "🏢",
      color: "brand-sky"
    },
    {
      client: "RetailMax Chain",
      industry: "Retail",
      challenge: "Inventory management across 50+ stores",
      solution: "Predictive analytics + automated ordering",
      results: {
        efficiency: "+40%",
        cost: "-35%",
        satisfaction: "4.8/5"
      },
      image: "🛍️",
      color: "brand-cyan"
    },
    {
      client: "HealthCare Plus",
      industry: "Healthcare",
      challenge: "Patient appointment scheduling chaos",
      solution: "Smart scheduling with AI optimization",
      results: {
        efficiency: "+65%",
        cost: "-45%",
        satisfaction: "4.9/5"
      },
      image: "🏥",
      color: "brand-violet"
    },
    {
      client: "EduTech Academy",
      industry: "Education",
      challenge: "Personalized learning at scale",
      solution: "AI-driven adaptive learning platform",
      results: {
        efficiency: "+80%",
        cost: "-30%",
        satisfaction: "4.7/5"
      },
      image: "🎓",
      color: "brand-pink"
    },
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentStudy = caseStudies[currentCase];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border mb-6">
            <TrendingUp className="w-4 h-4 text-brand-sky mr-2" />
            <span className="text-sm font-medium">Case Studies</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results, <span className="gradient-primary bg-clip-text text-transparent">Real Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations and 
            achieve remarkable growth through innovative solutions.
          </p>
        </div>

        {/* Main Case Study Display */}
        <div className="relative">
          <div className="glass rounded-3xl border p-8 md:p-12 transition-smooth hover:shadow-large">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-${currentStudy.color}/10 flex items-center justify-center text-3xl`}>
                    {currentStudy.image}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{currentStudy.client}</h3>
                    <p className="text-muted-foreground">{currentStudy.industry} Industry</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-muted-foreground">{currentStudy.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Our Solution</h4>
                    <p className="text-muted-foreground">{currentStudy.solution}</p>
                  </div>
                </div>

                <Button variant="outline" className="mt-8 group">
                  View Full Case Study
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-foreground mb-6">Key Results</h4>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center justify-between p-4 rounded-xl glass border">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className={`h-5 w-5 text-${currentStudy.color}`} />
                      <span className="font-medium">Efficiency Increase</span>
                    </div>
                    <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                      {currentStudy.results.efficiency}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl glass border">
                    <div className="flex items-center space-x-3">
                      <DollarSign className={`h-5 w-5 text-${currentStudy.color}`} />
                      <span className="font-medium">Cost Reduction</span>
                    </div>
                    <span className="text-2xl font-bold gradient-secondary bg-clip-text text-transparent">
                      {currentStudy.results.cost}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl glass border">
                    <div className="flex items-center space-x-3">
                      <Users className={`h-5 w-5 text-${currentStudy.color}`} />
                      <span className="font-medium">Client Satisfaction</span>
                    </div>
                    <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                      {currentStudy.results.satisfaction}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-6 rounded-xl glass border-l-4 border-l-brand-sky bg-gradient-to-r from-brand-sky/5 to-transparent">
                  <p className="text-muted-foreground italic mb-3">
                    "Sarvrachna transformed our entire operation. The AI solutions they implemented 
                    have exceeded our expectations and delivered ROI within the first quarter."
                  </p>
                  <div className="font-medium text-foreground">
                    - CTO, {currentStudy.client}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevCase}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full glass border hover-glow transition-smooth flex items-center justify-center"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextCase}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full glass border hover-glow transition-smooth flex items-center justify-center"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Case Study Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCase(index)}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === currentCase ? 'bg-brand-sky' : 'bg-muted'
              }`}
            />
          ))}
        </div>

        {/* All Case Studies Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              onClick={() => setCurrentCase(index)}
              className={`p-4 rounded-xl cursor-pointer transition-smooth border ${
                index === currentCase 
                  ? `glass border-${study.color}` 
                  : 'bg-muted/50 hover:bg-muted'
              }`}
            >
              <div className="text-2xl mb-2">{study.image}</div>
              <div className="font-semibold text-sm text-foreground">{study.client}</div>
              <div className="text-xs text-muted-foreground">{study.industry}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;