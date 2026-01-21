import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import orb1 from "@/assets/3d-orb-1.png";
import orb2 from "@/assets/3d-orb-2.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-purple/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-cyan/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>CCA Audition 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Auditions</span>
              <br />
              <span className="text-foreground">Open</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Create. Build. Innovate.
            </p>

            <p className="text-muted-foreground max-w-md mx-auto lg:mx-0">
              Join the Centre For Cognitive Activities and be part of a
              community that pushes the boundaries of technology and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                asChild
                size="lg"
                className="gradient-bg text-primary-foreground font-semibold px-8 py-6 text-lg glow-purple hover:opacity-90 transition-opacity"
              >
                <Link to="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gradient-border bg-transparent hover:bg-muted/50 text-foreground px-8 py-6 text-lg"
                onClick={() => {
                  const element = document.querySelector("#cells");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Cells
              </Button>
            </div>
          </motion.div>

          {/* 3D Visual Section */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main 3D orb image */}
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
              <img
                src={orb1}
                alt="3D Abstract Orb"
                className="w-full h-full object-cover rounded-full animate-float"
              />
              {/* Glow effect behind */}
              <div className="absolute inset-0 rounded-full bg-gradient-iridescent opacity-20 blur-3xl -z-10 scale-110" />
            </div>

            {/* Floating secondary orb */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 md:w-40 md:h-40">
              <img
                src={orb2}
                alt="Secondary 3D Orb"
                className="w-full h-full object-cover rounded-full animate-float"
                style={{ animationDelay: '-3s' }}
              />

            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex flex-col items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
