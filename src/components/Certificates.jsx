import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiX, FiAward, FiFileText, FiBook } from 'react-icons/fi';
import { SiCisco } from 'react-icons/si'; // I'll use icons to represent brands
import Section from './Section';

// Import PDF certificates
import iotPdf from '../assets/certificates/IOT Certifcate.pdf';
import cppEssPdf from '../assets/certificates/C++ Essential 2.pdf';
import cppAdvPdf from '../assets/certificates/C++ Advance.pdf';
import itEssPdf from '../assets/certificates/IT Essential.pdf';
import stakeholdersPdf from '../assets/certificates/Engagging StakeHolders.pdf';
import entrepreneurshipPdf from '../assets/certificates/Enterpreneurships.pdf';
import sqlPdf from '../assets/certificates/DB.Certificate.pdf';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const certificates = [
    {
      id: 1,
      title: "Introduction to IoT",
      issuer: "Cisco Networking Academy",
      category: "Programming",
      file: iotPdf,
      brand: "Cisco",
      color: "from-cyan-500 to-blue-600",
      description: "Foundation in Internet of Things concepts and technologies."
    },
    {
      id: 2,
      title: "C++ Essential 2 (OOP)",
      issuer: "Cisco Networking Academy",
      category: "Programming",
      file: cppEssPdf,
      brand: "Cisco",
      color: "from-blue-600 to-indigo-700",
      description: "Advanced Object-Oriented Programming principles in C++."
    },
    {
      id: 3,
      title: "C++ Advanced (Data Structures)",
      issuer: "Cisco Networking Academy",
      category: "Programming",
      file: cppAdvPdf,
      brand: "Cisco",
      color: "from-indigo-600 to-purple-700",
      description: "Implementation of complex data structures and algorithms."
    },
    {
      id: 4,
      title: "IT Essentials",
      issuer: "Cisco Networking Academy",
      category: "Programming",
      file: itEssPdf,
      brand: "Cisco",
      color: "from-teal-500 to-emerald-600",
      description: "Fundamental computer hardware and software skills."
    },
    {
      id: 5,
      title: "SQL and Relational Databases",
      issuer: "CognitiveClass.ai",
      category: "Databases",
      file: sqlPdf,
      brand: "IBM / CognitiveClass",
      color: "from-blue-700 to-blue-900",
      description: "Database management, SQL queries, and relational data modeling."
    },
    {
      id: 6,
      title: "Engaging Stakeholders",
      issuer: "Business Professional",
      category: "Business",
      file: stakeholdersPdf,
      brand: "Business",
      color: "from-amber-500 to-orange-600",
      description: "Professional communication and stakeholder management."
    },
    {
      id: 7,
      title: "Discovering Entrepreneurship",
      issuer: "Business Professional",
      category: "Business",
      file: entrepreneurshipPdf,
      brand: "Business",
      color: "from-orange-500 to-red-600",
      description: "Fundamentals of business innovation and startup growth."
    }
  ];

  const filters = ['All', 'Programming', 'Databases', 'Business'];

  const filteredCerts = activeFilter === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeFilter);

  return (
    <Section id="certificates" title="Certificates & Achievements" subtitle="Validated learning and professional development through globally recognized institutions.">
      
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-accent text-white shadow-lg'
                : 'bg-background-secondary text-text-secondary hover:text-accent border border-border'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode='wait'>
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setSelectedCert(cert)}
              className="flex flex-col bg-background-secondary rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer group"
            >
              {/* Preview Area (Icon Based for PDFs) */}
              <div className={`relative h-44 w-full bg-gradient-to-br ${cert.color} flex flex-col items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                
                {/* Brand Indicator */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/20 backdrop-blur-md rounded-full border border-white/20">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">{cert.brand}</span>
                </div>

                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  {cert.brand === 'Cisco' ? (
                    <SiCisco className="text-white w-16 h-16" />
                  ) : cert.category === 'Databases' ? (
                    <FiBook className="text-white w-16 h-16" />
                  ) : (
                    <FiFileText className="text-white w-16 h-16" />
                  )}
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white text-accent px-4 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <FiExternalLink /> View PDF
                  </div>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-text group-hover:text-accent transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <FiAward className="text-accent w-5 h-5 flex-shrink-0 mt-1" />
                </div>
                
                <p className="text-accent text-xs font-bold tracking-widest uppercase mb-3 opacity-80">
                  {cert.issuer}
                </p>
                
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full h-[90vh] bg-background-secondary rounded-2xl overflow-hidden shadow-2xl border border-border flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-border flex items-center justify-between bg-background-secondary">
                <div>
                  <h3 className="text-xl font-bold text-text leading-none">{selectedCert.title}</h3>
                  <p className="text-accent text-sm mt-1">{selectedCert.issuer}</p>
                </div>
                <div className="flex items-center gap-3">
                  <a 
                    href={selectedCert.file} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-text-secondary hover:text-accent transition-colors"
                    title="Open in new tab"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 bg-background border border-border text-text hover:text-accent rounded-full transition-all"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              {/* PDF Content */}
              <div className="flex-grow bg-slate-100 dark:bg-slate-900 overflow-hidden relative">
                <iframe 
                  src={`${selectedCert.file}#toolbar=0&navpanes=0`} 
                  className="w-full h-full border-none"
                  title={selectedCert.title}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Certificates;
