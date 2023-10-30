"use client"
import React, { useEffect, useState } from "react";
import "firebase/compat/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import "./gallery.css";
import { app } from "./Firebase";

const storage = getStorage(app);
const storageRef = ref(storage);
const imagesRef = ref(storageRef, "gallery");

const HomeGallery = () => {
  const [images, setImages] = useState([]);

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
    <>
      <div className="masonry-container min-h-screen bg-gradient-to-r from-purple-300 to-purple-300">
        {images.map((url) => (
          <div key={url} className="masonry-item">
            <img src={url} alt="uploaded" className="hhov mx-auto d-block" />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeGallery;
