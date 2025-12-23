import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Real-Time Emotion Detector",
    description:
      "A web-based application that detects human emotions in real time using a webcam. It uses face detection and emotion recognition models to provide instant visual feedback with dynamic overlays.",
    technologies: ["JavaScript", "HTML", "CSS", "face-api.js", "WebRTC"],
    liveUrl:
      "https://tusharsinghrawat.github.io/Real-Time-Emotion-Detector-Project/",
    githubUrl:
      "https://github.com/tusharsinghrawat/Real-Time-Emotion-Detector-Project",
    featured: true,
  },
  {
    title: "Habit Tracker Progressive Web App",
    description:
      "An offline-first Progressive Web App that helps users build and maintain daily habits. The app supports habit creation, daily check-ins, streak tracking, visual progress charts, and installability across devices, even without internet access.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "IndexedDB",
      "Workbox",
      "Notification API",
      "Recharts",
    ],
    liveUrl:
      "https://tusharsinghrawat.github.io/Habit-Tracker-Progressive-Web-App-Project/",
    githubUrl:
      "https://github.com/tusharsinghrawat/Habit-Tracker-Progressive-Web-App-Project",
    featured: true,
  },
  {
    title: "Online Code Editor with Live Preview",
    description:
      "A browser-based online code editor that allows users to write HTML, CSS, and JavaScript and instantly preview the output in real time. The application runs entirely on the client side without any backend.",
    technologies: [
      "React",
      "Vite",
      "@monaco-editor/react",
      "HTML iframe",
      "LocalStorage",
      "Lodash (debounce)",
      "query-string",
    ],
    liveUrl:
      "https://tusharsinghrawat.github.io/Online-Code-Editor-Project/",
    githubUrl:
      "https://github.com/tusharsinghrawat/Online-Code-Editor-Project",
    featured: true,
  },
  {
    title: "Bike Selling Website",
    description:
      "A modern and fully responsive bike and helmet showcase website featuring listings, search functionality, image preview popups, and mobile-friendly navigation.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Google Fonts (Poppins)",
      "Remix Icons",
    ],
    liveUrl:
      "https://tusharsinghrawat.github.io/Bike-Selling-Website-Project/",
    githubUrl:
      "https://github.com/tusharsinghrawat/Bike-Selling-Website-Project",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
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
              My Work
            </span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle mx-auto">
              A selection of projects I've worked on, showcasing my skills in
              full-stack development and design.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card-hover p-8 group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Folder className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <h3 className="text-xl font-semibold text-center mb-8">
            Other Noteworthy Projects
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                }}
                className="glass-card-hover p-6 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
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
