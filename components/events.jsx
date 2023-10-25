"use client"
import React, { useState, useEffect } from 'react';
import { storage } from './Firebase';
import { listAll,ref,getDownloadURL } from 'firebase/storage';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Event() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const storageRef = ref(storage);
  const imagesRef = ref(storageRef, 'images');        //replace with path 'event' after creating one
  
  useEffect(() => {
    listAll(imagesRef)
      .then(res => {
        const imagePromises = res.items.map(item => getDownloadURL(item));
        Promise.all(imagePromises)
          .then(urls => {
            setImages(urls);
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);




  return (

    <Swiper
    cssMode={true}
slidesPerView={2}  
    navigation={true}
    pagination={true}
    mousewheel={true}
    keyboard={true}
    autoplay={true}
    loop={true}
    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    className="mySwiper"
style={{
    maxWidth: '70vw',
    maxHeight: '65vh',
    paddingTop:'10vh',
    paddingLeft:'3vh',
  }}

  >
        {images.map(url => (
          <SwiperSlide>
            <img src={url} style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain', 
            }} alt="uploaded" className="hhov p-2" />
          </SwiperSlide>
        ))}
      </Swiper>

  );
};