import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const FloatingWhatsApp: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+966501234567'; // Replace with actual phone number
    const message = 'Hello! I would like to discuss a project with you.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 animate-bounce hover:animate-none group"
        aria-label="Contact via WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        
        {/* Tooltip */}
        <div className="absolute left-full ml-4 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Contact via WhatsApp
          <div className="absolute top-1/2 left-0 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"></div>
        </div>
      </button>
    </div>
  );
};