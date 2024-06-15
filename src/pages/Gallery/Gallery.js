import React, { useState } from "react";
import Modal from "react-modal";
import "./Gallery.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri"; // Changed to RiCloseLine for close icon

const images = [
  { src: "/image/Belt1.jpeg", caption: "" },
  { src: "/image/Belt2.jpeg", caption: "" },
  { src: "/image/Belt3.jpeg", caption: "" },
  { src: "/image/Belt4.jpeg", caption: "" }, // Adjusted captions for example
  { src: "/image/Belt5.jpeg", caption: "" },
  { src: "/image/Belt6.jpeg", caption: "" },
  { src: "/image/Belt7.jpeg", caption: "" },
  { src: "/image/Belt8.jpeg", caption: "" },
  { src: "/image/Belt8.jpeg", caption: "" },
  { src: "/image/COBUS1.jpeg", caption: "" },
  { src: "/image/COBUS2.jpeg", caption: "" },
  { src: "/image/COBUS3.jpeg", caption: "" },
  { src: "/image/pax1.jpeg", caption: "" },
  { src: "/image/pax2.jpeg", caption: "" },
  { src: "/image/pax3.jpeg", caption: "" },
  { src: "/image/pax4.jpeg", caption: "" },
  { src: "/image/pax5.jpeg", caption: "" },
  { src: "/image/pax6.jpeg", caption: "" },
  { src: "/image/tmx1.jpeg", caption: "" },
  { src: "/image/tmx2.jpeg", caption: "" },
  { src: "/image/tmx3.jpeg", caption: "" },
  { src: "/image/tmx4.jpeg", caption: "" },
  { src: "/image/tmx5.jpeg", caption: "" },
  { src: "/image/towbar1.jpeg", caption: "" },
  { src: "/image/towbar2.jpeg", caption: "" },
  { src: "/image/towbar3.jpeg", caption: "" },
  { src: "/image/towbar4.jpeg", caption: "" },
  { src: "/image/potablewatertruck1.jpeg", caption: "" },
  { src: "/image/potablewatertruck2.jpeg", caption: "" },
  { src: "/image/potablewatertruck3.jpeg", caption: "" },
  { src: "/image/potablewatertruck4.jpeg", caption: "" },
];

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalIsOpen(false);
  };

  const showNextImage = () => {
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setSelectedImageIndex(
      (selectedImageIndex - 1 + images.length) % images.length
    );
  };

  const selectedImage = images[selectedImageIndex];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div
          key={index}
          className="gallery-item"
          onClick={() => openModal(index)}
        >
          <img src={image.src} alt={`Gallery image ${index + 1}`} />
          <div className="caption">{image.caption}</div>
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedImage && (
          <div className="modal-content">
            <img src={selectedImage.src} alt="Selected" />
            <div className="modal-caption">{selectedImage.caption}</div>
            <button className="modal-close" onClick={closeModal}>
              <RiCloseLine />
            </button>
            <button className="modal-prev" onClick={showPrevImage}>
              <IoIosArrowDropleftCircle />
            </button>
            <button className="modal-next" onClick={showNextImage}>
              <FaArrowCircleRight />
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;
