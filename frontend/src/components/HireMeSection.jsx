import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  Clock,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

/*
  NOTE:
  Agar aap shadcn/ui Button use nahi kar rahe ho
  to neeche simple button component use kiya gaya hai.
  (Same look & behavior)
*/

const Button = ({ children, variant = "primary", size = "lg", ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300";
  const sizes = {
    lg: "px-6 py-3 text-base",
  };
  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90",
    outline:
      "border border-border hover:bg-secondary/50",
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your existing applications",
  },
  {
    icon: Briefcase,
    title: "Consulting",
    description: "Technical guidance and architecture reviews",
  },
  {
    icon: Clock,
    title: "Flexible Engagement",
    description: "Full-time, part-time, or project-based work",
  },
];

const benefits = [
  "Clean, maintainable code",
  "On-time delivery",
  "Clear communication",
  "Post-project support",
];

export default function HireMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="hire"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div
        className="container mx-auto px-4 md:px-6 relative z-10"
        ref={ref}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Available for Work
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Let's Work{" "}
            <span className="gradient-text">Together</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you need a
            full-time developer, a freelance expert, or a technical
            consultant, I'm here to help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                }}
                className="glass-card p-6 rounded-xl group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 md:p-10 rounded-2xl border-primary/20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available Now
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Next Project?
            </h3>

            <p className="text-muted-foreground mb-6">
              I bring expertise, dedication, and a passion for creating
              exceptional digital experiences.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + index * 0.1,
                  }}
                  className="flex items-center gap-3 text-foreground/80"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button variant="outline">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
