'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Image1 from '../assets/images/gallery1.svg';
import Image2 from '../assets/images/gallery2.svg';
import Image3 from '../assets/images/gallery3.svg';
import Image4 from '../assets/images/gallery4.svg';
import Image5 from '../assets/images/gallery5.svg';

// Sample image data (replace with your actual image data)
const images = [
  { id: 1, src: `${Image1.src}`, alt: 'Gallery Image 1' },
  { id: 2, src: `${Image2.src}`, alt: 'Gallery Image 2' },
  { id: 3, src: `${Image3.src}`, alt: 'Gallery Image 3' },
  { id: 4, src: `${Image4.src}`, alt: 'Gallery Image 4' },
  { id: 5, src: `${Image5.src}`, alt: 'Gallery Image 5' },
  // Add more images as needed
];

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] mb-16 overflow-hidden rounded-xl shadow-2xl"
      >
        <Image
          src={`${Image1.src}`}
          alt="Gallery Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-accent/70 z-10" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-center"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-center max-w-2xl"
          >
            Explore our collection of stunning moments captured in time
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent z-10"
        />
      </motion.section>

      <h2 className="text-4xl font-bold text-center mb-12 text-primary">Image Collection</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <motion.div
            key={image.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(image.id)}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              layout="responsive"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            className="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto"
          >
            <Image
              src={images.find(img => img.id === selectedImage)?.src || ''}
              alt={images.find(img => img.id === selectedImage)?.alt || ''}
              width={800}
              height={600}
              layout="responsive"
              objectFit="contain"
            />
            <button
              className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-accent transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default GalleryPage;
