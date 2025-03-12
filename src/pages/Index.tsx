
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SystemizedPoints from "@/components/SystemizedPoints";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  useEffect(() => {
    // Show welcome toast with feature highlight
    const timer = setTimeout(() => {
      if (isHomePage) {
        toast({
          title: "Welcome to Bandera AI",
          description: "The most advanced AI-powered lead generation platform.",
        });
      }
    }, 2000);
    
    // Simulate loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(loadingTimer);
    };
  }, [toast, isHomePage]);
  
  return (
    <ThemeProvider>
      <motion.div
        className="min-h-screen bg-gradient-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        
        {isLoading ? (
          <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
              <p className="text-muted-foreground">Loading Bandera AI...</p>
            </div>
          </div>
        ) : (
          <>
            {isHomePage ? (
              <>
                <Hero />
                <Features />
                
                <section className="section-padding">
                  <div className="container-custom">
                    <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        The <span className="text-gradient">Future</span> of Sales Automation
                      </h2>
                      <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                        Bandera AI eliminates manual work completely, allowing your sales team to focus on what matters most - building relationships and closing deals.
                      </p>
                    </div>
                    
                    <SystemizedPoints />
                  </div>
                </section>
                
                <Team />
                <Contact />
                <Footer />
              </>
            ) : (
              <Outlet />
            )}
          </>
        )}
      </motion.div>
    </ThemeProvider>
  );
};

export default Index;
