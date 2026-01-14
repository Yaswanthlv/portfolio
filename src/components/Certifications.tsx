import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Certification = {
  title: string;
  issuer: string;
  logo: string;
};

const certifications: Certification[] = [
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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Certifications
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-purple-500/30 bg-background/60 p-6 text-center shadow-lg hover:scale-105 transition-transform"
            >
              {/* Logo */}
              <img
                src={cert.logo}
                alt={`${cert.issuer} logo`}
                className="mx-auto mb-4 h-12 w-auto object-contain"
                loading="lazy"
              />

              {/* Title */}
              <h3 className="text-lg font-semibold">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-sm text-muted-foreground mt-1">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};