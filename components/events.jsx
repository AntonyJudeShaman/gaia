"use client"
import React, { useState, useEffect } from 'react';
import { storage } from './Firebase';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'; // Import Autoplay module

export default function Event() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 2;
  const storageRef = ref(storage);
  const imagesRef = ref(storageRef, 'events');

  useEffect(() => {
    listAll(imagesRef)
      .then((res) => {
        const imagePromises = res.items.map((item) => getDownloadURL(item));
        Promise.all(imagePromises)
          .then((urls) => {
            setImages(urls);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Swiper
      cssMode={true}
      slidesPerView={1}
      loop={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      autoplay={{ // Add the autoplay option
        delay: 4000, // Set the autoplay delay to 2 seconds (2000 milliseconds)
        disableOnInteraction: false, // Autoplay won't be disabled on user interaction
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]} // Include Autoplay module
      className="mySwiper"
      style={{
        maxWidth: '70vw',
        maxHeight: '140vh',
        padding:'5%',
        backgroundColor: 'white',
      }}
    >
      {images.map((url, index) => (
        <SwiperSlide key={index}>
          <img
            src={url}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
            alt="uploaded"
            className=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
