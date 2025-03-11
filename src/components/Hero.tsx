
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import VideoHero from "./VideoHero";
import { Bot, Globe, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-secondary/50 to-transparent dark:from-secondary/10 -z-10" />
      
      {/* Animated circles */}
      <motion.div 
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-bandera-magenta/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-bandera-blue/10 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="flex flex-col items-start space-y-6"
          >
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1">
              Redefining Lead Generation
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              AI-Powered <span className="text-gradient">Growth</span> for Your Business
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Bandera AI transforms your sales process with intelligent lead generation and seamless automation, delivering qualified prospects directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-bandera-gradient hover:opacity-90 transition-opacity">
                Get Started Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 w-full">
              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="h-12 w-12 rounded-full bg-bandera-magenta/10 flex items-center justify-center mb-2">
                  <Bot className="h-6 w-6 text-bandera-magenta" />
                </div>
                <div>
                  <p className="font-medium">AI-Powered Lead Discovery</p>
                  <p className="text-sm text-muted-foreground">Find high-quality prospects automatically</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="h-12 w-12 rounded-full bg-bandera-purple/10 flex items-center justify-center mb-2">
                  <Globe className="h-6 w-6 text-bandera-purple" />
                </div>
                <div>
                  <p className="font-medium">Multi-Channel Outreach</p>
                  <p className="text-sm text-muted-foreground">Connect across all platforms seamlessly</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="h-12 w-12 rounded-full bg-bandera-blue/10 flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-bandera-blue" />
                </div>
                <div>
                  <p className="font-medium">Data-Driven Insights</p>
                  <p className="text-sm text-muted-foreground">Make decisions based on real performance</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="glass-card p-2 md:p-4 h-full overflow-hidden">
              <VideoHero />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
