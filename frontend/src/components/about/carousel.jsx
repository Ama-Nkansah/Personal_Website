import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Autoplay } from 'swiper/modules';
import { images } from '../../assets/assets'; 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

export default function Carousel() {
  const photos = [
    images.image9, images.image2, images.image3, 
    images.image4, images.image5, images.image6, 
    images.image8, images.image7, images.image1
  ];

  return (
    <div className="flex items-center justify-center w-full py-10 overflow-visible">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Navigation, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        className="w-[280px] h-[350px] md:w-[320px] md:h-[420px]"
      >
        {photos.map((img, index) => (
          <SwiperSlide key={index} className="rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800">
            <div className="relative w-full h-full">
              <img
                src={img}
                alt={`Journey moment ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Optional Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}