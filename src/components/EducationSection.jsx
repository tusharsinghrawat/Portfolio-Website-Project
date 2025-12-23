import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Techno India NJR Institute of Technology",
    location: "Udaipur, Rajasthan",
    period: "September 2022 - Present",
    description:
      "Currently pursuing B.Tech in Computer Science with a focus on programming, data structures, and software development. Actively building technical skills through coursework and practical projects.",
    achievements: ["Pursuing B.Tech", "Active Learner", "Technical Projects"],
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "Kendriya Vidyalaya Eklinggarh No.2",
    location: "Eklinggarh, Rajasthan",
    period: "July 2021 - July 2022",
    description:
      "Completed senior secondary education with a focus on core academic subjects. Developed a strong foundation in analytical thinking and problem-solving.",
    achievements: ["CBSE Board Examination Appeared"],
  },
  {
    degree: "Secondary School (10th)",
    institution: "Kendriya Vidyalaya Eklinggarh No.2",
    location: "Eklinggarh, Rajasthan",
    period: "July 2019 - March 2020",
    description:
      "Completed secondary school education with a strong foundation in core subjects. Developed discipline, analytical thinking, and problem-solving skills.",
    achievements: ["CBSE Board Examination"],
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">
              Education
            </span>

            <h2 className="section-title">
              Academic <span className="gradient-text">Background</span>
            </h2>

            <p className="section-subtitle mx-auto">
              The educational foundation that shaped my technical expertise and
              problem-solving abilities.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/20" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree + edu.institution}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50 z-10" />

                {/* Card */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="glass-card-hover p-6 group">
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <Calendar size={14} />
                      <span className="text-sm font-mono">
                        {edu.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                      <span className="font-medium text-foreground">
                        {edu.institution}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {edu.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="flex items-center gap-1 text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded"
                        >
                          <Award size={12} />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
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
