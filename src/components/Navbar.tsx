
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeProvider";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle scrolling to sections on home page
  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
    } else {
      // If not on home page, navigate to home page with section hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "navbar-blur py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      <div className="container-custom flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/">
            <img 
              src="/lovable-uploads/8ad02e8a-9987-4fd5-85cc-1502ea1e93a8.png" 
              alt="Bandera AI" 
              className="h-10 w-auto cursor-pointer" 
            />
          </Link>
          <Link to="/">
            <span className="text-xl font-medium cursor-pointer">Bandera AI</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button onClick={() => scrollToSection("features")} className="link-underline text-sm font-medium">Features</button>
          <button onClick={() => scrollToSection("team")} className="link-underline text-sm font-medium">Team</button>
          <button onClick={() => scrollToSection("contact")} className="link-underline text-sm font-medium">Contact</button>
          <ThemeToggle />
          <Button variant="default" size="sm" className="bg-bandera-purple text-white" asChild>
            <Link to="/ai-automation">Get Started</Link>
          </Button>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 glass-card py-5 border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <div className="container-custom flex flex-col gap-5">
              <button 
                onClick={() => scrollToSection("features")} 
                className="text-base font-medium py-2 text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("team")} 
                className="text-base font-medium py-2 text-left"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-base font-medium py-2 text-left"
              >
                Contact
              </button>
              <Button 
                variant="default" 
                size="default"
                className="w-full bg-gradient-to-r from-bandera-magenta to-bandera-purple text-white"
                asChild
              >
                <Link to="/ai-automation" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
