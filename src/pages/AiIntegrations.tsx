import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import FloatingChatbot from "@/components/sections/FloatingChatbot";

const AiIntegrations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI <span className="gradient-primary bg-clip-text text-transparent">Integrations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Custom AI solutions including chatbots, automation, and machine learning models.
          </p>
        </div>
      </section>

      {/* Simple Content */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">AI Integration Services</h2>
            <p className="text-lg text-muted-foreground">
              We integrate cutting-edge AI solutions to automate and optimize your business processes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChatbot />
    </div>
  );
};

export default AiIntegrations;
