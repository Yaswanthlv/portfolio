import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ✅ Import logos from src/assets/logos
import microsoftLogo from "@/assets/logos/microsoft.svg";
import googleLogo from "@/assets/logos/google.svg";
import courseraLogo from "@/assets/logos/coursera.svg";
import salesforceLogo from "@/assets/logos/salesforce.svg";

const certifications = [
  {
    title: "Microsoft Power BI Data Analyst Associate",
    issuer: "Microsoft",
    logo: microsoftLogo,
    link: "https://learn.microsoft.com/api/credentials/share/en-us/YaswanthLalpetVari-0228/C2DAA495379DAE0A?sharingId=97957A899B7B70",
  },
  {
    title: "Google Data Analytics",
    issuer: "Google",
    logo: googleLogo,
  },
  {
    title: "Programming for Everybody (Python)",
    issuer: "Coursera",
    logo: courseraLogo,
  },
  {
    title: "Salesforce Certified Administrator",
    issuer: "Salesforce",
    logo: salesforceLogo,
  },
];

// ✅ Animations (Framer Motion Variants)
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -8 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* subtle animated glow background */}
      <motion.div
        aria-hidden
        className="absolute -z-10 top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.9 }}
      />

      <div className="container mx-auto px-4">
        {/* Whole section animation */}
        <motion.div
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* Title */}
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Certifications
          </motion.h2>

          {/* Grid */}
          <motion.div
            variants={gridVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certifications.map((cert, index) => {
              const CardWrapper = cert.link ? motion.a : motion.div;

              return (
                <CardWrapper
                  key={index}
                  {...(cert.link && {
                    href: cert.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  variants={cardVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className={`rounded-2xl border border-purple-500/25 bg-background/60 p-6 text-center shadow-lg backdrop-blur ${
                    cert.link ? "cursor-pointer" : ""
                  }`}
                >
                  {/* Logo */}
                  <motion.img
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    className="mx-auto mb-4 h-12 w-auto object-contain"
                    loading="lazy"
                    variants={logoVariants}
                    whileHover={{ rotate: 8, scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 240, damping: 14 }}
                  />

                  {/* Title */}
                  <motion.h3
                    className="text-lg font-semibold"
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.35, delay: 0.12 }}
                  >
                    {cert.title}
                  </motion.h3>

                  {/* Issuer */}
                  <motion.p
                    className="text-sm text-muted-foreground mt-1"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.35, delay: 0.18 }}
                  >
                    {cert.issuer}
                  </motion.p>

                  {/* Hint only for Power BI */}
                  {cert.link && (
                    <p className="mt-3 text-xs text-purple-400">
                      View Credential →
                    </p>
                  )}
                </CardWrapper>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};