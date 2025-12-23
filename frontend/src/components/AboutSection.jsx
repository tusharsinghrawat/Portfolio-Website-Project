import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Award, Rocket, Layers } from "lucide-react";

const stats = [
  { icon: Code2, value: "Fresher", label: "Entry Level Developer" },
  { icon: Rocket, value: "3+", label: "Projects Completed" },
  { icon: Award, value: "4+", label: "Certifications Earned" },
  { icon: Layers, value: "6+", label: "Technical Skills" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
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
              About Me
            </span>

            <h2 className="section-title">
              Passionate <span className="gradient-text">Web Developer</span>
            </h2>

            <p className="section-subtitle mx-auto">
              I am an enthusiastic and self-motivated Computer Science undergraduate
              with a strong foundation in HTML, CSS, JavaScript, and React.js. I enjoy
              building responsive, user-friendly web applications and continuously
              learning new technologies. My goal is to grow as a developer while
              contributing to impactful digital experiences.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hello! I'm Tushar Singh Rawat, an enthusiastic and self-motivated
                fresher with a strong willingness to learn, grow, and contribute.
                Known for quick learning, dedication, and the ability to adapt to new
                challenges. Looking for opportunities to apply my skills and build a
                strong professional foundation.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                My journey in tech started when I built my first website at 15. Since
                then, I've worked with startups and established companies to bring
                their digital visions to life. I believe in writing clean,
                maintainable code and staying up-to-date with the latest technologies.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new frameworks,
                contributing to open-source projects, or sharing knowledge through
                blog posts and tech talks. I'm always excited to take on new
                challenges and collaborate with like-minded individuals.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My goal is to create technology that makes a positive impact on
                people's lives while pushing the boundaries of what's possible on the
                web.
              </p>
            </motion.div>

            {/* Right stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass-card-hover p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="glow-line mt-24" />
    </section>
  );
}
