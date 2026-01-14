// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { GraduationCap } from "lucide-react";

// const education = [
//   {
//     degree: "M.S. Information Systems",
//     school: "Syracuse University, New York",
//     period: "Expected May 2025",
//     icon: "🎓",
//   },
//   {
//     degree: "Bachelor of Engineering",
//     school: "SRM Institute of Science & Technology, India",
//     period: "May 2021",
//     icon: "💻",
//   },
// ];

// export const Education = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

//   return (
//     <section id="education" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

//       <div className="container mx-auto px-4">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="text-gradient">Education</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
//         </motion.div>

//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//           {education.map((edu, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: index * 0.2, duration: 0.6 }}
//               whileHover={{ scale: 1.03, rotateY: 5 }}
//               className="glass-card p-8 rounded-xl hover:glow-accent transition-all group"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="relative">
//                   <motion.div
//                     animate={{ rotate: [0, 10, -10, 0] }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                     className="text-5xl"
//                   >
//                     {edu.icon}
//                   </motion.div>
//                   <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity">
//                     <GraduationCap className="w-3 h-3 text-primary-foreground" />
//                   </div>
//                 </div>

//                 <div className="flex-1">
//                   <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
//                   <p className="text-muted-foreground mb-2">{edu.school}</p>
//                   <p className="text-sm text-accent font-medium">{edu.period}</p>
//                 </div>
//               </div>

//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={inView ? { width: "100%" } : {}}
//                 transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
//                 className="h-1 bg-gradient-to-r from-primary via-accent to-secondary mt-6 rounded-full"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

































import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Information Systems",
    school: "Syracuse University, USA",
    period: "May 2025",
    icon: "🎓",
  },
];

export const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              className="glass-card p-8 rounded-xl hover:glow-accent transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="relative">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-5xl"
                  >
                    {edu.icon}
                  </motion.div>
                  <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    <GraduationCap className="w-3 h-3 text-primary-foreground" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                  <p className="text-muted-foreground mb-2">{edu.school}</p>
                  <p className="text-sm text-accent font-medium">{edu.period}</p>
                </div>
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : {}}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                className="h-1 bg-gradient-to-r from-primary via-accent to-secondary mt-6 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

