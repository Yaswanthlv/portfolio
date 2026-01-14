// import { motion } from "framer-motion";
// import { ArrowUp, Mail, Linkedin } from "lucide-react";
// import { useState, useEffect } from "react";
// import { Link as ScrollLink } from "react-scroll";

// export const Footer = () => {
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 500);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <footer className="relative py-12 border-t border-border/50">
//       <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/5 to-transparent" />

//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//           {/* Social Links */}
//           <div className="flex items-center gap-4">
//             <motion.a
//               href="https://linkedin.com/in/yaswanth"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.2, rotate: 5 }}
//               className="p-3 glass-card rounded-full hover:glow-accent transition-all"
//               aria-label="LinkedIn"
//             >
//               <Linkedin className="w-5 h-5 text-accent" />
//             </motion.a>
//             <motion.a
//               href="mailto:yaswanth@example.com"
//               whileHover={{ scale: 1.2, rotate: -5 }}
//               className="p-3 glass-card rounded-full hover:glow-accent transition-all"
//               aria-label="Email"
//             >
//               <Mail className="w-5 h-5 text-accent" />
//             </motion.a>
//           </div>

//           {/* Copyright */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-muted-foreground text-center"
//           >
//             © 2025{" "}
//             <motion.span
//               animate={{ textShadow: ["0 0 0px #00BFA6", "0 0 20px #00BFA6", "0 0 0px #00BFA6"] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               className="text-gradient font-semibold"
//             >
//               Yaswanth Lalpet Vari
//             </motion.span>
//             . All rights reserved.
//           </motion.p>

//           {/* Scroll to Top */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={showScrollTop ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <ScrollLink to="hero" smooth={true} duration={800}>
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="p-3 glass-card rounded-full hover:glow-accent transition-all cursor-pointer"
//                 aria-label="Scroll to top"
//               >
//                 <ArrowUp className="w-5 h-5 text-accent" />
//               </motion.button>
//             </ScrollLink>
//           </motion.div>
//         </div>
//       </div>
//     </footer>
//   );
// };















// import { motion } from "framer-motion";
// import { ArrowUp, Mail, Linkedin, GithubIcon } from "lucide-react";
// import { useState, useEffect } from "react";
// import { Link as ScrollLink } from "react-scroll";

// export const Footer = () => {
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 500);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <footer className="relative py-12 border-t border-border/50">
//       <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/5 to-transparent" />

//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//           {/* Social Links */}
//           <div className="flex items-center gap-4">
//              {/* <motion.a
//                     href="https://github.com/Yaswanthlv"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.05, x: 10 }}
//               className="p-3 glass-card rounded-full hover:glow-accent transition-all"
//                   >
//                     <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent group-hover:glow-accent transition-all">
//                       <GithubIcon className="w-5 h-5 text-primary-foreground" />
//                     </div>
                   

//                   </motion.a> */}
//                   <motion.a
//               href="https://github.com/Yaswanthlv"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.2, rotate: 5 }}
//               className="p-3 glass-card rounded-full hover:glow-accent transition-all"
//               aria-label="GitHub"
//             >
//               <GithubIcon className="w-5 h-5 text-accent" />
//             </motion.a>
//             <motion.a
//               href="https://www.linkedin.com/in/yaswanth-v-syracuse/"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.2, rotate: 5 }}
//               className="p-3 glass-card rounded-full hover:glow-accent transition-all"
//               aria-label="LinkedIn"
//             >
//               <Linkedin className="w-5 h-5 text-accent" />
//             </motion.a>
//             <motion.a
//               href="mailto:yashwanth.l@techjobmail.com"
//               whileHover={{ scale: 1.2, rotate: -5 }}
//               className="p-3 glass-card rounded-full hover:glow-accent transition-all"
//               aria-label="Email"
//             >
//               <Mail className="w-5 h-5 text-accent" />
//             </motion.a>
//           </div>

//           {/* Copyright */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-muted-foreground text-center"
//           >
//             © 2025{" "}
//             <motion.span
//               animate={{ textShadow: ["0 0 0px #00BFA6", "0 0 20px #00BFA6", "0 0 0px #00BFA6"] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               className="text-gradient font-semibold"
//             >
//               Yaswanth Lalpet Vari
//             </motion.span>
//             . All rights reserved.
//           </motion.p>

//           {/* Scroll to Top */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={showScrollTop ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <ScrollLink to="hero" smooth={true} duration={800}>
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="p-3 glass-card rounded-full hover:glow-accent transition-all cursor-pointer"
//                 aria-label="Scroll to top"
//               >
//                 <ArrowUp className="w-5 h-5 text-accent" />
//               </motion.button>
//             </ScrollLink>
//           </motion.div>
//         </div>
//       </div>
//     </footer>
//   );
// };




























import { motion } from "framer-motion";
import { ArrowUp, Mail, Linkedin, GithubIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
             {/* <motion.a
                    href="https://github.com/Yaswanthlv"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 10 }}
              className="p-3 glass-card rounded-full hover:glow-accent transition-all"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent group-hover:glow-accent transition-all">
                      <GithubIcon className="w-5 h-5 text-primary-foreground" />
                    </div>
                   

                  </motion.a> */}
                  <motion.a
              href="https://github.com/Yaswanthlv"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 glass-card rounded-full hover:glow-accent transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5 text-accent" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yaswanth-v-syracuse/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 glass-card rounded-full hover:glow-accent transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-accent" />
            </motion.a>
            <motion.a
              href="mailto:yaswanth.lalpetvari2000@gmail.com"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="p-3 glass-card rounded-full hover:glow-accent transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-accent" />
            </motion.a>
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-center"
          >
            © 2025{" "}
            <motion.span
              animate={{ textShadow: ["0 0 0px #00BFA6", "0 0 20px #00BFA6", "0 0 0px #00BFA6"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-gradient font-semibold"
            >
              Yaswanth Lalpet Vari
            </motion.span>
            . All rights reserved.
          </motion.p>

          {/* Scroll to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showScrollTop ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <ScrollLink to="hero" smooth={true} duration={800}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass-card rounded-full hover:glow-accent transition-all cursor-pointer"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 text-accent" />
              </motion.button>
            </ScrollLink>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

