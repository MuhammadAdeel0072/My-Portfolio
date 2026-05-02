import Section from './Section';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5" />,
      title: "Email",
      value: "madeelkhan072@gmail.com",
      link: "mailto:madeelkhan072@gmail.com"
    },
    {
      icon: <FaWhatsapp className="w-5 h-5 text-green-500" />,
      title: "WhatsApp",
      value: "0318 0552193",
      link: "https://wa.me/923180552193"
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      title: "Phone",
      value: "+92 318 0552193",
      link: "tel:+923180552193"
    },
    {
      icon: <FiGithub className="w-5 h-5" />,
      title: "GitHub",
      value: "MuhammadAdeel0072",
      link: "https://github.com/MuhammadAdeel0072"
    }
  ];

  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 px-4 sm:px-0">
        
        {/* Contact Info */}
        <div className="w-full lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-text mb-3 sm:mb-4">Let's Connect</h3>
            <p className="text-text-secondary mb-6 sm:mb-10 leading-relaxed text-sm sm:text-lg">
              Whether you have a question, want to collaborate on a project, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center p-5 bg-background-secondary rounded-xl border border-border hover:border-accent hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mr-5 group-hover:bg-accent group-hover:text-white transition-colors text-text-secondary">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary font-medium mb-1">{info.title}</p>
                    <p className="text-text font-semibold group-hover:text-accent transition-colors tracking-wide">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Contact Form */}
        <div className="w-full lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background-secondary border border-border rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm"
          >
            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs sm:text-sm font-semibold text-text-secondary tracking-wide">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-background border border-border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-sm sm:text-base text-text placeholder-text-secondary hover:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-text-secondary tracking-wide">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-background border border-border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-sm sm:text-base text-text placeholder-text-secondary hover:border-accent"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-text-secondary tracking-wide">Message</label>
                <textarea 
                  id="message" 
                  rows="6"
                  placeholder="Your message here..."
                  className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none text-text placeholder-text-secondary hover:border-accent"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent-hover shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-3 group"
              >
                <span>Send Message</span>
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
