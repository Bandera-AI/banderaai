
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Linkedin, Twitter, Phone, Globe } from "lucide-react";
import CEO_avatar from '/public/lovable-uploads/photo_5368398345212653732_y.jpg';
import CTO_avatar from '/public/lovable-uploads/T032XS1SL0M-U063T2L1SBY-e179f9a1d4df-512.png';

const teamMembers = [
  {
    name: "Ryan Alexander Hennesy",
    role: "CEO & Founder & Visionary",
    bio: "With over 14 years in sales and business development, Ryan has built and scaled startups across Software Development, FinTech, Automotive, Healthcare, Web3, and Staff Augmentation. He is the founder of Bandera AI, driven by the mission to fully automate lead generation and sales outreach—eliminating manual work and maximizing conversions. A strong believer in data-driven sales, he understands the pain points of inefficient outreach and is building an AI-powered solution to fix them.",
    image: CEO_avatar,
    fallback: "SJ",
    delay: 0.1,
    contact: {
      email: "ceo@lead-buds.com",
      // phone: "+1 (415) 555-7890",
      linkedin: "linkedin.com/in/ryan-alexander-hennesy-b62349136",
      // twitter: "@sarahjohnson",
      // website: "sarahjohnson.com"
    }
  },
  {
    name: "Nigel Russell",
    role: "CTO & Co-Founder",
    bio: "Nigel is a Software engineer and Project manager proficient with 5+ years of experience in AI, Blockchain and Full-Stack Development, along with 4 years of expertise in Machine Learning and Data Analytics. With a deep understanding of React, Next.js, Solidity, Rust, ElectronJS, and AI-driven automation, he has built smart contracts, AI-powered chatbots, and advanced trading algorithms. Previously, he led teams at MikeToken.io, Managed a team of 3 senior developers to collaborate on the development and enhancement of advanced AI-powered trade protocols (Coin AI). Utilized Python, TensorFlow, and Scikit-learn for AI model development, along with JavaScript and React.js for creating userfriendly interfaces.\n\nAt Bandera AI, Nigel is on a mission to create the first truly AI-driven sales automation platform, leveraging machine learning, predictive analytics, and cutting-edge automation to eliminate manual work and optimize sales outreach.",
    image: CTO_avatar,
    fallback: "DC",
    delay: 0.2,
    contact: {
      email: "nigel.russell.luck@gmail.com",
      phone: "+1 (401) 477-2068",
      linkedin: "linkedin.com/in/nigel-russell-0256a2355",
      twitter: "@nigelrussell93",
      // website: "davidchen.ai"
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
                      {member.contact.phone ?
                        <a
                          href={`tel:${member.contact.phone}`}
                          className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        >
                          <Phone className="h-4 w-4 text-bandera-purple" />
                          <span>{member.contact.phone}</span>
                        </a> : <></>}
                      <a
                        href={`https://${member.contact.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-4 w-4 text-bandera-blue" />
                        <span>{member.contact.linkedin}</span>
                      </a>
                      {member.contact.twitter ?
                        <a
                          href={`https://twitter.com/${member.contact.twitter.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        >
                          <Twitter className="h-4 w-4 text-bandera-blue" />
                          <span>{member.contact.twitter}</span>
                        </a> : <></>}
                      {/* {member.contact.website ?
                        <a
                          href={`https://${member.contact.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        >
                          <Globe className="h-4 w-4 text-bandera-purple" />
                          <span>{member.contact.website}</span>
                        </a> : <></>} */}
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
