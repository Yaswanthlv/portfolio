// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";

// const stats = [
//   { label: "Years Experience", value: 3, suffix: "+" },
//   { label: "Dashboards Built", value: 10, suffix: "+" },
//   { label: "Data Accuracy", value: 100, suffix: "%" },
// ];

// const highlights = ["Python", "SQL", "Power BI", "Tableau", "Machine Learning", "Predictive Analytics"];

// const CountUp = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
//   const [count, setCount] = useState(0);
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

//   useEffect(() => {
//     if (inView) {
//       let startTime: number | null = null;
//       const animate = (timestamp: number) => {
//         if (!startTime) startTime = timestamp;
//         const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
//         setCount(Math.floor(progress * end));
//         if (progress < 1) {
//           requestAnimationFrame(animate);
//         }
//       };
//       requestAnimationFrame(animate);
//     }
//   }, [inView, end, duration]);

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   );
// };

// export const About = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

//   return (
//     <section id="about" className="py-20 relative overflow-hidden">
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
//             About <span className="text-gradient">Me</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
//         </motion.div>

//         <div className="max-w-4xl mx-auto space-y-12">
//           {/* Description */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             // className="glass-card p-8 rounded-2xl border-2 border-red-500"
//               className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform border-2 border-red-500"

//           >
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               <span className="text-foreground font-semibold">Yaswanth Lalpet Vari</span> is an experienced Data Analyst specializing in advanced analytics, data modeling, and AI-enhanced reporting. With over 3 years of experience across financial and technology domains, he has built a proven record of improving operational efficiency, enabling data-driven decision-making, and delivering measurable impact through automation and predictive modeling. Skilled in Python, SQL, R, Power BI, and Tableau, Yaswanth bridges business goals with analytical execution — transforming raw data into actionable insight.
//             </p>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-6"
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
//                 className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform"
//               >
//                 <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
//                   <CountUp end={stat.value} suffix={stat.suffix} />
//                 </div>
//                 <div className="text-muted-foreground">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Highlights */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.6, duration: 0.6 }}
//             className="flex flex-wrap justify-center gap-3"
//           >
//             {highlights.map((skill, index) => (
//               <motion.span
//                 key={skill}
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
//                 className="px-4 py-2 glass-card rounded-full text-sm font-medium hover:glow-accent transition-all cursor-default"
//               >
//                 {skill}
//               </motion.span>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

























import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Dashboards Built", value: 10, suffix: "+" },
  { label: "Data Accuracy", value: 100, suffix: "%" },
];

const highlights = ["SQL (Advanced Queries, Joins, Subqueries)", "Python (Pandas, NumPy, Data Validation, Automation Scripts)", "Power BI", "Tableau", "Advanced Excel (Pivot Tables, Power Query, Lookups)", "Snowflake", "SQL Server", "MySQL", "PostgreSQL", "Healthcare Analytics Tables", "Claims & Eligibility Data Models"];

const CountUp = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            // className="glass-card p-8 rounded-2xl border-2 border-red-500"
              className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform border-2 border-red-500"

          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Business Data Analyst with 3+ years of experience delivering data-driven insights through SQL analysis, healthcare analytics, data validation, and KPI reporting. Skilled in business requirements gathering, stakeholder collaboration, root-cause analysis, and dashboard development using Python and enterprise BI tools. Proven ability to manage data quality, support ETL processes, and ensure compliant, audit-ready reporting across operational teams. Adept at translating business problems into actionable insights while improving efficiency, visibility, and decision support outcomes.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {highlights.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                className="px-4 py-2 glass-card rounded-full text-sm font-medium hover:glow-accent transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

