// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useState } from "react";
// import { Mail, Linkedin, Send } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner";

// export const Contact = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     setTimeout(() => {
//       toast.success("Message sent successfully! I'll get back to you soon.", {
//         description: "Thank you for reaching out!",
//       });
//       setFormData({ name: "", email: "", message: "" });
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   return (
//     <section id="contact" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
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
//             Get In <span className="text-gradient">Touch</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
//         </motion.div>

//         <div className="max-w-4xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Contact Info */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.2, duration: 0.6 }}
//               className="space-y-6"
//             >
//               <div className="glass-card p-6 rounded-xl">
//                 <h3 className="text-2xl font-bold mb-6 text-foreground">Let's Connect</h3>
//                 <p className="text-muted-foreground mb-6">
//                   I'm always open to discussing new opportunities, collaborations, or data-driven solutions.
//                 </p>

//                 <div className="space-y-4">
//                   <motion.a
//                     href="mailto:yaswanth@example.com"
//                     whileHover={{ scale: 1.05, x: 10 }}
//                     className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
//                   >
//                     <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent group-hover:glow-accent transition-all">
//                       <Mail className="w-5 h-5 text-primary-foreground" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-muted-foreground">Email</p>
//                       <p className="text-foreground font-medium">yaswanth@example.com</p>
//                     </div>
//                   </motion.a>

//                   <motion.a
//                     href="https://linkedin.com/in/yaswanth"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.05, x: 10 }}
//                     className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
//                   >
//                     <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent group-hover:glow-accent transition-all">
//                       <Linkedin className="w-5 h-5 text-primary-foreground" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-muted-foreground">LinkedIn</p>
//                       <p className="text-foreground font-medium">linkedin.com/in/yaswanth</p>
//                     </div>
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.4, duration: 0.6 }}
//             >
//               <form onSubmit={handleSubmit} className="glass-card p-6 rounded-xl space-y-4">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                     Name
//                   </label>
//                   <Input
//                     id="name"
//                     type="text"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     required
//                     className="bg-background/50 border-border focus:border-accent transition-colors"
//                     placeholder="Your Name"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                     Email
//                   </label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     required
//                     className="bg-background/50 border-border focus:border-accent transition-colors"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                     Message
//                   </label>
//                   <Textarea
//                     id="message"
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     required
//                     rows={5}
//                     className="bg-background/50 border-border focus:border-accent transition-colors resize-none"
//                     placeholder="Your message..."
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-all"
//                 >
//                   {isSubmitting ? (
//                     <motion.div
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                     >
//                       <Send className="w-5 h-5" />
//                     </motion.div>
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5 mr-2" />
//                       Send Message
//                     </>
//                   )}
//                 </Button>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };








import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Mail, Linkedin, Send, GithubIcon, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.", {
        description: "Thank you for reaching out!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
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
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Let's Connect</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new opportunities, collaborations, or data-driven solutions.
                </p>

                <div className="space-y-4">
                  <motion.a
                    href="mailto:yaswanth.lalpetvari2000@gmail.com"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent group-hover:glow-accent transition-all">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">yaswanth.lalpetvari2000@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/yaswanth-v-syracuse/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent group-hover:glow-accent transition-all">
                      <Linkedin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-white">LinkedIn</p>
                      <p className="text-foreground font-medium">linkedin.com/in/yaswanth-v-syracuse</p>
                    </div>
                  </motion.a>
                  <motion.a
                    href="https://github.com/Yaswanthlv"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent group-hover:glow-accent transition-all">
                      <GithubIcon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-white">Github</p>
                      <p className="text-foreground font-medium">Github</p>
                    </div>
                  </motion.a>
                  <motion.a
                  href="tel:+1234567890"
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent group-hover:glow-accent transition-all">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">+1 732 497 8550</p>
                  </div>
                </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-6 rounded-xl space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50 border-border focus:border-accent transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50 border-border focus:border-accent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background/50 border-border focus:border-accent transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-all"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

