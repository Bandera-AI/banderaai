
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
          src="/lovable-uploads/f0cea33e-a2a6-4c95-b8cd-b84ac33b1f0d.png"
          alt="Bandera AI vs Competitors - Feature Comparison"
          className="w-full h-full object-contain bg-white dark:bg-gray-900 p-2"
        />
      </div>
    </motion.div>
  );
};

export default VideoHero;
