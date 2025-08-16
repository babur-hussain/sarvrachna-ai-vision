import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="gradient-primary bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to transform your business? Get in touch with our team of experts 
              and discover how we can help you achieve your digital goals.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-sky/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-brand-sky" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-brand-cyan" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">hello@sarvrachna.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-violet/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-brand-violet" />
                </div>
                <div>
                  <div className="font-semibold">Office</div>
                  <div className="text-muted-foreground">123 Tech Street, Innovation City</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-brand-pink" />
                </div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-muted-foreground">+1 (555) 987-6543</div>
                </div>
              </div>
            </div>

            <Button variant="whatsapp" size="lg" className="mt-8">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input type="tel" placeholder="Your phone number" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Interest</label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                  <option>Select a service</option>
                  <option>App Development</option>
                  <option>Website Development</option>
                  <option>E-commerce Store</option>
                  <option>AI Integration</option>
                  <option>SEO & Marketing</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your project..."
                  className="min-h-[120px]"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;