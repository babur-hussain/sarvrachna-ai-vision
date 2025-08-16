import { Play, Target, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-sky rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-brand-violet rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border mb-6">
              <span className="w-2 h-2 bg-brand-cyan rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">Our Story</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Ideas into{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Founded with a vision to democratize AI and cutting-edge technology for businesses 
              of all sizes, Sarvrachna has been at the forefront of digital transformation since 
              our inception.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              We believe that every business, regardless of size, deserves access to enterprise-level 
              technology solutions. Our team of expert developers, AI specialists, and digital 
              strategists work tirelessly to bridge the gap between complex technology and practical 
              business applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-sky/10 flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-brand-sky" />
                </div>
                <h3 className="font-semibold mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">Empowering businesses through innovative technology</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-violet/10 flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="h-6 w-6 text-brand-violet" />
                </div>
                <h3 className="font-semibold mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">Making advanced AI accessible to everyone</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-brand-pink" />
                </div>
                <h3 className="font-semibold mb-2">Our Values</h3>
                <p className="text-sm text-muted-foreground">Innovation, integrity, and client success</p>
              </div>
            </div>

            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 h-4 w-4" />
              Watch Our Story
            </Button>
          </div>

          {/* Video/Visual Section */}
          <div className="relative">
            <div className="aspect-video rounded-2xl glass overflow-hidden hover-lift transition-smooth">
              <div className="w-full h-full bg-gradient-to-br from-brand-sky/20 to-brand-violet/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full glass border flex items-center justify-center mb-4 mx-auto hover-glow cursor-pointer transition-smooth">
                    <Play className="h-8 w-8 text-brand-sky ml-1" />
                  </div>
                  <p className="text-muted-foreground">Watch our team in action</p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 glass p-4 rounded-xl border hover-lift transition-smooth">
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>

            <div className="absolute -bottom-4 -left-4 glass p-4 rounded-xl border hover-lift transition-smooth">
              <div className="text-2xl font-bold text-foreground">5+ Years</div>
              <div className="text-sm text-muted-foreground">Industry Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;