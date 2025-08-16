import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import FloatingChatbot from "@/components/sections/FloatingChatbot";

const SeoRanking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            SEO & <span className="gradient-primary bg-clip-text text-transparent">Ranking</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced SEO strategies to improve your search engine rankings and visibility.
          </p>
        </div>
      </section>

      {/* Simple Content */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">SEO & Ranking Services</h2>
            <p className="text-lg text-muted-foreground">
              We implement advanced SEO strategies to boost your search engine rankings and increase online visibility.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChatbot />
    </div>
  );
};

export default SeoRanking;
