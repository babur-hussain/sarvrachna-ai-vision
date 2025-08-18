import React, { useState } from "react";
import { X, Calendar, Clock, User, Mail, Phone, Building, MessageSquare, Sparkles, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DemoBookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoBookingDialog: React.FC<DemoBookingDialogProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
    service: "ai-solutions"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        preferredDate: "",
        preferredTime: "",
        service: "ai-solutions"
      });
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 md:p-6 overscroll-contain overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative w-full max-w-[92vw] md:max-w-2xl">
        <div className="glass rounded-3xl border border-white/20 shadow-2xl backdrop-blur-xl flex flex-col max-h-[85vh] overflow-hidden">
          {/* Header */}
          <div className="relative p-8 pb-6 border-b border-white/10">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-sky/10 border border-brand-sky/30 mb-4">
                <Sparkles className="w-4 h-4 text-brand-sky mr-2" />
                <span className="text-brand-sky text-sm font-medium">AI-Powered Demo</span>
              </div>
              
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Book Your Demo
              </h2>
              <p className="text-muted-foreground text-lg">
                Experience the future of business technology
              </p>
            </div>
          </div>

          {/* Content */}
          <div
            className="p-8 overflow-y-auto flex-1 pr-4 demo-dialog-scroll"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(255, 255, 255, 0.3) transparent'
            }}
            onWheel={(e) => {
              e.stopPropagation();
              const target = e.currentTarget;
              target.scrollTop += e.deltaY;
            }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="relative">
                    <input
                      type="radio"
                      id="ai-solutions"
                      name="service"
                      value="ai-solutions"
                      checked={formData.service === "ai-solutions"}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <label
                      htmlFor="ai-solutions"
                      className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        formData.service === "ai-solutions"
                          ? "border-brand-sky bg-brand-sky/10"
                          : "border-white/20 hover:border-brand-sky/40"
                      }`}
                    >
                      <div className="text-center">
                        <Sparkles className={`w-6 h-6 mx-auto mb-2 ${
                          formData.service === "ai-solutions" ? "text-brand-sky" : "text-muted-foreground"
                        }`} />
                        <div className={`font-medium ${
                          formData.service === "ai-solutions" ? "text-brand-sky" : "text-foreground"
                        }`}>
                          AI Solutions
                        </div>
                      </div>
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="radio"
                      id="web-development"
                      name="service"
                      value="web-development"
                      checked={formData.service === "web-development"}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <label
                      htmlFor="web-development"
                      className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        formData.service === "web-development"
                          ? "border-brand-violet bg-brand-violet/10"
                          : "border-white/20 hover:border-brand-violet/40"
                      }`}
                    >
                      <div className="text-center">
                        <Zap className={`w-6 h-6 mx-auto mb-2 ${
                          formData.service === "web-development" ? "text-brand-violet" : "text-muted-foreground"
                        }`} />
                        <div className={`font-medium ${
                          formData.service === "web-development" ? "text-brand-violet" : "text-foreground"
                        }`}>
                          Web Development
                        </div>
                      </div>
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="radio"
                      id="custom-solution"
                      name="service"
                      value="custom-solution"
                      checked={formData.service === "custom-solution"}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <label
                      htmlFor="custom-solution"
                      className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        formData.service === "custom-solution"
                          ? "border-brand-pink bg-brand-pink/10"
                          : "border-white/20 hover:border-brand-pink/40"
                      }`}
                    >
                      <div className="text-center">
                        <Target className={`w-6 h-6 mx-auto mb-2 ${
                          formData.service === "custom-solution" ? "text-brand-pink" : "text-muted-foreground"
                        }`} />
                        <div className={`font-medium ${
                          formData.service === "custom-solution" ? "text-brand-pink" : "text-foreground"
                        }`}>
                          Custom Solution
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center">
                      <User className="w-4 h-4 mr-2 text-brand-sky" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-brand-sky/50 focus:outline-none focus:ring-2 focus:ring-brand-sky/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground/50"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-brand-sky" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-brand-sky/50 focus:outline-none focus:ring-2 focus:ring-brand-sky/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground/50"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-brand-sky" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-brand-sky/50 focus:outline-none focus:ring-2 focus:ring-brand-sky/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground/50"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center">
                      <Building className="w-4 h-4 mr-2 text-brand-sky" />
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-brand-sky/50 focus:outline-none focus:ring-2 focus:ring-brand-sky/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground/50"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-brand-sky" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-brand-sky/50 focus:outline-none focus:ring-2 focus:ring-brand-sky/20 transition-all duration-300 text-foreground"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-brand-sky" />
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-brand-sky/50 focus:outline-none focus:ring-2 focus:ring-brand-sky/20 transition-all duration-300 text-foreground"
                    >
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2 text-brand-sky" />
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-brand-sky/50 focus:outline-none focus:ring-2 focus:ring-brand-sky/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground/50 resize-none"
                    placeholder="Tell us about your project or specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-lg font-semibold rounded-xl gradient-primary hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Scheduling Demo...
                    </div>
                  ) : (
                    "Schedule Demo"
                  )}
                </Button>
              </form>
            ) : (
              /* Success Message */
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-brand-sky/20 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-brand-sky" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Demo Scheduled Successfully!
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  We've sent you a confirmation email with all the details. Our team will contact you shortly to confirm the demo.
                </p>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-sky/10 border border-brand-sky/30">
                  <span className="text-brand-sky text-sm font-medium">
                    Check your email for confirmation
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoBookingDialog;
