import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    title: "Backend",
    skills: ["Python", "SQL", "MySQL"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Git Hub", "VS Code"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">
              My Skills
            </span>

            <h2 className="section-title">
              Technologies I{" "}
              <span className="gradient-text">Work With</span>
            </h2>

            <p className="section-subtitle mx-auto">
              A hands-on toolkit built through real-world projects that helps
              me create interactive and responsive web applications.
            </p>
          </div>

          {/* Skill Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: categoryIndex * 0.1,
                }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView ? { opacity: 1, scale: 1 } : {}
                      }
                      transition={{
                        duration: 0.3,
                        delay:
                          categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="skill-badge"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="glow-line mt-24" />
    </section>
  );
}
