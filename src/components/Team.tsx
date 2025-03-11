
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Linkedin, Twitter, Phone, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    bio: "Sarah Johnson is a visionary entrepreneur with over 15 years of experience in building and scaling technology companies in the sales and marketing space. Prior to founding Bandera AI, Sarah served as the VP of Sales at TechGiant, where she led a team of 200+ sales professionals and consistently exceeded revenue targets by 30% year-over-year. She began her career at McKinsey & Company, advising Fortune 500 companies on digital transformation strategies. Sarah holds an MBA from Stanford University and a Bachelor's degree in Computer Science from MIT. She is passionate about leveraging AI to revolutionize how businesses approach lead generation and sales automation, having experienced firsthand the inefficiencies in traditional sales processes.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&auto=format&fit=crop&q=80",
    fallback: "SJ",
    delay: 0.1,
    contact: {
      email: "sarah.johnson@bandera-ai.com",
      phone: "+1 (415) 555-7890",
      linkedin: "linkedin.com/in/sarahjohnson",
      twitter: "@sarahjohnson",
      website: "sarahjohnson.com"
    }
  },
  {
    name: "David Chen",
    role: "CTO & Co-Founder",
    bio: "David Chen is a pioneering AI researcher and engineer with a distinguished background in machine learning and natural language processing. After completing his Ph.D. in Artificial Intelligence at Stanford University, David led machine learning teams at Google and OpenAI, where he contributed to groundbreaking projects in conversational AI and predictive analytics. He has published over 30 research papers in top-tier AI conferences and holds 12 patents in machine learning technologies. At Bandera AI, David oversees the development of our proprietary AI algorithms that power lead generation, enrichment, and outreach automation. His expertise in large language models and multi-channel prediction systems forms the technological backbone of our platform. David is committed to creating AI systems that augment human capabilities rather than replace them.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&auto=format&fit=crop&q=80",
    fallback: "DC",
    delay: 0.2,
    contact: {
      email: "david.chen@bandera-ai.com",
      phone: "+1 (650) 555-1234",
      linkedin: "linkedin.com/in/davidchen",
      twitter: "@davidchenai",
      website: "davidchen.ai"
    }
  }
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <section id="team" className="section-padding bg-secondary/30 dark:bg-secondary/10">
      <div className="container-custom" ref={ref}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Leadership</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the <span className="text-gradient">Visionaries</span> Behind Bandera AI
          </h2>
          <p className="text-muted-foreground text-lg">
            Our leadership team combines decades of experience in artificial intelligence, 
            sales operations, and business growth strategies to revolutionize lead generation.
          </p>
        </motion.div>
        
        <div className="flex flex-col gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.5, 
                delay: member.delay,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
              whileHover={{ y: -8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-4 h-full">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
                    whileHover={{ opacity: 1 }}
                  />
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110" 
                  />
                </div>
                
                <div className="p-6 md:col-span-3 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-12 w-12 border-2 border-white dark:border-gray-800">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.fallback}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-xl leading-tight">{member.name}</h3>
                      <p className="text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-muted">
                    <h4 className="text-sm font-semibold mb-2">Contact Information:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <a 
                        href={`mailto:${member.contact.email}`} 
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Mail className="h-4 w-4 text-bandera-magenta" />
                        <span>{member.contact.email}</span>
                      </a>
                      <a 
                        href={`tel:${member.contact.phone}`} 
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Phone className="h-4 w-4 text-bandera-purple" />
                        <span>{member.contact.phone}</span>
                      </a>
                      <a 
                        href={`https://${member.contact.linkedin}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-4 w-4 text-bandera-blue" />
                        <span>{member.contact.linkedin}</span>
                      </a>
                      <a 
                        href={`https://twitter.com/${member.contact.twitter.replace('@', '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Twitter className="h-4 w-4 text-bandera-blue" />
                        <span>{member.contact.twitter}</span>
                      </a>
                      <a 
                        href={`https://${member.contact.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Globe className="h-4 w-4 text-bandera-purple" />
                        <span>{member.contact.website}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
