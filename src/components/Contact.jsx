import Section from './Section';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiPhone, FiMessageCircle, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5" />,
      title: "Email",
      value: "madeelkhan072@gmail.com",
      link: "mailto:madeelkhan072@gmail.com"
    },
    {
      icon: <FiMessageCircle className="w-5 h-5" />,
      title: "WhatsApp",
      value: "+92 318 0552193",
      link: "https://wa.me/923180552193"
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      title: "Phone",
      value: "+92 318 0552193",
      link: "tel:+923180552193"
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      title: "LinkedIn",
      value: "Muhammad Adeel",
      link: "https://linkedin.com/in/muhammad-adeel"
    },
    {
      icon: <FiGithub className="w-5 h-5" />,
      title: "GitHub",
      value: "MuhammadAdeel0072",
      link: "https://github.com/MuhammadAdeel0072"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormState({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <Section id="contact" title="Let's Connect">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-accent-secondary/[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column: Info */}
          <div className="w-full lg:w-2/5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl font-display font-bold text-text mb-6 leading-tight"
              >
                Let's <span className="text-gradient">Connect</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-text-secondary text-base sm:text-lg leading-relaxed mb-10"
              >
                Have a project in mind? Whether you have a question, want to collaborate on a project, or just want to say hi — I will try my best to get back to you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-3"
              >
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-background-tertiary/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-text-secondary group-hover:text-accent group-hover:scale-110 transition-all flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-text-muted font-medium mb-0.5">
                        {info.title}
                      </p>
                      <p className="text-text font-medium text-sm truncate group-hover:text-accent transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 sm:p-8 md:p-10"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                    <FiCheck className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text mb-2">
                    Message sent successfully
                  </h3>
                  <p className="text-text-secondary max-w-sm">
                    Thanks for reaching out. I will get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-text-secondary">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-text-secondary">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-text-secondary">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="input-field resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full sm:w-auto px-10 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/25 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <FiSend className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
