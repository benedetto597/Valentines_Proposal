'use client';

import { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ValentineData {
  title: string;
  subtitle: string;
  heading: string;
  message: string;
  footer: string;
  date: string;
  acceptanceMessage: string;
}

interface NewspaperPageProps {
  valentineData: ValentineData;
  images: string[];
}

export default function NewspaperPage({ valentineData, images }: NewspaperPageProps) {
  const [showResponse, setShowResponse] = useState(false);
  const [response, setResponse] = useState<'yes' | 'no' | null>(null);
  const [noClickCount, setNoClickCount] = useState(0);
  const [yesButtonScale, setYesButtonScale] = useState(1);
  const [noButtonScale, setNoButtonScale] = useState(1);

  const yesButtonMessages = [
    "Acepto 💖",
    "¡Acepta! Te va a encantar 🌹",
    "Vamos, di que sí 💕",
    "Sabes que quieres decir SÍ 😊",
    "¡Por favor! Será hermoso ✨",
    "Di que SÍ y serás feliz 🎀",
    "¡ACEPTA YA! 💝",
    "Último chance... ¡SÍ! 🌺",
  ];

  const handleYes = () => {
    setResponse('yes');
    setShowResponse(true);
  };

  const handleNo = () => {
    setNoClickCount(prev => {
      const newCount = prev + 1;
      // El botón "Acepto" crece un 20% cada vez
      setYesButtonScale(1 + (newCount * 0.2));
      // El botón "No" se reduce un 15% cada vez
      setNoButtonScale(Math.max(0.3, 1 - (newCount * 0.15)));
      return newCount;
    });
  };

  // Pantalla completa de aceptación
  if (showResponse && response === 'yes') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-purple-100 flex items-center justify-center p-4 overflow-hidden relative">
        {/* Partículas flotantes de corazones */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl md:text-4xl"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 100,
                opacity: 0 
              }}
              animate={{ 
                y: -100,
                opacity: [0, 1, 1, 0],
                rotate: 360
              }}
              transition={{
                duration: Math.random() * 3 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            >
              {['💖', '💕', '💗', '🌹', '✨'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100,
            damping: 15,
            duration: 0.8 
          }}
          className="relative z-10 text-center max-w-4xl w-full"
        >
          {/* Imagen de tulipanes */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-full max-w-2xl mx-auto mb-8 h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/snoopy/tulipanes.png"
              alt="Tulipanes"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                // Fallback si no se encuentra la imagen
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Overlay con el mensaje */}
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="text-center px-4"
              >
                <p className="text-white text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl"
                   style={{ 
                     fontFamily: "'Brush Script MT', cursive",
                     textShadow: '3px 3px 6px rgba(0,0,0,0.8), -1px -1px 2px rgba(255,255,255,0.3)'
                   }}>
                  {valentineData.acceptanceMessage}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Mensaje de celebración */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl md:text-8xl mb-6"
            >
              🎉💖✨
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 bg-clip-text text-transparent"
                style={{ fontFamily: 'Georgia, serif' }}>
              ¡Dijiste que SÍ!
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-xl md:text-3xl text-gray-800 mb-8 font-serif"
            >
              al primero de muchos 💕
            </motion.p>

          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-4 md:py-8 px-2 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white paper-shadow rounded-sm"
      >
        {/* Header del periódico */}
        <div className="border-b-4 border-black p-3 md:p-6">
          <div className="flex justify-between text-[8px] md:text-xs mb-2 font-sans">
            <span className="hidden md:inline">AMOR, PASIÓN, HOGAR</span>
            <span className="md:hidden">AMOR</span>
            <span className="font-bold text-[9px] md:text-xs">EDICIÓN ESPECIAL</span>
            <span className="hidden md:inline">{valentineData.date.toUpperCase()}</span>
          </div>
          
          <h1 className="newspaper-title text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-center my-2 md:my-4">
            THE LOVE TIMES
          </h1>
          
          <div className="decorative-line mb-2 md:mb-4"></div>
        </div>

        {/* Contenido principal */}
        <div className="p-4 md:p-8">
          {/* Título principal */}
          <div className="text-center mb-6 md:mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="flex items-center justify-center gap-2 md:gap-4 flex-wrap"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-2xl md:text-4xl"
              >
                ❤️
              </motion.span>
              
              <h2 className="newspaper-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl inline-block">
                {valentineData.title}
              </h2>
              
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
                className="text-2xl md:text-4xl"
              >
                ❤️
              </motion.span>
            </motion.div>
            
            <p className="newspaper-subtitle text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2">
              {valentineData.subtitle}
            </p>
          </div>

          {/* Grid de contenido */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
            {/* Carrusel izquierdo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="h-64 sm:h-80 md:h-96 border-2 md:border-4 border-gray-300"
            >
              <ImageCarousel images={images} />
            </motion.div>

            {/* Texto derecho */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="newspaper-body text-xs sm:text-sm leading-relaxed"
            >
              {valentineData.message.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-3 md:mb-4 first-letter:text-2xl md:first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>

          {/* Botones de respuesta */}
          {!showResponse && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="text-center mb-6 md:mb-8"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-serif mb-4 md:mb-6 px-2">
                ¿Cual es tu respuesta bebé? 💕
              </p>
              <div className="flex gap-3 md:gap-4 justify-center items-center flex-wrap px-2">
                <motion.button
                  animate={{ scale: yesButtonScale }}
                  whileHover={{ scale: yesButtonScale * 1.05 }}
                  whileTap={{ scale: yesButtonScale * 0.95 }}
                  onClick={handleYes}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-full text-base sm:text-lg md:text-xl shadow-lg transition-all"
                  style={{ minWidth: '140px' }}
                >
                  {yesButtonMessages[Math.min(noClickCount, yesButtonMessages.length - 1)]}
                </motion.button>
                <motion.button
                  animate={{ scale: noButtonScale }}
                  whileHover={{ scale: noButtonScale * 1.05 }}
                  whileTap={{ scale: noButtonScale * 0.95 }}
                  onClick={handleNo}
                  className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-full text-base sm:text-lg md:text-xl shadow-lg transition-all"
                  style={{ 
                    minWidth: '100px',
                    opacity: Math.max(0.5, noButtonScale)
                  }}
                >
                  No 💔
                </motion.button>
              </div>
              {noClickCount > 0 && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm md:text-base text-gray-600 mt-4 italic"
                >
                  {noClickCount === 1 && "¿Estás segura? 🥺"}
                  {noClickCount === 2 && "Vamos, sé que quieres decir que sí... 💕"}
                  {noClickCount === 3 && "Por favor, di que sí 🙏"}
                  {noClickCount >= 4 && "¡Mi corazón late solo por ti! 💖"}
                </motion.p>
              )}
            </motion.div>
          )}

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center border-t-2 border-black pt-4 md:pt-6"
          >
            <p className="newspaper-title text-lg sm:text-xl md:text-2xl">
              {valentineData.footer}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
