import React, { useState } from "react";
import "./Dubai2023.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";

const Singapore2024 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const images = [
    "/image/Singapore7.jpeg",
    "/image/Singapore2.jpeg",
    "/image/Singapore3.jpeg",
    "/image/Singapore9.jpeg",
    "/image/Singapore10.jpeg",
    "/image/Singapore8.jpeg",
  ];

  const openModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prevImage = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="product-page" style={{ background: "rgb(245,245,247" }}>
      <header className="product-header">
        <h1 className="productHeader">
          Singapore Airshow Expo/Exhibition 2024
        </h1>
      </header>

      <section className="product-details">
        <div className="product-content">
          <div className="image-slider">
            <div className="image-row">
              {images.slice(0, 3).map((image, index) => (
                <div key={index} onClick={() => openModal(index)}>
                  <img
                    src={image}
                    alt={`TPX-200-MTX ${index}`}
                    className="product-image"
                  />
                </div>
              ))}
            </div>
            <div className="image-row">
              {images.slice(3).map((image, index) => (
                <div key={index + 3} onClick={() => openModal(index + 3)}>
                  <img
                    src={image}
                    alt={`TPX-200-MTX ${index + 3}`}
                    className="product-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              <RiCloseLine />
            </span>
            <button className="prev" onClick={prevImage}>
              <IoIosArrowDropleftCircle />
            </button>
            <img
              src={images[modalImageIndex]}
              alt="Modal"
              className="modal-image"
            />
            <button className="next" onClick={nextImage}>
              <FaArrowCircleRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Singapore2024;
