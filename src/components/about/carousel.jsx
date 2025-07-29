import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import { images } from '../../assets/assets'; // update this path as needed

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carousel.css';

export default function App() {
  return (
    <div className="w-full px-4">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper text-gray-900 dark:bg-[#21292c]"
      >
        {[
          images.image9,
          images.image2,
          images.image3,
          images.image4,
          images.image5,
          images.image6,
          images.image8,
          images.image7,
          images.image1,
        ].map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={img}
              alt={`Ama's photo ${index + 1}`}
              className="rounded-xl border-8 border-fuchsia-300 dark:border-fuchsia-200 object-cover h-64 w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
