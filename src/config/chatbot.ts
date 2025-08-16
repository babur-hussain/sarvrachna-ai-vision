// Chatbot Configuration
// This file contains dummy credentials for now, but can be easily updated with live credentials later

export const chatbotConfig = {
  // Bot identity
  botName: "Sarvrachna AI",
  botDescription: "AI-Powered Business Solutions Assistant",
  botAvatar: "🤖",
  
  // API Configuration (for future live integration)
  api: {
    baseUrl: "https://api.sarvrachna.ai/chat", // Dummy URL
    apiKey: "dummy_api_key_12345", // Dummy API key
    model: "gpt-4", // Dummy model
    temperature: 0.7,
    maxTokens: 1000,
  },
  
  // Dummy responses for demo
  responses: {
    greeting: "Hi! I'm Sarvrachna AI Assistant. How can I help you transform your business today?",
    fallback: "That's a great question! I'd love to discuss this in detail. Would you like to schedule a consultation with our experts?",
    predefined: {
      "What AI solutions do you offer?": "We offer AI chatbots, business automation, predictive analytics, and computer vision solutions. Each is customized to your specific business needs.",
      "How much does app development cost?": "App development costs vary from $999-$4999+ depending on complexity. Our Starter plan begins at $999/month for basic apps.",
      "Can you help with SEO and marketing?": "Absolutely! We provide comprehensive SEO optimization, Google Ads management, and digital marketing strategies to boost your online presence.",
      "What's your project timeline?": "Most projects are completed 3x faster than industry average. Simple websites take 2-4 weeks, while complex AI integrations take 6-12 weeks."
    }
  },
  
  // UI Configuration
  ui: {
    primaryColor: "brand-sky",
    secondaryColor: "brand-violet",
    accentColor: "brand-cyan",
    position: "bottom-right",
    buttonSize: "h-16 w-16",
    drawerHeight: "h-[80vh]",
  },
  
  // Features
  features: {
    quickQuestions: true,
    typingIndicator: true,
    messageHistory: true,
    fileUpload: false, // For future implementation
    voiceChat: false, // For future implementation
  }
};

// Quick questions that users can click on
export const quickQuestions = [
  "What AI solutions do you offer?",
  "How much does app development cost?",
  "Can you help with SEO and marketing?",
  "What's your project timeline?"
];

// Function to get response for a given question
export const getResponse = (question: string): string => {
  return chatbotConfig.responses.predefined[question as keyof typeof chatbotConfig.responses.predefined] 
    || chatbotConfig.responses.fallback;
};

// Function to simulate API call (for future live integration)
export const simulateApiCall = async (message: string): Promise<string> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For now, return predefined responses
  return getResponse(message);
};
