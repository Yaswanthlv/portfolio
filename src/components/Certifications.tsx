import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const certifications = [
  {
    title: "Microsoft Power BI Data Analyst Associate",
    issuer: "Microsoft",
    logo: "/logos/microsoft.svg",
  },
  {
    title: "Google Data Analytics",
    issuer: "Google",
    logo: "/logos/google.svg",
  },
  {
    title: "Programming for Everybody (Python)",
    issuer: "Coursera",
    logo: "/logos/coursera.svg",
  },
  {
    title: "Salesforce Certified Administrator",
    issuer: "Salesforce",
    logo: "/logos/salesforce.svg",
  },
];

export const Certifications = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Heading Animation */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={inView ? { width: 80, opacity: 1 } : {}}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"
          />
        </motion.div>

        {/* Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                delay: index * 0.12,
                duration: 0.55,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-card p-6 rounded-xl text-center hover:glow-accent transition-all group"
            >
              {/* Logo (animated) */}
              <motion.div
                className="mb-5 flex justify-center"
                animate={inView ? { y: [0, -8, 0] } : {}}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}
              >
                <motion.img
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  className="h-14 w-auto object-contain"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ scale: 1.12, rotate: 2, opacity: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              </motion.div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {cert.title}
              </h3>
              <p className="text-muted-foreground">{cert.issuer}</p>

              {/* Bottom line animation */}
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : {}}
                transition={{
                  delay: index * 0.12 + 0.3,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

