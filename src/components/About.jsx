import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiClock, FiAward, FiTrendingUp } = FiIcons;

const About = () => {
  const sectors = [
    'Fintech',
    'Healthcare',
    'SaaS',
    'E-commerce',
    'Health Tech',
    'EdTech'
  ];

  const skills = [
    'Investigación de usuarios',
    'Prototipos',
    'WordPress',
    'Optimización de ventas',
    'Estrategia de producto',
    'Mejora de conversión'
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sobre mí
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Soy <strong>especialista en productos digitales</strong> con experiencia internacional, 
                enfocada en crear experiencias que generan resultados medibles y más ventas.
              </p>
              
              <p>
                Mi enfoque está en <strong>proyectos de impacto rápido</strong>: 
                auditorías que revelan oportunidades inmediatas, rediseños que mejoran ventas, 
                y páginas web que convierten desde el primer día.
              </p>
              
              <p>
                He trabajado en proyectos que van desde startups en etapa temprana hasta empresas consolidadas, 
                siempre con el mismo objetivo: <strong>resultados rápidos y medibles</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">Lima, Perú</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiClock} className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Disponible ahora</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiAward} className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">5+ años experiencia</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Enfoque en resultados</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <img
                  src="https://gonutro.com/wp-content/uploads/2025/09/O2.png"
                  alt="Cynthia - Especialista en Productos Digitales"
                  className="w-80 h-auto object-cover shadow-2xl rounded-2xl"
                />
              </motion.div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-200 to-green-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-green-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
          </motion.div>
        </div>

        {/* Sectors and Skills */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Sectores en los que trabajo
            </h3>
            <div className="flex flex-wrap gap-3">
              {sectors.map((sector, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                >
                  {sector}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Especialidades
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
