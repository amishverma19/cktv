'use client';

import React from 'react';
import ImageSwiper from './ImageSwiper';

// interface GalleryImage {
//   id: number;
//   src: string;
//   alt: string;
// }

// const galleryImages: GalleryImage[] = [
//   { id: 1, src: '/gallery/image1.jpg', alt: 'Gallery Image 1' },
//   { id: 2, src: '/gallery/image2.jpg', alt: 'Gallery Image 2' },
//   { id: 3, src: '/gallery/image3.jpg', alt: 'Gallery Image 3' },
//   { id: 4, src: '/gallery/image4.jpg', alt: 'Gallery Image 4' },
//   { id: 5, src: '/gallery/image5.jpg', alt: 'Gallery Image 5' },
//   { id: 6, src: '/gallery/image6.jpg', alt: 'Gallery Image 6' },
  // Add more images as needed
//];

const Gallery: React.FC = () => {
//   const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Gallery</h2>
      <ImageSwiper />

      {/* <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                layout="fill"
                objectFit="contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-xl"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default Gallery;
