
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ViewDemo = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="icon" asChild className="mr-4">
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Demo Video</h1>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Bandera AI Features</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Discover how Bandera AI transforms your sales process with automated lead generation and intelligent messaging.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-card rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Bandera AI in Action</h2>
            <div className="relative w-full overflow-hidden rounded-lg mx-auto" style={{ maxWidth: "900px" }}>
              <div className="aspect-video">
                <video 
                  controls 
                  className="w-full h-full"
                  poster="/lovable-uploads/f0cea33e-a2a6-4c95-b8cd-b84ac33b1f0d.png"
                >
                  <source src="/lovable-uploads/mvp.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-muted-foreground">
                See how Bandera AI transforms your sales process with our comprehensive demo. This video walks you through the key features and benefits of our platform.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewDemo;
