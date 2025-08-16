import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import FloatingChatbot from "@/components/sections/FloatingChatbot";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Simple Test Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-8 text-foreground">
            About <span className="text-brand-sky">Sarvrachna</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We're building the future of business through cutting-edge AI solutions.
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
            <p className="text-muted-foreground">
              To democratize AI technology and make it accessible to businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChatbot />
    </div>
  );
};

export default About;
