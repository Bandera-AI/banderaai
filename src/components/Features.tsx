
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Brain, Network, TrendingUp, UserPlus, Zap, Bot, Mail, 
  Users, Database, LineChart, MessageSquare, CheckCircle2 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Feature categories with their sub-features
const featureCategories = [
  {
    title: "AI-Powered Lead Generation & Enrichment",
    icon: <UserPlus className="h-6 w-6 text-bandera-magenta" />,
    description: "Discover and enrich high-quality leads automatically with our advanced AI algorithms.",
    color: "bg-bandera-magenta/10",
    delay: 0.1,
    subFeatures: [
      "Automated Data Scraping & Lead Discovery",
      "Lead Enrichment & Verification",
      "Predictive AI Scoring",
      "Multi-source Lead Generation (LinkedIn, X, Meta)"
    ]
  },
  {
    title: "AI-Driven Outreach Automation",
    icon: <MessageSquare className="h-6 w-6 text-bandera-purple" />,
    description: "Automate personalized outreach across multiple channels with AI-generated messaging.",
    color: "bg-bandera-purple/10",
    delay: 0.2,
    subFeatures: [
      "Pre-Written AI Prompts & Templates",
      "Smart Warm Emailing",
      "Multi-Channel Outreach",
      "Automated Follow-Ups & Timing Optimization"
    ]
  },
  {
    title: "AI-Powered Sales Pipeline & CRM",
    icon: <Database className="h-6 w-6 text-bandera-blue" />,
    description: "Seamlessly integrate with your existing CRM and optimize your sales pipeline with AI.",
    color: "bg-bandera-blue/10",
    delay: 0.3,
    subFeatures: [
      "CRM Auto-Sync (HubSpot, Salesforce, etc.)",
      "AI-Based Lead Prioritization",
      "Data Ownership & Compliance",
      "Pipeline Optimization & Analytics"
    ]
  },
  {
    title: "AI-Driven Social Listening",
    icon: <LineChart className="h-6 w-6 text-bandera-magenta" />,
    description: "Monitor social media for engagement opportunities and generate conversation starters.",
    color: "bg-bandera-magenta/10",
    delay: 0.4,
    subFeatures: [
      "Social Media Monitoring",
      "AI-Based Conversation Starter Suggestions",
      "Engagement Tracking & Alerts",
      "Real-time Prospect Activity Insights"
    ]
  }
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-bandera-purple/5 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-bandera-magenta/5 blur-3xl -z-10" />
      
      <div className="container-custom" ref={ref}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-secondary text-primary hover:bg-secondary/80">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Most Advanced <span className="text-gradient">AI-Driven</span> Lead Generation Platform
          </h2>
          <p className="text-muted-foreground text-lg">
            Bandera AI combines cutting-edge artificial intelligence with proven sales strategies 
            to help you identify, engage, and convert high-quality leads with minimal manual effort.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {featureCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.5, 
                delay: category.delay,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
              whileHover={{ y: -8 }}
            >
              <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <p className="text-muted-foreground mb-6">{category.description}</p>
              
              <ul className="space-y-2 mt-auto">
                {category.subFeatures.map((subFeature, sfIndex) => (
                  <li key={sfIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{subFeature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
