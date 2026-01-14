// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, EffectCards } from "swiper/modules";
// import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import budgetImage from "@/assets/projects/budget.png";
// import healthcareImage from "@/assets/projects/healthcare.png";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-cards";

// // const projects = [
// //   {
// //     title: "New York State Budget Allocation Analysis",
// //     description: "Conducted comprehensive 30-year trend analysis on New York State budget allocation data using advanced statistical modeling in R and interactive visualizations in Tableau. This project involved processing and analyzing over 1 million records of historical budget data across multiple state departments and programs. Implemented data cleaning pipelines, time-series forecasting models, and created dynamic dashboards that enhanced budget transparency for policymakers and stakeholders. The analysis revealed key spending patterns, identified areas of fiscal inefficiency, and provided actionable recommendations that contributed to data-driven budget planning. Delivered insights through interactive Tableau dashboards enabling drill-down capabilities across fiscal years, departments, and program categories.",
// //     image: budgetImage,
// //     tech: ["R", "Tableau", "Excel", "Time Series Analysis", "Data Cleaning"],
// //     preview: "#",
// //     code: "#",
// //   },
// //   {
// //     title: "U.S. Chronic Disease Indicators Dashboard",
// //     description: "Developed a comprehensive interactive dashboard using Python Dash and Plotly to visualize and analyze U.S. chronic disease indicators across multiple demographics and geographic regions. This project aggregated data from CDC sources covering diabetes, heart disease, obesity, and other chronic conditions, processing over 500,000 health records. Implemented advanced data preprocessing techniques, statistical analysis, and machine learning clustering to identify high-risk populations and geographic hotspots. The dashboard features real-time filtering, geospatial mapping, trend analysis, and predictive analytics that improved public health decision-making accuracy by 30%. Created automated data pipelines for continuous data updates and validation, ensuring data integrity and reliability. The tool is now used by public health officials to allocate resources, design intervention programs, and monitor health outcomes across communities.",
// //     image: healthcareImage,
// //     tech: ["Python", "Dash", "Plotly", "Pandas", "Machine Learning", "Geospatial Analysis"],
// //     preview: "#",
// //     code: "#",
// //   },
// // ];
// const projects = [
//   {
//     title: "New York State Budget Allocation Analysis",
//     description: [
//       "Conducted 30-year trend analysis on New York State budget allocation data using R and Tableau.",
//       "Processed and analyzed over 1 million records across multiple state departments and programs.",
//       "Implemented data cleaning pipelines and time-series forecasting models.",
//       "Created dynamic dashboards that enhanced budget transparency for policymakers.",
//       "Provided actionable recommendations for data-driven budget planning."
//     ],
//     image: budgetImage,
//     tech: ["R", "Tableau", "Excel", "Time Series Analysis", "Data Cleaning"],
//     preview: "#",
//     code: "#",
//   },
//   {
//     title: "U.S. Chronic Disease Indicators Dashboard",
//     description: [
//       "Developed an interactive dashboard using Python Dash and Plotly.",
//       "Aggregated data from CDC covering diabetes, heart disease, obesity, and other chronic conditions.",
//       "Applied statistical analysis and machine learning clustering to identify high-risk populations.",
//       "Implemented real-time filtering, geospatial mapping, trend analysis, and predictive analytics.",
//       "Automated data pipelines for continuous updates and validation."
//     ],
//     image: healthcareImage,
//     tech: ["Python", "Dash", "Plotly", "Pandas", "Machine Learning", "Geospatial Analysis"],
//     preview: "#",
//     code: "#",
//   },
// ];


// export const Projects = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

//   return (
//     <section id="projects" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
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
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
//         </motion.div>

//         <div className="max-w-6xl mx-auto relative">
//           <Swiper
//             modules={[Navigation, Autoplay, EffectCards]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation={{
//               prevEl: ".swiper-button-prev-custom",
//               nextEl: ".swiper-button-next-custom",
//             }}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             className="pb-12"
//           >
//             {projects.map((project, index) => (
//               <SwiperSlide key={index}>
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={inView ? { opacity: 1, scale: 1 } : {}}
//                   transition={{ delay: index * 0.2, duration: 0.6 }}
//                   className="glass-card rounded-2xl overflow-hidden group"
//                 >
//                   <div className="grid md:grid-cols-2 gap-6">
//                     {/* Image */}
//                     <div className="relative overflow-hidden h-64 md:h-96 lg:h-full min-h-[300px]">
//                       <motion.img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-full object-cover"
//                         whileHover={{ scale: 1.1 }}
//                         transition={{ duration: 0.5 }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     </div>

//                     {/* Content */}
//                     <div className="p-4 sm:p-6 flex flex-col justify-between">
//                       <div>
//                         <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
//                         {/* <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-6 sm:line-clamp-none">{project.description}</p> */}
// <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground mb-4 space-y-1">
//   {project.description.map((point, idx) => (
//     <li key={idx}>{point}</li>
//   ))}
// </ul>

//                         {/* Tech Stack */}
//                         <div className="flex flex-wrap gap-2 mb-6">
//                           {project.tech.map((tech) => (
//                             <span
//                               key={tech}
//                               className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-foreground border border-primary/30 glow-accent"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Buttons */}
//                       {/* <div className="flex flex-col sm:flex-row gap-3">
//                         <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-sm sm:text-base">
//                           <ExternalLink className="w-4 h-4 mr-2" />
//                           Preview
//                         </Button>
//                         <Button variant="outline" className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-sm sm:text-base">
//                           <Github className="w-4 h-4 mr-2" />
//                           Code
//                         </Button>
//                       </div> */}
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation Buttons */}
//           <div className="flex justify-center gap-4 mt-8">
//             <button
//               className="swiper-button-prev-custom p-3 glass-card rounded-full hover:glow-accent transition-all group"
//               aria-label="Previous project"
//             >
//               <ChevronLeft className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
//             </button>
//             <button
//               className="swiper-button-next-custom p-3 glass-card rounded-full hover:glow-accent transition-all group"
//               aria-label="Next project"
//             >
//               <ChevronRight className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


























// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, EffectCards } from "swiper/modules";
// import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import budgetImage from "/projectnewyork.jpeg";
// import healthcareImage from "/usa.jpeg";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-cards";

// // const projects = [
// //   {
// //     title: "New York State Budget Allocation Analysis",
// //     description: "Conducted comprehensive 30-year trend analysis on New York State budget allocation data using advanced statistical modeling in R and interactive visualizations in Tableau. This project involved processing and analyzing over 1 million records of historical budget data across multiple state departments and programs. Implemented data cleaning pipelines, time-series forecasting models, and created dynamic dashboards that enhanced budget transparency for policymakers and stakeholders. The analysis revealed key spending patterns, identified areas of fiscal inefficiency, and provided actionable recommendations that contributed to data-driven budget planning. Delivered insights through interactive Tableau dashboards enabling drill-down capabilities across fiscal years, departments, and program categories.",
// //     image: budgetImage,
// //     tech: ["R", "Tableau", "Excel", "Time Series Analysis", "Data Cleaning"],
// //     preview: "#",
// //     code: "#",
// //   },
// //   {
// //     title: "U.S. Chronic Disease Indicators Dashboard",
// //     description: "Developed a comprehensive interactive dashboard using Python Dash and Plotly to visualize and analyze U.S. chronic disease indicators across multiple demographics and geographic regions. This project aggregated data from CDC sources covering diabetes, heart disease, obesity, and other chronic conditions, processing over 500,000 health records. Implemented advanced data preprocessing techniques, statistical analysis, and machine learning clustering to identify high-risk populations and geographic hotspots. The dashboard features real-time filtering, geospatial mapping, trend analysis, and predictive analytics that improved public health decision-making accuracy by 30%. Created automated data pipelines for continuous data updates and validation, ensuring data integrity and reliability. The tool is now used by public health officials to allocate resources, design intervention programs, and monitor health outcomes across communities.",
// //     image: healthcareImage,
// //     tech: ["Python", "Dash", "Plotly", "Pandas", "Machine Learning", "Geospatial Analysis"],
// //     preview: "#",
// //     code: "#",
// //   },
// // ];
// const projects = [
//   {
//     title: "New York State Budget Allocation Analysis",
//     description: [
//       "Conducted 30-year trend analysis on New York State budget allocation data using R and Tableau.",
//       "Processed and analyzed over 1 million records across multiple state departments and programs.",
//       "Implemented data cleaning pipelines and time-series forecasting models.",
//       "Created dynamic dashboards that enhanced budget transparency for policymakers.",
//       "Provided actionable recommendations for data-driven budget planning."
//     ],
//     image: budgetImage,
//     tech: ["R", "Tableau", "Excel", "Time Series Analysis", "Data Cleaning"],
//     preview: "#",
//     code: "#",
//   },
//   {
//     title: "U.S. Chronic Disease Indicators Dashboard",
//     description: [
//       "Developed an interactive dashboard using Python Dash and Plotly.",
//       "Aggregated data from CDC covering diabetes, heart disease, obesity, and other chronic conditions.",
//       "Applied statistical analysis and machine learning clustering to identify high-risk populations.",
//       "Implemented real-time filtering, geospatial mapping, trend analysis, and predictive analytics.",
//       "Automated data pipelines for continuous updates and validation."
//     ],
//     image: healthcareImage,
//     tech: ["Python", "Dash", "Plotly", "Pandas", "Machine Learning", "Geospatial Analysis"],
//     preview: "#",
//     code: "#",
//   },
// ];


// export const Projects = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

//   return (
//     <section id="projects" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
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
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
//         </motion.div>

//         <div className="max-w-6xl mx-auto relative">
//           <Swiper
//             modules={[Navigation, Autoplay, EffectCards]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation={{
//               prevEl: ".swiper-button-prev-custom",
//               nextEl: ".swiper-button-next-custom",
//             }}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             className="pb-12"
//           >
//             {projects.map((project, index) => (
//               <SwiperSlide key={index}>
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={inView ? { opacity: 1, scale: 1 } : {}}
//                   transition={{ delay: index * 0.2, duration: 0.6 }}
//                   className="glass-card rounded-2xl overflow-hidden group"
//                 >
//                   <div className="grid md:grid-cols-2 gap-6">
//                     {/* Image */}
//                     <div className="relative overflow-hidden h-64 md:h-96 lg:h-full min-h-[300px]">
//                       <motion.img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-full object-cover"
//                         whileHover={{ scale: 1.1 }}
//                         transition={{ duration: 0.5 }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     </div>

//                     {/* Content */}
//                     <div className="p-4 sm:p-6 flex flex-col justify-between">
//                       <div>
//                         <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
//                         {/* <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-6 sm:line-clamp-none">{project.description}</p> */}
// <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground mb-4 space-y-1">
//   {project.description.map((point, idx) => (
//     <li key={idx}>{point}</li>
//   ))}
// </ul>

//                         {/* Tech Stack */}
//                         <div className="flex flex-wrap gap-2 mb-6">
//                           {project.tech.map((tech) => (
//                             <span
//                               key={tech}
//                               className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-foreground border border-primary/30 glow-accent"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Buttons */}
//                       {/* <div className="flex flex-col sm:flex-row gap-3">
//                         <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-sm sm:text-base">
//                           <ExternalLink className="w-4 h-4 mr-2" />
//                           Preview
//                         </Button>
//                         <Button variant="outline" className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-sm sm:text-base">
//                           <Github className="w-4 h-4 mr-2" />
//                           Code
//                         </Button>
//                       </div> */}
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation Buttons */}
//           <div className="flex justify-center gap-4 mt-8">
//             <button
//               className="swiper-button-prev-custom p-3 glass-card rounded-full hover:glow-accent transition-all group"
//               aria-label="Previous project"
//             >
//               <ChevronLeft className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
//             </button>
//             <button
//               className="swiper-button-next-custom p-3 glass-card rounded-full hover:glow-accent transition-all group"
//               aria-label="Next project"
//             >
//               <ChevronRight className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };















































// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, EffectCards } from "swiper/modules";
// import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useRef } from "react";

// // Import your actual local images - replace these with your real image files
// import budgetImage1 from "/newyork1.jpeg";
// import budgetImage2 from "/newyork2.jpeg";
// import budgetImage3 from "/newyork3.jpeg";
// import budgetImage4 from "/newyork4.jpeg";
// import healthcareImage1 from "/newimage1.jpeg";
// import healthcareImage2 from "/usa2.jpeg";
// import healthcareImage3 from "/usa3.jpeg";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-cards";

// const projects = [
//   {
//     title: "New York State Budget Allocation Analysis",
//     description: [
//       "Conducted 30-year trend analysis on New York State budget allocation data using R and Tableau.",
//       "Processed and analyzed over 1 million records across multiple state departments and programs.",
//       "Implemented data cleaning pipelines and time-series forecasting models.",
//       "Created dynamic dashboards that enhanced budget transparency for policymakers.",
//       "Provided actionable recommendations for data-driven budget planning."
//     ],
//     images: [
//       budgetImage1,
//       budgetImage2, 
//       budgetImage3,
//       budgetImage4
//     ],
//     tech: ["R", "Tableau", "Excel", "Time Series Analysis", "Data Cleaning"],
//     preview: "#",
//     code: "#",
//   },
//   {
//     title: "U.S. Chronic Disease Indicators Dashboard",
//     description: [
//       "Developed an interactive dashboard using Python Dash and Plotly.",
//       "Aggregated data from CDC covering diabetes, heart disease, obesity, and other chronic conditions.",
//       "Applied statistical analysis and machine learning clustering to identify high-risk populations.",
//       "Implemented real-time filtering, geospatial mapping, trend analysis, and predictive analytics.",
//       "Automated data pipelines for continuous updates and validation."
//     ],
//     images: [
//       healthcareImage1,
//       healthcareImage2,
//       healthcareImage3,
//     ],
//     tech: ["Python", "Dash", "Plotly", "Pandas", "Machine Learning", "Geospatial Analysis"],
//     preview: "#",
//     code: "#",
//   },
// ];

// // Image loading error handler
// const handleImageError = (e) => {
//   console.warn('Image failed to load:', e.target.src);
// };

// // Component for individual project with image navigation
// const ProjectSlide = ({ project, index, inView }) => {
//   const imageSwiperRef = useRef(null);

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={inView ? { opacity: 1, scale: 1 } : {}}
//       transition={{ delay: index * 0.2, duration: 0.6 }}
//       className="glass-card rounded-2xl overflow-hidden group"
//     >
//       <div className="grid md:grid-cols-2 gap-6">
//         {/* Image Gallery */}
//         <div className="relative overflow-hidden h-64 md:h-96 lg:h-full min-h-[300px] rounded-xl">
//           <Swiper
//             ref={imageSwiperRef}
//             modules={[Navigation]}
//             spaceBetween={0}
//             slidesPerView={1}
//             loop={true}
//             speed={800}
//             className="h-full rounded-xl"
//           >
//             {project.images.map((image, imgIndex) => (
//               <SwiperSlide key={imgIndex}>
//                 <div className="relative w-full h-full">
//                   <motion.img
//                     src={image}
//                     alt={`${project.title} - View ${imgIndex + 1}`}
//                     className="w-full h-full object-cover"
//                     onError={handleImageError}
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.5 }}
//                   />
//                   <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
          
//           {/* Image Navigation Buttons */}
//           <button
//             onClick={() => imageSwiperRef.current?.swiper.slidePrev()}
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 glass-card rounded-full hover:glow-accent transition-all group z-10"
//             aria-label="Previous image"
//           >
//             <ChevronLeft className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
//           </button>
//           <button
//             onClick={() => imageSwiperRef.current?.swiper.slideNext()}
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 glass-card rounded-full hover:glow-accent transition-all group z-10"
//             aria-label="Next image"
//           >
//             <ChevronRight className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
//           </button>
          
//           {/* Image Indicator Dots */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
//             {project.images.map((_, dotIndex) => (
//               <div
//                 key={dotIndex}
//                 className="w-2 h-2 rounded-full bg-white/80 backdrop-blur-sm transition-all duration-300"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-4 sm:p-6 flex flex-col justify-between">
//           <div>
//             <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
//             <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground mb-4 space-y-1">
//               {project.description.map((point, idx) => (
//                 <li key={idx} className="leading-relaxed">{point}</li>
//               ))}
//             </ul>

//             {/* Tech Stack */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {project.tech.map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-foreground border border-primary/30 glow-accent"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export const Projects = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   const mainSwiperRef = useRef(null);

//   return (
//     <section id="projects" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
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
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
//         </motion.div>

//         <div className="max-w-6xl mx-auto relative">
//           <Swiper
//             ref={mainSwiperRef}
//             modules={[Navigation, EffectCards]}
//             spaceBetween={30}
//             slidesPerView={1}
//             loop={true}
//             className="pb-12"
//           >
//             {projects.map((project, index) => (
//               <SwiperSlide key={index}>
//                 <ProjectSlide project={project} index={index} inView={inView} />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation Buttons for Projects */}
//           <div className="flex justify-center gap-4 mt-8">
//             <button
//               onClick={() => mainSwiperRef.current?.swiper.slidePrev()}
//               className="p-3 glass-card rounded-full hover:glow-accent transition-all group"
//               aria-label="Previous project"
//             >
//               <ChevronLeft className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
//             </button>
//             <button
//               onClick={() => mainSwiperRef.current?.swiper.slideNext()}
//               className="p-3 glass-card rounded-full hover:glow-accent transition-all group"
//               aria-label="Next project"
//             >
//               <ChevronRight className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
































import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper/modules";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

// Import your actual local images - replace these with your real image files
import budgetImage1 from "/newyork1.jpeg";
import budgetImage2 from "/newyork2.jpeg";
import budgetImage3 from "/newyork3.jpeg";
import budgetImage4 from "/newyork4.jpeg";
import healthcareImage1 from "/newimage1.jpeg";
import healthcareImage2 from "/usa2.jpeg";
import healthcareImage3 from "/usa3.jpeg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

const projects = [
  {
    title: "New York State Budget Allocation Analysis",
    description: [
      "Analyzed thirty-year New York State budget trends using R to identify inefficiencies and produce data-driven policy recommendations, processing and validating over one million economic records to ensure analytical accuracy.",
      "Developed dynamic Tableau dashboards to visualize long-term budget and economic patterns, improving data transparency, stakeholder insight, and decision-making through reliable and well-governed analytical outputs."
    ],
    images: [
      budgetImage1,
      budgetImage2, 
      budgetImage3,
      budgetImage4
    ],
    tech: ["R", "Tableau", "Excel", "Time Series Analysis", "Data Cleaning"],
    preview: "#",
    code: "#",
  },
  {
    title: "U.S. Chronic Disease Indicators Dashboard",
    description: [
      "Led a healthcare analytics initiative by visualizing chronic disease trends using Dash and Plotly, improving data accessibility and insight delivery for public health decision-makers.",
      "Standardized and validated healthcare datasets to improve data accuracy and consistency by 30%, translating analytical findings into actionable insights that strengthened stakeholder decision-making for healthcare policy improvements."
    ],
    images: [
      healthcareImage1,
      healthcareImage2,
      healthcareImage3,
    ],
    tech: ["Python", "Dash", "Plotly", "Pandas", "Machine Learning", "Geospatial Analysis"],
    preview: "#",
    code: "#",
  },
];

// Image loading error handler
const handleImageError = (e) => {
  console.warn('Image failed to load:', e.target.src);
};

// Component for individual project with image navigation
const ProjectSlide = ({ project, index, inView }) => {
  const imageSwiperRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="glass-card rounded-2xl overflow-hidden group"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Image Gallery */}
        <div className="relative overflow-hidden h-64 md:h-96 lg:h-full min-h-[300px] rounded-xl">
          <Swiper
            ref={imageSwiperRef}
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            speed={800}
            className="h-full rounded-xl"
          >
            {project.images.map((image, imgIndex) => (
              <SwiperSlide key={imgIndex}>
                <div className="relative w-full h-full">
                  <motion.img
                    src={image}
                    alt={`${project.title} - View ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Image Navigation Buttons */}
          <button
            onClick={() => imageSwiperRef.current?.swiper.slidePrev()}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 glass-card rounded-full hover:glow-accent transition-all group z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={() => imageSwiperRef.current?.swiper.slideNext()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 glass-card rounded-full hover:glow-accent transition-all group z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
          </button>
          
          {/* Image Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {project.images.map((_, dotIndex) => (
              <div
                key={dotIndex}
                className="w-2 h-2 rounded-full bg-white/80 backdrop-blur-sm transition-all duration-300"
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground mb-4 space-y-1">
              {project.description.map((point, idx) => (
                <li key={idx} className="leading-relaxed">{point}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-foreground border border-primary/30 glow-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const mainSwiperRef = useRef(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          <Swiper
            ref={mainSwiperRef}
            modules={[Navigation, EffectCards]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className="pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectSlide project={project} index={index} inView={inView} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons for Projects */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => mainSwiperRef.current?.swiper.slidePrev()}
              className="p-3 glass-card rounded-full hover:glow-accent transition-all group"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() => mainSwiperRef.current?.swiper.slideNext()}
              className="p-3 glass-card rounded-full hover:glow-accent transition-all group"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

