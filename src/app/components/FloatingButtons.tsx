'use client';

import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaHandPointRight } from 'react-icons/fa';

const FloatingButtons: React.FC = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const phoneNumber = "+919065573678"; // Replace with your actual phone number
  const whatsappNumber = "9065573678"; // Replace with your actual WhatsApp number

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      <div className="mb-2 flex items-center">
        <div className="animate-pulse mr-2 text-sm font-bold text-blue-600 flex items-center bg-yellow-200 p-2 rounded-lg shadow-md">
          <span className="text-red-600">प्रचार के लिए संपर्क करें</span>
          <FaHandPointRight className="ml-1 text-blue-600" />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
          onClick={() => setShowPhoneNumber(!showPhoneNumber)}
        >
          <FaPhone />
        </button>
        {showPhoneNumber && (
          <div className="absolute right-14 bg-white p-2 rounded shadow">
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </div>
        )}
      </div>
      <div className="flex items-center">
        <div className="animate-pulse mr-2 text-sm font-bold text-green-600 flex items-center bg-yellow-200 p-2 rounded-lg shadow-md">
          <span className="text-red-600">प्रचार के लिए संपर्क करें</span>
          <FaHandPointRight className="ml-1 text-green-600" />
        </div>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default FloatingButtons;
