import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/tusharsinghrawat",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/tushar-singh-rawat-5980a8325/",
    label: "LinkedIn",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // ✅ FIXED: Show backend validation / spam errors
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json(); // ✅ read backend message

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus(data.message); // ✅ success msg from backend
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(error.message); // ✅ exact error shown
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
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
              Get In Touch
            </span>

            <h2 className="section-title">
              Let's Work <span className="gradient-text">Together</span>
            </h2>

            <p className="section-subtitle mx-auto">
              Have a project in mind? I'd love to hear about it. Drop me a
              message and let's create something amazing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:tusharsinghrawat45@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      tusharsinghrawat45@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Udaipur, Rajasthan, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form
                onSubmit={handleSubmit}
                className="glass-card p-8 space-y-6"
              >
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border"
                />

                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border"
                />

                <textarea
                  rows={5}
                  required
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {status && (
                  <p className="text-center text-sm text-muted-foreground">
                    {status}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
