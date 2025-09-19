import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiDollarSign, FiUsers, FiAward, FiTrendingUp, FiZap } = FiIcons;

const CaseStudies = () => {
  const cases = [
    {
      company: 'Sirenna',
      sector: 'Sales SaaS',
      problem: 'Necesitaba optimizar el producto para escalar y atraer inversores',
      action: 'Creé todos los flujos y pantallas desde el onboarding hasta la edición de resúmenes con IA',
      result: 'Exit exitoso de $16M',
      icon: FiDollarSign,
      color: 'purple'
    },
    {
      company: 'Yape',
      sector: 'Fintech',
      problem: 'La sección de promociones era un banner confuso que no se entendía',
      action: 'Rediseñé completamente la experiencia de promociones con navegación intuitiva y contenido claro',
      result: 'Mejora significativa en engagement y conversión',
      icon: FiTrendingUp,
      color: 'green'
    },
    {
      company: 'Otzibot',
      sector: 'AI Assistant',
      problem: 'Necesitaban crear desde cero un asistente conversacional con IA para agendar citas',
      action: 'Codesarrollé el bot completo desde 0, diseñando flujos conversacionales y la experiencia de agendamiento',
      result: '+67% en ventas online',
      icon: FiUsers,
      color: 'purple'
    },
    {
      company: 'GoNutro',
      sector: 'Health Tech',
      problem: 'Producto inicial que necesitaba validación y tracción',
      action: 'Diseño de producto completo desde MVP hasta escalabilidad',
      result: 'Ganador de Startup Perú',
      icon: FiAward,
      color: 'green'
    }
  ];

  return (
    <section id="casos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Casos de éxito
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados reales en proyectos de diferentes sectores, desde startups hasta empresas consolidadas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {caseStudy.company}
                  </h3>
                  <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                    caseStudy.color === 'purple' 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {caseStudy.sector}
                  </span>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  caseStudy.color === 'purple' ? 'bg-purple-100' : 'bg-green-100'
                }`}>
                  <SafeIcon 
                    icon={caseStudy.icon} 
                    className={`w-6 h-6 ${
                      caseStudy.color === 'purple' ? 'text-purple-600' : 'text-green-600'
                    }`} 
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Problema</h4>
                  <p className="text-gray-600">{caseStudy.problem}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Acción</h4>
                  <p className="text-gray-600">{caseStudy.action}</p>
                </div>
                
                <div className={`p-4 rounded-xl ${
                  caseStudy.color === 'purple' 
                    ? 'bg-purple-50 border border-purple-100' 
                    : 'bg-green-50 border border-green-100'
                }`}>
                  <h4 className="font-semibold text-gray-900 mb-2">Resultado</h4>
                  <p className={`font-bold text-lg ${
                    caseStudy.color === 'purple' ? 'text-purple-600' : 'text-green-600'
                  }`}>
                    {caseStudy.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#servicios"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
          >
            <span>Ver todos mis servicios</span>
            <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;