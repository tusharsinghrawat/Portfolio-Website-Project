
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
 {
  title: "Full Stack Web Development Trainee (MERN)",
  company: "Grras Training Institute (College-Based Training)",
  location: "College Campus, India",
  period: "Aug 2024 - Oct 2024",
  description:
    "Completed college-based training in Full Stack Web Development using the MERN stack. Learned frontend and backend fundamentals and worked on practice projects to understand full-stack application development, REST APIs, and database integration.",
  technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
   
},

{
  title: "Web Developer Intern",
  company: "Elevate Labs",
  location: "India (Remote)",
  period: "Nov 2025 - Dec 2025",
  description:
    "Successfully completed a Web Developer Internship at Elevate Labs, working on real-world web development tasks and projects. Demonstrated strong problem-solving skills, professionalism, and dedication. Recognized as a Best Performer for consistent quality work and timely delivery.",
  technologies: ["HTML", "CSS", "JavaScript", "React.js", "Web Development", "Real-World Projects"],
},

{
  title: "AI Agent Architect Trainee (Project-Based Learning)",
  company: "IBM SkillsBuild in collaboration with CSRBOX",
  location: "India (Remote)",
  period: "July 2025 - August 2025",
  description:
    "Successfully completed a 4-week IBM SkillsBuild Project Based Learning Program focused on Agentic AI. Gained hands-on experience in designing, building, and deploying AI agents, understanding agent architectures, workflows, and real-world AI use cases through guided projects.",
  technologies: ["Agentic AI", "AI Agents", "Prompt Engineering", "Python", "AI Architecture", "Project-Based Learning"],
},

{
  title: "Frontend Developer Trainee",
  company: "Learning & Practice Phase",
  location: "India (Remote)",
  period: "2023 - 2025",
  description:
    "Learned and practiced frontend development fundamentals by building small applications and UI components. Focused on responsive design, component-based architecture, and improving coding standards.",
  technologies: ["HTML", "CSS", "JavaScript", "React Basics", "UI Fundamentals"],
},

];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />

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
              Work Experience
            </span>

            <h2 className="section-title">
              My Professional{" "}
              <span className="gradient-text">Journey</span>
            </h2>

            <p className="section-subtitle mx-auto">
              A timeline of my career growth and the amazing teams I've had the
              privilege to work with.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 z-10" />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="glass-card-hover p-6 group">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar size={14} />
                      <span className="text-sm font-mono">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded"
                        >
                          {tech}
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

