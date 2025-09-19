import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiTrendingUp, FiZap, FiTarget } = FiIcons;

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <SafeIcon icon={FiZap} className="w-4 h-4" />
              <span>Disponible para proyectos</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Especialista en{' '}
              <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
                Productos Digitales
              </span>
            </h1>

            <h2 className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Ayudo a empresas a <span className="font-semibold text-purple-600">vender más online</span>. 
              Desde auditorías que aumentan conversión hasta productos digitales completos 
              que generan resultados en semanas.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
              >
                <span>Agenda una llamada gratuita</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#casos"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-purple-300 hover:text-purple-600 transition-all"
              >
                <span>Ver casos de éxito</span>
              </motion.a>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">$16M</div>
                <div className="text-sm text-gray-600">Exit Sirenna</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-1">+67%</div>
                <div className="text-sm text-gray-600">Más ventas online</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">5 días</div>
                <div className="text-sm text-gray-600">Diagnóstico rápido</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiTarget} className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Auditoría Web</h3>
                    <p className="text-gray-600">Diagnóstico en 5 días</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiZap} className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Producto Digital</h3>
                    <p className="text-gray-600">De idea a mercado</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Más Ventas</h3>
                    <p className="text-gray-600">Optimización continua</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-200 to-green-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-green-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;