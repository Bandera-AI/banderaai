
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send, Bot, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const AIAutomation = () => {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hello! I'm Bandera AI. How can I assist you today?" }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage = { role: "user", content: inputMessage.trim() };
    setMessages([...messages, userMessage]);
    
    // Clear input and show loading state
    setInputMessage("");
    setIsLoading(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      // Add bot response
      const botResponse = { 
        role: "bot", 
        content: "Thank you for your message! This is a demo of our AI assistant. In the full version, I can help with lead generation, sales automation, and more." 
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-background flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col"
        >
          <div className="flex items-center mb-8">
            <Button variant="ghost" size="icon" asChild className="mr-4">
              <Link to="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">AI Assistant</h1>
          </div>
          
          <div className="bg-card rounded-lg shadow-lg p-6 mb-4 flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`flex gap-2 max-w-[80%] ${
                      message.role === "user" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted"
                    } rounded-lg p-3`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {message.role === "user" ? (
                        <User className="h-5 w-5" />
                      ) : (
                        <Bot className="h-5 w-5" />
                      )}
                    </div>
                    <div>{message.content}</div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[80%] bg-muted rounded-lg p-3">
                    <div className="flex-shrink-0 mt-1">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-current animate-bounce" />
                      <div className="h-2 w-2 rounded-full bg-current animate-bounce ml-1" style={{ animationDelay: "150ms" }} />
                      <div className="h-2 w-2 rounded-full bg-current animate-bounce ml-1" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" disabled={!inputMessage.trim() || isLoading}>
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIAutomation;
