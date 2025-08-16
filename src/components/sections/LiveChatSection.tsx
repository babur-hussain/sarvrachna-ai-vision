import { Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiveChatSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border mb-6">
              <Bot className="w-4 h-4 text-brand-sky mr-2" />
              <span className="text-sm font-medium">Live AI Demo</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience Our <span className="gradient-primary bg-clip-text text-transparent">AI Technology</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Try our intelligent chatbot and see how AI can revolutionize your customer 
              interactions. This is just a preview of what we can build for your business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-brand-sky/10 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-brand-sky" />
                </div>
                <div className="text-center">
                  <div className="font-semibold">Natural Language Processing</div>
                  <div className="text-sm text-muted-foreground">Understands context and intent</div>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-brand-cyan/10 flex items-center justify-center">
                  <Bot className="h-8 w-8 text-brand-cyan" />
                </div>
                <div className="text-center">
                  <div className="font-semibold">24/7 Availability</div>
                  <div className="text-sm text-muted-foreground">Never miss a customer inquiry</div>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-brand-violet/10 flex items-center justify-center">
                  <User className="h-8 w-8 text-brand-violet" />
                </div>
                <div className="text-center">
                  <div className="font-semibold">Personalized Responses</div>
                  <div className="text-sm text-muted-foreground">Tailored to each visitor's needs</div>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="mt-8">
              Get Your AI Chatbot
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveChatSection;