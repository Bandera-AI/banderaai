
import { motion } from "framer-motion";

const VideoHero = () => {
  return (
    <motion.div
      className="w-full h-full rounded-xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="relative aspect-video w-full h-full">
        <img
          src="/lovable-uploads/8ad02e8a-9987-4fd5-85cc-1502ea1e93a8.png"
          alt="Bandera AI Dashboard"
          className="w-full h-full object-contain bg-[inherit] p-2"
        />
      </div>
    </motion.div>
  );
};

export default VideoHero;
