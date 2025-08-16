import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import FloatingChatbot from "@/components/sections/FloatingChatbot";

const EcommerceStores = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            E-commerce <span className="gradient-primary bg-clip-text text-transparent">Stores</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete online stores with secure payments and inventory management systems.
          </p>
        </div>
      </section>

      {/* Simple Content */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">E-commerce Development Services</h2>
            <p className="text-lg text-muted-foreground">
              We build powerful online stores that drive sales and grow your business.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChatbot />
    </div>
  );
};

export default EcommerceStores;
