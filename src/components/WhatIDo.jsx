import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTarget, FiZap, FiTrendingUp } = FiIcons;

const WhatIDo = () => {
  const services = [
    {
      icon: FiTarget,
      title: 'Webs que venden más',
      description: 'Detecto problemas en tu sitio web y los convierto en mejoras que aumentan las ventas y generan más clientes.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: FiZap,
      title: 'Proyectos rápidos',
      description: 'Páginas web en WordPress optimizadas y listas en días. Perfectas para campañas, lanzamientos y validación rápida.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: FiTrendingUp,
      title: 'Crecimiento medible',
      description: 'Auditorías web y proyectos de producto para resultados medibles en semanas, no meses.',
      gradient: 'from-purple-600 to-green-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lo que hago
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creo experiencias digitales que convierten visitantes en clientes, 
            con proyectos que generan resultados rápidos y medibles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;