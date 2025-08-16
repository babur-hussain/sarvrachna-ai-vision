import { useState } from "react";
import { Send, Bot, User, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { chatbotConfig, quickQuestions, simulateApiCall } from "@/config/chatbot";

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: chatbotConfig.responses.greeting,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      type: "user",
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      // Simulate API call (can be replaced with real API call later)
      const response = await simulateApiCall(message);
      
      const botMessage = {
        type: "bot",
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      // Handle error gracefully
      const errorMessage = {
        type: "bot",
        content: "I apologize, but I'm experiencing some technical difficulties. Please try again later or contact our support team.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Button */}
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button
            size="lg"
            className={`${chatbotConfig.ui.buttonSize} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-${chatbotConfig.ui.primaryColor} to-${chatbotConfig.ui.secondaryColor} hover:from-${chatbotConfig.ui.primaryColor}/90 hover:to-${chatbotConfig.ui.secondaryColor}/90`}
          >
            <MessageCircle className="h-8 w-8 text-white" />
          </Button>
        </DrawerTrigger>
        
        <DrawerContent className={chatbotConfig.ui.drawerHeight}>
          <DrawerHeader className="border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <DrawerTitle>{chatbotConfig.botName}</DrawerTitle>
                  <div className="text-xs text-brand-sky">● Online</div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DrawerHeader>

          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      message.type === 'user'
                        ? 'gradient-primary text-white'
                        : 'glass border'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="glass border px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-brand-sky rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-brand-sky rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-brand-sky rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Questions */}
            {chatbotConfig.features.quickQuestions && (
              <div className="px-4 py-3 border-t">
                <div className="text-sm font-medium text-muted-foreground mb-3">Quick questions:</div>
                <div className="grid grid-cols-1 gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(question)}
                      className="text-left p-2 rounded-lg text-sm text-brand-sky hover:bg-brand-sky/10 transition-smooth"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask me anything..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button
                  variant="hero"
                  size="sm"
                  onClick={() => handleSendMessage(inputMessage)}
                  disabled={isTyping || !inputMessage.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default FloatingChatbot;
