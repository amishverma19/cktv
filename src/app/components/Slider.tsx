'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image1 from '../assets/images/cktvsvg1.svg';
import Image2 from '../assets/images/cktvsvg2.svg';
import Image3 from '../assets/images/cktvsvg3.svg';
import Image4 from '../assets/images/cktvsvg4.svg';
interface SlideData {
  id: number;
  image: string;
  title: string;
}

const slides: SlideData[] = [
  { id: 1, image: `${Image1.src}`, title: 'Slide 1' },
  { id: 2, image: `${Image2.src}`, title: 'Slide 2' },
  { id: 3, image: `${Image3.src}`, title: 'Slide 3' },
  { id: 4, image: `${Image4.src}`, title: 'Slide 4' },
];

const Slider: React.FC = () => {
  return (
    <div className="w-full">
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
        //   shadow: true,
          slideShadows: true,
          shadowOffset: 0,
          shadowScale: 0,
        }}
        pagination={{
          clickable: true,
        }}
        
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-64 md:h-[60vh]">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                priority
              />
            
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
