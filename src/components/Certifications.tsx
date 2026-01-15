import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Certification = {
  title: string;
  issuer: string;
  logo: string;
  url?: string; // only for Power BI
};

const certifications: Certification[] = [
  {
    title: "Microsoft Power BI Data Analyst Associate",
    issuer: "Microsoft",
    logo: "/portfolio/logos/microsoft.svg",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/YaswanthLalpetVari-0228/C2DAA495379DAE0A?sharingId=97957A899B7B70",
  },
  {
    title: "Google Data Analytics",
    issuer: "Coursera",
    logo: "/portfolio/logos/google.svg",
  },
  {
    title: "Programming for Everybody (Python)",
    issuer: "Coursera",
    logo: "/portfolio/logos/coursera.svg",
  },
  {
    title: "Salesforce Certified Administrator",
    issuer: "Salesforce",
    logo: "/portfolio/logos/salesforce.svg",
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
        {/* Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-purple-500/30 bg-background/60 p-6 text-center shadow-lg"
            >
              {/* Logo with its own animation */}
              <motion.img
                src={cert.logo}
                alt={`${cert.issuer} logo`}
                className="mx-auto mb-4 h-12 w-auto object-contain"
                loading="lazy"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: index * 0.12 + 0.15 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
              />

              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>

              {/* Power BI link only */}
              {cert.url && (
                <motion.a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-accent hover:underline"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.12 + 0.25 }}
                >
                  View Credential ↗
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};