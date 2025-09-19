import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSearch, FiMonitor, FiZap, FiMessageCircle, FiCheck, FiArrowRight } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiSearch,
      title: 'Auditoría Web + Ventas',
      price: '$800',
      duration: '5 días',
      description: 'Diagnóstico completo de tu sitio web con plan de acción detallado para aumentar ventas.',
      features: [
        'Análisis completo de tu web',
        'Revisión de métricas y conversión',
        'Plan de mejoras priorizado',
        'Recomendaciones específicas',
        'Sesión de presentación incluida'
      ],
      color: 'purple'
    },
    {
      icon: FiMonitor,
      title: 'Página Web WordPress',
      price: 'Desde $600',
      duration: '3-5 días',
      description: 'Páginas web optimizadas, responsive y enfocadas en generar más ventas y clientes.',
      features: [
        'Diseño responsive y optimizado',
        'Integración con herramientas de análisis',
        'Optimización para velocidad',
        'SEO básico implementado',
        'Formularios de contacto funcionales'
      ],
      color: 'green'
    },
    {
      icon: FiZap,
      title: 'Proyecto Digital Completo',
      price: 'Personalizado',
      duration: '2-3 semanas',
      description: 'Proyectos intensivos para crear productos digitales o mejorar aplicaciones existentes.',
      features: [
        'Investigación y análisis de usuarios',
        'Diseño de flujos y wireframes',
        'Prototipos interactivos',
        'Testing y validación',
        'Entrega para desarrollo'
      ],
      color: 'purple'
    },
    {
      icon: FiMessageCircle,
      title: 'Consultoría Flexible',
      price: 'Por hora',
      duration: 'Flexible',
      description: 'Asesoría estratégica y táctica para resolver problemas específicos de tu negocio digital.',
      features: [
        'Sesiones de estrategia',
        'Revisión de sitios existentes',
        'Mentoring para equipos',
        'Validación de ideas',
        'Roadmap de producto'
      ],
      color: 'green'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proyectos diseñados para generar impacto rápido y resultados medibles en tu negocio digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-purple-200 hover:shadow-xl transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                  service.color === 'purple' ? 'bg-purple-100' : 'bg-green-100'
                } group-hover:scale-110 transition-transform`}>
                  <SafeIcon 
                    icon={service.icon} 
                    className={`w-8 h-8 ${
                      service.color === 'purple' ? 'text-purple-600' : 'text-green-600'
                    }`} 
                  />
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${
                    service.color === 'purple' ? 'text-purple-600' : 'text-green-600'
                  }`}>
                    {service.price}
                  </div>
                  <div className="text-sm text-gray-500">{service.duration}</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <SafeIcon 
                      icon={FiCheck} 
                      className={`w-5 h-5 mt-0.5 ${
                        service.color === 'purple' ? 'text-purple-600' : 'text-green-600'
                      }`} 
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-xl font-semibold transition-all ${
                  service.color === 'purple' 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                <span>Solicitar propuesta</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿No encuentras lo que necesitas?
            </h3>
            <p className="text-gray-600 mb-6">
              Cada proyecto es único. Hablemos para crear una propuesta personalizada que se adapte exactamente a tus necesidades.
            </p>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
            >
              <span>Agenda una llamada gratuita</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;