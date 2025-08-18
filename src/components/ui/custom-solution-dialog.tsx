import React, { useState, useEffect, useRef } from "react";
import { X, MessageSquare, Building, User, Mail, Phone, Globe, Target, Calendar, Clock, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CustomSolutionService } from "@/services/custom-solution";

interface CustomSolutionFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  requirements: string;
  additionalInfo: string;
}

interface CustomSolutionDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomSolutionDialog: React.FC<CustomSolutionDialogProps> = ({ isOpen, onClose }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState<CustomSolutionFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    requirements: "",
    additionalInfo: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>("");

  const projectTypes = [
    "AI Integration & Chatbots",
    "Custom Web Application",
    "E-commerce Platform",
    "Mobile App Development",
    "Business Process Automation",
    "Data Analytics & BI",
    "Cloud Infrastructure",
    "Digital Transformation",
    "Other"
  ];

  const budgetRanges = [
    "Under ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "Above ₹10,00,000",
    "To be discussed"
  ];

  const timelineOptions = [
    "1-2 months",
    "3-4 months",
    "5-6 months",
    "7-12 months",
    "1+ years",
    "Flexible"
  ];

  const handleInputChange = (field: keyof CustomSolutionFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await CustomSolutionService.submitInquiry(formData);
      if (response.success) {
        setIsSubmitted(true);
      } else {
        setError(response.error || "Failed to submit inquiry. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Custom solution submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
      requirements: "",
      additionalInfo: ""
    });
    setIsSubmitted(false);
    setError("");
  };

  useEffect(() => {
    if (isOpen) {
      resetForm();
      // Prevent background scrolling when popup is open
      document.body.classList.add('popup-open');
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
      
      // Focus first input after a short delay to ensure DOM is ready
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
    } else {
      // Restore background scrolling when popup is closed
      document.body.classList.remove('popup-open');
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup function to restore scrolling
    return () => {
      document.body.classList.remove('popup-open');
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };
  }, [isOpen]);

  // Handle Escape key to close popup
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Handle mouse wheel events to prevent background scrolling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isOpen) {
        // Prevent the event from bubbling up to the background
        e.stopPropagation();
        
        // Find the scrollable content area
        const scrollableContent = document.querySelector('.custom-scrollbar') as HTMLElement;
        if (scrollableContent) {
          // Check if we can scroll in the direction of the wheel event
          const { scrollTop, scrollHeight, clientHeight } = scrollableContent;
          const delta = e.deltaY;
          
          // If scrolling up and already at top, or scrolling down and already at bottom
          if ((delta < 0 && scrollTop <= 0) || (delta > 0 && scrollTop >= scrollHeight - clientHeight)) {
            // Prevent default to stop background scrolling
            e.preventDefault();
          }
        }
      }
    };

    if (isOpen) {
      // Add wheel event listener to the document
      document.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/50 backdrop-blur-sm overflow-hidden"
      onClick={onClose}
      onWheel={(e) => {
        // Prevent wheel events on the backdrop from scrolling the background
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div 
        className="bg-background rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden mt-8 mb-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-brand-sky/10 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-brand-sky" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Custom Solution Inquiry</h2>
              <p className="text-muted-foreground">Tell us about your project requirements</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div 
          className="p-6 overflow-y-auto custom-scrollbar popup-content"
          style={{ 
            maxHeight: 'calc(90vh - 140px)'
          }}
          onWheel={(e) => {
            // Prevent wheel events from bubbling up to the background
            e.stopPropagation();
            
            // Get the scrollable element
            const scrollableElement = e.currentTarget;
            const { scrollTop, scrollHeight, clientHeight } = scrollableElement;
            const delta = e.deltaY;
            
            // If we're at the top and trying to scroll up, or at the bottom and trying to scroll down
            if ((delta < 0 && scrollTop <= 0) || (delta > 0 && scrollTop >= scrollHeight - clientHeight)) {
              // Prevent the default behavior to stop background scrolling
              e.preventDefault();
            }
          }}
        >
          {!isSubmitted ? (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center">
                  <User className="h-5 w-5 mr-2 text-brand-sky" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      ref={firstInputRef}
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      required
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <Input
                      required
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center">
                  <Target className="h-5 w-5 mr-2 text-brand-sky" />
                  Project Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type *</label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      value={formData.projectType}
                      onChange={(e) => handleInputChange("projectType", e.target.value)}
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range *</label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      value={formData.budget}
                      onChange={(e) => handleInputChange("budget", e.target.value)}
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Timeline *</label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      value={formData.timeline}
                      onChange={(e) => handleInputChange("timeline", e.target.value)}
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Website (if any)</label>
                    <Input
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-brand-sky" />
                  Project Description
                </h3>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Description *</label>
                  <Textarea
                    required
                    placeholder="Describe your project in detail..."
                    className="min-h-[100px]"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Specific Requirements</label>
                  <Textarea
                    placeholder="List any specific features or requirements..."
                    className="min-h-[100px]"
                    value={formData.requirements}
                    onChange={(e) => handleInputChange("requirements", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Additional Information</label>
                  <Textarea
                    placeholder="Any other details you'd like to share..."
                    className="min-h-[80px]"
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                  />
                </div>
              </div>

              {/* Error Display */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end space-x-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="gradient-primary text-white hover:shadow-glow"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Submit Inquiry
                    </>
                  )}
                </Button>
              </div>
            </form>
          ) : (
            /* Success Message */
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Inquiry Submitted Successfully!
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Thank you for your interest! Our team will review your requirements and get back to you within 24 hours with a customized proposal.
              </p>
              <div className="flex justify-center space-x-3">
                <Button
                  onClick={resetForm}
                  className="gradient-primary text-white hover:shadow-glow"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Submit Another Inquiry
                </Button>
                <Button
                  variant="outline"
                  onClick={onClose}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomSolutionDialog;
