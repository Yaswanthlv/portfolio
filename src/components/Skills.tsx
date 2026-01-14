// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//   SiPython,
//   SiMysql,
//   SiR,
//   SiPandas,
//   SiNumpy,
//   SiScikitlearn,
//   SiTensorflow,
//   SiPytorch,
//   SiPostgresql,
//   SiTableau,
//   SiAmazon,
//   SiGooglecloud,
//   SiSnowflake,
//   SiGit,
//   SiGithub,
// } from "react-icons/si";
// import { Database, Cloud, FileSpreadsheet } from "lucide-react";
// import { Brain, TrendingUp, Users, Eye } from "lucide-react";

// const skillCategories = [
//   {
//     title: "Languages",
//     icon: SiPython,
//     skills: [
//       { name: "Python", icon: SiPython },
//       { name: "SQL", icon: SiMysql },
//       { name: "R", icon: SiR },
//     ],
//   },
//   {
//     title: "Libraries",
//     icon: SiPandas,
//     skills: [
//       { name: "Pandas", icon: SiPandas },
//       { name: "NumPy", icon: SiNumpy },
//       { name: "Scikit-learn", icon: SiScikitlearn },
//       { name: "TensorFlow", icon: SiTensorflow },
//       { name: "PyTorch", icon: SiPytorch },
//     ],
//   },
//   {
//     title: "Databases",
//     icon: SiMysql,
//     skills: [
//       { name: "MySQL", icon: SiMysql },
//       { name: "PostgreSQL", icon: SiPostgresql },
//       { name: "SQL Server", icon: SiMysql },
//     ],
//   },
//   {
//     title: "Visualization",
//     icon: Database,
//     skills: [
//       { name: "Power BI", icon: Database },
//       { name: "Tableau", icon: SiTableau },
//       { name: "Excel", icon: FileSpreadsheet },
//     ],
//   },
//   {
//     title: "Techniques",
//     icon: TrendingUp,
//     skills: [
//       { name: "Regression", icon: TrendingUp },
//       { name: "A/B Testing", icon: Brain },
//       { name: "Time Series", icon: TrendingUp },
//       { name: "Predictive Analytics", icon: Brain },
//     ],
//   },
//   {
//     title: "Cloud",
//     icon: SiAmazon,
//     skills: [
//       { name: "AWS", icon: SiAmazon },
//       { name: "Azure", icon: Cloud },
//       { name: "GCP", icon: SiGooglecloud },
//       { name: "Snowflake", icon: SiSnowflake },
//     ],
//   },
//   {
//     title: "Version Control",
//     icon: SiGit,
//     skills: [
//       { name: "Git", icon: SiGit },
//       { name: "GitHub", icon: SiGithub },
//     ],
//   },
//   {
//     title: "Soft Skills",
//     icon: Users,
//     skills: [
//       { name: "Storytelling", icon: Users },
//       { name: "Critical Thinking", icon: Brain },
//       { name: "Collaboration", icon: Users },
//       { name: "Attention to Detail", icon: Eye },
//     ],
//   },
// ];

// export const Skills = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

//   return (
//     <section id="skills" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

//       <div className="container mx-auto px-4">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Technical <span className="text-gradient">Skills</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
//         </motion.div>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {skillCategories.map((category, catIndex) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: catIndex * 0.1, duration: 0.5 }}
//               className="glass-card p-6 rounded-xl hover:glow-accent transition-all group"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
//                   <category.icon className="w-6 h-6 text-primary-foreground" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
//               </div>

//               <div className="space-y-3">
//                 {category.skills.map((skill, skillIndex) => (
//                   <motion.div
//                     key={skill.name}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={inView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ delay: catIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
//                     className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-default"
//                   >
//                     <skill.icon className="w-5 h-5 text-accent" />
//                     <span className="text-muted-foreground group-hover:text-foreground transition-colors">
//                       {skill.name}
//                     </span>
//                   </motion.div>
//                 ))}
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
import {
  SiPython,
  SiMysql,
  SiR,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiPostgresql,
  SiTableau,
  SiAmazon,
  SiGooglecloud,
  SiSnowflake,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { Database, Cloud, FileSpreadsheet } from "lucide-react";
import { Brain, TrendingUp, Users, Eye } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Scripting",
    icon: SiPython,
    skills: [
      { name: "SQL (Advanced Queries, Joins, Subqueries)", icon: SiMysql },
      { name: "Python (Pandas, NumPy, Data Validation, Automation Scripts)", icon: SiPython },
    ],
  },
  {
    title: "Data Analysis & BI Tools",
    icon: SiTableau,
    skills: [
      { name: "Power BI", icon: Database },
      { name: "Tableau", icon: SiTableau },
      { name: "Advanced Excel (Pivot Tables, Power Query, Lookups)", icon: FileSpreadsheet },
    ],
  },
  {
    title: "Databases & Data Warehousing",
    icon: SiMysql,
    skills: [
      { name: "Snowflake", icon: SiSnowflake },
      { name: "SQL Server", icon: SiMysql },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Healthcare Analytics Tables", icon: SiMysql },
      { name: "Claims & Eligibility Data Models", icon: SiMysql },
    ],
  },
  {
    title: "Cloud Platforms & Data Platforms",
    icon: SiAmazon,
    skills: [
      { name: "AWS (S3 for Data Storage, Cloud-Based Analytics Workflows)", icon: SiAmazon },
      { name: "Snowflake Cloud Data Platform", icon: SiSnowflake },
    ],
  },
  {
    title: "ETL & Data Integration Tools",
    icon: SiMysql,
    skills: [
      { name: "Informatica", icon: SiMysql },
      { name: "Data Ingestion Pipelines", icon: SiMysql },
      { name: "Data Transformation Logic", icon: SiMysql },
      { name: "Source-to-Target Mapping", icon: SiMysql },
    ],
  },
  {
    title: "Healthcare Domain & Technical Standards",
    icon: Users,
    skills: [
      { name: "ICD-10", icon: Users },
      { name: "CPT", icon: Users },
      { name: "HCPCS", icon: Users },
      { name: "DRG", icon: Users },
      { name: "HL7", icon: Users },
      { name: "EHR/EMR Data Concepts", icon: Users },
      { name: "Claims Lifecycle", icon: Users },
      { name: "Provider Contract Data", icon: Users },
    ],
  },
  {
    title: "Business Analysis & Reporting Skills",
    icon: TrendingUp,
    skills: [
      { name: "Requirements Gathering", icon: TrendingUp },
      { name: "KPI Definition", icon: TrendingUp },
      { name: "Stakeholder Reporting", icon: TrendingUp },
      { name: "Data Validation Rules", icon: TrendingUp },
      { name: "Root Cause Analysis", icon: TrendingUp },
    ],
  },
  {
    title: "Data Governance, Compliance & Tools",
    icon: SiGit,
    skills: [
      { name: "HIPAA Compliance", icon: SiGit },
      { name: "Data Quality Frameworks", icon: SiGit },
      { name: "Audit-Ready Reporting", icon: SiGit },
      { name: "Jira", icon: SiGit },
      { name: "Confluence", icon: SiGit },
      { name: "Business Rules Documentation", icon: SiGit },
    ],
  },
];

export const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="glass-card p-6 rounded-xl hover:glow-accent transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-default"
                  >
                    <skill.icon className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};










