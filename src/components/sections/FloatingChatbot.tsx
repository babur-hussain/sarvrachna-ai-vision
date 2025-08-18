import { useState } from "react";
import { Send, Bot, User, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
      {!isOpen && (
        <Button
          size="lg"
          onClick={() => setIsOpen(true)}
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-brand-sky to-brand-violet hover:from-brand-sky/90 hover:to-brand-violet/90 w-14 h-14"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Chat Popup */}
      {isOpen && (
        <div className="w-80 h-96 glass rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{chatbotConfig.botName}</div>
                  <div className="text-xs text-brand-sky">● Online</div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0 hover:bg-white/10"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-48 px-3 py-2 rounded-xl text-xs ${
                      message.type === 'user'
                        ? 'gradient-primary text-white'
                        : 'glass border'
                    }`}
                  >
                    <p>{message.content}</p>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="glass border px-3 py-2 rounded-xl">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-brand-sky rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-brand-sky rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1.5 h-1.5 bg-brand-sky rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Questions */}
            {chatbotConfig.features.quickQuestions && (
              <div className="px-3 py-2 border-t border-white/10">
                <div className="text-xs font-medium text-muted-foreground mb-2">Quick questions:</div>
                <div className="grid grid-cols-1 gap-1">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(question)}
                      className="text-left p-1.5 rounded-md text-xs text-brand-sky hover:bg-brand-sky/10 transition-smooth"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="px-3 py-2 border-t border-white/10">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask me anything..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
                  className="flex-1 h-8 text-xs"
                  disabled={isTyping}
                />
                <Button
                  variant="hero"
                  size="sm"
                  onClick={() => handleSendMessage(inputMessage)}
                  disabled={isTyping || !inputMessage.trim()}
                  className="h-8 w-8 p-0"
                >
                  <Send className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChatbot;
