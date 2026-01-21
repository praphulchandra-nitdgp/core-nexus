import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AarohanSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <motion.section
      ref={ref}
      id="aarohan"
      className="relative h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/NbAaWXNoIwE?autoplay=1&mute=1&loop=1&playlist=NbAaWXNoIwE&controls=0&modestbranding=1"
          title="Aarohan Festival"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: "none" }}
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Aarohan Fest
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-6">
            Aarohan is the techno-management festival of NIT Durgapur, a celebration of innovation, creativity, and excellence. 
            The Clubs and Centers of Activity (CCA) play a vital role in Aarohan, bringing technical workshops, management events, 
            cultural performances, and interactive sessions that inspire and engage participants from across the nation.
          </p>
          <p className="text-base md:text-lg text-gray-200">
            Join us for an unforgettable experience of talent, technology, and teamwork!
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AarohanSection;
