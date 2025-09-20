import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMessageCircle } = FiIcons;

const FloatingWhatsApp = () => {
  const phoneNumber = "+51986783574"; // Replace with actual WhatsApp number
  const message = "Hola Cynthia, me interesa conocer más sobre tus servicios de UX Design.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
      title="Contactar por WhatsApp"
    >
      <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
      
      {/* Pulse animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
