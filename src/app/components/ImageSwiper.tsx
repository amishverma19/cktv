'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  } from 'swiper/modules';
import Image1 from '../assets/images/gallery1.svg';
import Image2 from '../assets/images/gallery2.svg';
import Image3 from '../assets/images/gallery3.svg';
import Image4 from '../assets/images/gallery4.svg';
import Image5 from '../assets/images/gallery5.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { id: 1, src: `${Image1.src}`, alt: 'Image 1' },
  { id: 2, src: `${Image2.src}`, alt: 'Image 2' },
  { id: 3, src: `${Image3.src}`, alt: 'Image 3' },
  { id: 4, src: `${Image4.src}`, alt: 'Image 4' },
  { id: 5, src: `${Image5.src}`, alt: 'Image 5' },
];

const ImageSwiper: React.FC = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, ]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative w-full aspect-square">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
