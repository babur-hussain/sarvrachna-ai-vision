import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import FloatingChatbot from "@/components/sections/FloatingChatbot";

const GoogleReviewsBoost = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Google Reviews <span className="gradient-primary bg-clip-text text-transparent">Boost</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategies to improve your online reputation and increase positive reviews.
          </p>
        </div>
      </section>

      {/* Simple Content */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Google Reviews Boost Services</h2>
            <p className="text-lg text-muted-foreground">
              We help businesses improve their online reputation and generate more positive Google reviews.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChatbot />
    </div>
  );
};

export default GoogleReviewsBoost;
