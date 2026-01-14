// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Briefcase } from "lucide-react";

// const experiences = [
//   {
//     company: "BNY Mellon",
//     role: "Data Analyst",
//     period: "Aug 2024 – Present",
//     achievements: [
//       "Built AI-powered Power BI Copilot dashboards for real-time insights",
//       "Reduced compliance errors by 40% through SQL Server validation & governance automation",
//       "Saved $180K annually with regression-based process optimization",
//       "Improved portfolio accuracy by building Snowflake data pipelines",
//       "Accelerated risk assessments using R + AutoML modeling",
//     ],
//     color: "primary",
//   },
//   {
//     company: "Sage Softtech",
//     role: "Data Analyst",
//     period: "Jan 2021 – Jul 2023",
//     achievements: [
//       "Automated reporting pipelines with Python & SQL, increasing accuracy by 25%",
//       "Developed Tableau dashboards uncovering $85K quarterly growth",
//       "Implemented AI-based customer segmentation with k-means clustering",
//       "Predicted customer churn with regression & time series analysis (preventing $120K loss)",
//       "Standardized data governance using Python automation & Git version control",
//     ],
//     color: "accent",
//   },
// ];

// export const Experience = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

//   return (
//     <section id="experience" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-4">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Professional <span className="text-gradient">Experience</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
//         </motion.div>

//         <div className="max-w-5xl mx-auto relative">
//           {/* Timeline Line */}
//           <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform md:-translate-x-1/2" />

//           {/* Experience Cards */}
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: index * 0.3, duration: 0.6 }}
//               className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%]"}`}
//             >
//               {/* Timeline Dot */}
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={inView ? { scale: 1 } : {}}
//                 transition={{ delay: index * 0.3 + 0.2, duration: 0.3 }}
//                 className="absolute left-8 md:left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent transform md:-translate-x-1/2 glow-accent"
//               />

//               {/* Card */}
//               <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
//                 <motion.div
//                   whileHover={{ scale: 1.02, rotateY: 5 }}
//                   className="glass-card p-6 rounded-xl hover:glow-accent transition-all"
//                 >
//                   <div className="flex items-start gap-4 mb-4">
//                     <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
//                       <Briefcase className="w-6 h-6 text-primary-foreground" />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-2xl font-bold text-foreground mb-1">{exp.company}</h3>
//                       <p className="text-lg text-primary font-medium mb-1">{exp.role}</p>
//                       <p className="text-sm text-muted-foreground">{exp.period}</p>
//                     </div>
//                   </div>

//                   <ul className="space-y-2">
//                     {exp.achievements.map((achievement, i) => (
//                       <motion.li
//                         key={i}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={inView ? { opacity: 1, x: 0 } : {}}
//                         transition={{ delay: index * 0.3 + 0.3 + i * 0.1, duration: 0.4 }}
//                         className="flex items-start gap-2 text-muted-foreground"
//                       >
//                         <span className="text-accent mt-1.5">•</span>
//                         <span>{achievement}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };































import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Cigna Healthcare Group",
    role: "Business Data Analyst",
    period: "Mar 2025 – Present",
    achievements: [
      "Diagnosed claims accuracy gaps by analyzing healthcare claims and eligibility data, applying SQL-based validation and ICD-10/CPT rules, improving first-pass yield by 22% through standardized business logic",
      "Engineered automated data-quality controls using Python analytics and ETL validation, stabilizing provider rate and eligibility checks, reducing downstream reporting variance by 18% across finance and operations stakeholders",
      "Synthesized claims, utilization, and denial trends into KPI-driven dashboards using business intelligence modeling, enabling faster executive decisions and reducing manual operational reporting dependency by 30%",
      "Evaluated cost and utilization patterns across value-based care populations, integrating healthcare analytics metrics and stakeholder requirements, supporting targeted care-management actions that lowered avoidable utilization by 12%",
      "Structured enterprise reporting definitions and audit-ready documentation through requirements analysis and data governance alignment, strengthening cross-team trust in analytics outputs and decreasing preventable claim denials by 19%",
    ],
    color: "primary",
  },
  {
    company: "Persistent Systems",
    role: "Data Analyst",
    period: "Jan 2021 – Jul 2023",
    achievements: [
      "Analyzed healthcare claims and eligibility data using SQL and ICD-10/CPT standards to identify payment inconsistencies, improving claim settlement accuracy by 21% across operational workflows",
      "Automated denial and outcome trend analysis using Python, Pandas, and healthcare coding logic, reducing manual review dependency by 35% while improving root-cause visibility for claims teams",
      "Designed operational analytics using Power BI, healthcare KPIs, and claims lifecycle metrics, increasing turnaround time transparency and reducing pending-claim backlog impact by 18% for business stakeholders",
      "Strengthened data ingestion and validation through ETL workflows, Informatica, and provider payment rules, improving end-to-end data reliability and first-pass processing efficiency by 20%",
      "Evaluated admissions, length of stay, and readmission indicators using SQL, HL7, and EHR data concepts, enabling resource planning insights that improved hospital care-flow efficiency by 14%",
      "Built provider performance and denial analysis reports using SQL-based metrics and healthcare coding standards, enabling operations teams to reduce repeat claim errors and improve rework efficiency by 15%",
      "Automated recurring operational and clinical reporting using validated datasets and BI models, improving reporting timeliness and consistency while reducing manual preparation effort by 40%",
    ],
    color: "accent",
  },
];

export const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform md:-translate-x-1/2" />

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%]"}`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.3 + 0.2, duration: 0.3 }}
                className="absolute left-8 md:left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent transform md:-translate-x-1/2 glow-accent"
              />

              {/* Card */}
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className="glass-card p-6 rounded-xl hover:glow-accent transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                      <Briefcase className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{exp.company}</h3>
                      <p className="text-lg text-primary font-medium mb-1">{exp.role}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.3 + 0.3 + i * 0.1, duration: 0.4 }}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-accent mt-1.5">•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

