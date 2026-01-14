import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";
import profileImage from "/image1.jpeg";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 py-10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-muted-foreground mb-2">Hi, I'm</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-10 text-gradient">
                YASWANTH LALPET VARI
              </h1>
              <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Transforming Raw Data into{" "}
                <span className="text-gradient">
                  <TypeAnimation
                    sequence={[
                      "Actionable Insights",
                      2000,
                      "Python Solutions",
                      2000,
                      "SQL Queries",
                      2000,
                      "Power BI Dashboards",
                      2000,
                      "Healthcare Analytics",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-white max-w-2xl"
            >
              Business Data Analyst with 3+ years of experience delivering data-driven insights through SQL analysis, healthcare analytics, automation, and KPI-driven reporting.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <ScrollLink to="projects" smooth={true} offset={-80} duration={500}>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-all">
                  View Projects
                </Button>
              </ScrollLink>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all">
                <a href="/Yaswanth_Resume_BDA.pdf" download>
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image with Static Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative order-first md:order-last"
          >
            <div className="relative w-full aspect-square max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              {/* Rotating background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-secondary opacity-20 blur-2xl"
              />

              {/* Circular Profile Image */}
              <motion.img
                src={profileImage}
                alt="Yaswanth Lalpet Vari"
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/80 to-transparent z-0" />

              {/* Static Floating Elements */}
              {/* Experience Element */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full shadow-lg z-20">
                <div className="text-sm font-bold whitespace-nowrap">
                  3+ Years Experience
                </div>
              </div>

              {/* Skills Element */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-accent to-secondary text-white px-4 py-2 rounded-full shadow-lg z-20">
                <div className="text-sm font-bold whitespace-nowrap">
                PYTHON
                </div>
              </div>

              {/* Top Right Element */}
              {/* <div className="absolute top-8 -right-8 bg-gradient-to-r from-secondary to-primary text-white px-3 py-1 rounded-lg shadow-lg z-20"> */}
                {/* <div className="text-xs font-bold whitespace-nowrap">
                  AWS
                </div> */}
              {/* </div> */}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ScrollLink to="about" smooth={true} offset={-80} duration={500}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="cursor-pointer"
            >
              <ChevronDown className="w-8 h-8 text-muted-foreground" />
            </motion.div>
          </ScrollLink>
        </motion.div> */}
      </div>
    </section>
  );
};
