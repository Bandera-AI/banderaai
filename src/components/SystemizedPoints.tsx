
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const SystemizedPoints = () => {
  return (
    <motion.div
      className="glass-card p-8 md:p-10 w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-bandera-purple dark:text-bandera-purple">
          Revolutionizing Sales: The End of Manual Work
        </h2>
        
        <p className="text-base md:text-lg">
          Imagine waking up one day and all the tedious sales tools you've relied on suddenly vanish. No more
          sifting through endless tabs, manually searching for leads, or wasting time with repetitive tasks.
          Introducing the Future of Sales.
        </p>
        
        <div className="mt-6">
          <p className="text-bandera-purple dark:text-bandera-purple text-lg md:text-xl font-medium mb-4">
            Imagine simply saying:
          </p>
          
          <blockquote className="pl-4 border-l-4 border-bandera-purple italic">
            "Find me 100 USA-based companies with these criteria, enrich their contact details (phone
            number, email, LinkedIn), warm up five domains, predict and analyze based on this data—then send
            outreach on autopilot."
          </blockquote>
          
          <p className="text-lg font-medium mt-4">It's that easy.</p>
          
          <p className="text-bandera-purple dark:text-bandera-purple text-lg mt-4">
            No more manual work. No more frustration.
          </p>
          
          <p className="text-bandera-purple dark:text-bandera-purple text-lg font-medium">
            It's just pure efficiency.
          </p>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4">What's Different?</h3>
          
          <p className="mb-4">
            <span className="text-bandera-purple dark:text-bandera-purple font-medium">Our machine</span> is designed for one purpose: to free you from the grunt work of sales. With
            automation at its core, it builds relationships while you focus on the human side of business.
          </p>
          
          <p className="mb-6">
            From <span className="text-bandera-purple dark:text-bandera-purple font-medium">lead generation to outreach</span>, our system does it all <span className="text-bandera-purple dark:text-bandera-purple font-medium">for you</span>.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Badge className="mt-1 bg-bandera-purple text-white">1</Badge>
              <div>
                <span className="text-bandera-purple dark:text-bandera-purple font-medium">Advanced Lead Generation:</span> The right leads, every time.
              </div>
            </li>
            
            <li className="flex items-start gap-3">
              <Badge className="mt-1 bg-bandera-purple text-white">2</Badge>
              <div>
                <span className="text-bandera-purple dark:text-bandera-purple font-medium">Data Enrichment:</span> Phone numbers, emails, and LinkedIn profiles are automatically found and
                verified.
              </div>
            </li>
            
            <li className="flex items-start gap-3">
              <Badge className="mt-1 bg-bandera-purple text-white">3</Badge>
              <div>
                <span className="text-bandera-purple dark:text-bandera-purple font-medium">Automated Outreach:</span> Custom messaging, intelligent follow-ups, and engagement.
              </div>
            </li>
            
            <li className="flex items-start gap-3">
              <Badge className="mt-1 bg-bandera-purple text-white">4</Badge>
              <div>
                <span className="text-bandera-purple dark:text-bandera-purple font-medium">Predictive Analysis:</span> Data-driven insights to maximize success.
              </div>
            </li>
            
            <li className="flex items-start gap-3">
              <Badge className="mt-1 bg-bandera-purple text-white">5</Badge>
              <div>
                <span className="text-bandera-purple dark:text-bandera-purple font-medium">Zero Manual Work:</span> Let automation handle the routine so you can build relationships and
                close deals.
              </div>
            </li>
          </ul>
        </div>
        
        <p className="text-bandera-purple dark:text-bandera-purple text-lg mt-8">
          We're changing the sales game. Start building connections that matter, and watch your
          business thrive with cutting-edge technology.
        </p>
      </div>
    </motion.div>
  );
};

export default SystemizedPoints;
