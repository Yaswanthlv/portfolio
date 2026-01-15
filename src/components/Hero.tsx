import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";
import profileImage from "/image1.jpeg";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 py-10"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <p className="text-4xl text-muted-foreground">Hi, I'm</p>

            <h1 className="text-5xl font-bold text-gradient">
              YASWANTH LALPET VARI
            </h1>

            <h2 className="text-3xl font-bold">
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
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h2>

            <p className="text-lg text-white max-w-xl">
              Business Data Analyst with 3+ years of experience delivering
              data-driven insights through SQL analysis, healthcare analytics,
              automation, and KPI-driven reporting.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <ScrollLink to="projects" smooth offset={-80} duration={500}>
                <Button className="bg-primary hover:bg-primary/90">
                  View Projects
                </Button>
              </ScrollLink>

              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <a
                  href="/portfolio/Yaswanth_Resume_BDA.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-secondary opacity-20 blur-2xl"
              />

              <img
                src={profileImage}
                alt="Yaswanth Lalpet Vari"
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl"
              />

              {/* Experience badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full shadow-lg z-20">
                3+ Years Experience
              </div>

              {/* Skill badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-accent to-secondary text-white px-4 py-2 rounded-full shadow-lg z-20">
                PYTHON
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
