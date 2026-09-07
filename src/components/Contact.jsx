'use client';

import Section from './Section';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheck,
  FiExternalLink,
} from 'react-icons/fi';
import { fadeUp, staggerContainer, VIEWPORT, EASE } from '../lib/motion';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateField = (name, value) => {
    if (!value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
    if (name === 'email' && !validateEmail(value)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newErrors = {
      name: validateField('name', formState.name),
      email: validateField('email', formState.email),
      message: validateField('message', formState.message),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
      setErrors({});
      setTouched({});
    }, 4000);
  };

  // Original contact details — untouched
  const contactInfo = [
    {
      icon: <FiMail className="h-5 w-5" />,
      title: 'Email',
      value: 'madeelkhan072@gmail.com',
      link: 'mailto:madeelkhan072@gmail.com',
    },
    {
      icon: <FiMessageCircle className="h-5 w-5" />,
      title: 'WhatsApp',
      value: '+92 318 0552193',
      link: 'https://wa.me/923180552193',
    },
    {
      icon: <FiPhone className="h-5 w-5" />,
      title: 'Phone',
      value: '+92 318 0552193',
      link: 'tel:+923180552193',
    },
    {
      icon: <FiLinkedin className="h-5 w-5" />,
      title: 'LinkedIn',
      value: 'Muhammad Adeel',
      link: 'https://linkedin.com/in/muhammad-adeel',
    },
    {
      icon: <FiGithub className="h-5 w-5" />,
      title: 'GitHub',
      value: 'MuhammadAdeel0072',
      link: 'https://github.com/MuhammadAdeel0072',
    },
  ];

  const fieldError = field => touched[field] && errors[field];

  return (
    <Section id="contact" title="Contact">
      {/* Soft accent wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-accent-secondary/[0.04]"
      />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        {/* ===== Left: channels ===== */}
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.h2
            variants={fadeUp(0, 20)}
            className="mb-5 font-display text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl"
          >
            Let&apos;s <span className="text-gradient">Connect</span>
          </motion.h2>

          <motion.p
            variants={fadeUp(0.08)}
            className="mb-9 text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            Have a project in mind? Whether you have a question, want to collaborate on a project,
            or just want to say hi — I will try my best to get back to you.
          </motion.p>

          <motion.ul variants={fadeUp(0.16)} aria-label="Contact channels" className="space-y-2">
            {contactInfo.map((info, index) => (
              <li key={info.title}>
                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex min-h-[3.25rem] items-center gap-4 rounded-xl p-3 transition-colors duration-300 hover:bg-background-tertiary/60"
                >
                  <span className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-text-secondary transition-all duration-300 group-hover:scale-105 group-hover:text-accent">
                    {info.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="mb-0.5 block text-xs font-medium text-text-muted">
                      {info.title}
                    </span>
                    <span className="block truncate text-sm font-medium text-text transition-colors duration-300 group-hover:text-accent">
                      {info.value}
                    </span>
                  </span>
                  {/* External affordance for web links */}
                  {info.link.startsWith('http') && (
                    <FiExternalLink
                      aria-hidden="true"
                      className="h-3.5 w-3.5 shrink-0 text-text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                    />
                  )}
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ===== Right: form ===== */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="glass-card rounded-2xl p-6 sm:p-8 md:p-9"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex flex-col items-center justify-center py-14 text-center"
              role="status"
            >
              <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                <FiCheck className="h-8 w-8 text-success" aria-hidden="true" />
              </span>
              <h3 className="mb-2 font-display text-2xl font-bold text-text">
                Message sent successfully
              </h3>
              <p className="max-w-sm text-text-secondary">
                Thanks for reaching out. I will get back to you as soon as possible.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate={false} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary">
                    Name <span className="text-danger" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-invalid={fieldError('name') ? 'true' : undefined}
                    aria-describedby={fieldError('name') ? 'name-error' : undefined}
                    className={`input-field ${fieldError('name') ? 'border-danger focus:border-danger focus:shadow-none' : ''}`}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {fieldError('name') && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      id="name-error"
                      role="alert"
                      className="text-xs text-danger"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary">
                    Email <span className="text-danger" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-invalid={fieldError('email') ? 'true' : undefined}
                    aria-describedby={fieldError('email') ? 'email-error' : undefined}
                    className={`input-field ${fieldError('email') ? 'border-danger focus:border-danger focus:shadow-none' : ''}`}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                  {fieldError('email') && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      id="email-error"
                      role="alert"
                      className="text-xs text-danger"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary">
                  Message <span className="text-danger" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-invalid={fieldError('message') ? 'true' : undefined}
                  aria-describedby={fieldError('message') ? 'message-error' : undefined}
                  className={`input-field resize-none ${fieldError('message') ? 'border-danger focus:border-danger focus:shadow-none' : ''}`}
                  placeholder="Tell me about your project..."
                />
                {fieldError('message') && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    id="message-error"
                    role="alert"
                    className="text-xs text-danger"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="group inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-xl bg-accent px-10 py-3.5 font-semibold text-[#04211c] shadow-lg shadow-accent/20 transition-colors duration-300 hover:bg-accent-hover hover:shadow-accent/30 sm:w-auto"
              >
                Send Message
                <FiSend
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
