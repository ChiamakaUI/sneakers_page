import React, { useState } from "react";
import "./style.css";
import firstImage from "./Images/image-product-1.jpg";
import secondImage from "./Images/image-product-2.jpg";
import thirdImage from "./Images/image-product-3.jpg";
import fourthImage from "./Images/image-product-4.jpg";
import firstThumb from "./Images/image-product-1-thumbnail.jpg";
import secondThumb from "./Images/image-product-2-thumbnail.jpg";
import thirdThumb from "./Images/image-product-3-thumbnail.jpg";
import fourthThumb from "./Images/image-product-4-thumbnail.jpg";
import prevBtn from "./Images/icon-previous.svg";
import nextBtn from "./Images/icon-next.svg";
import closeBtn from "./Images/icon-close.svg"

const ProductImages = () => {
  const [image, setImage] = useState(firstImage);
  const [modal, setModal] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0)

  const changeImage = (image) => {
    setImage(image);
  };

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  }
    const showPrevSlide = () => {
        if (slideIndex === 0) return;
        setSlideIndex(slideIndex - 1);
    }
    const showNextSlide = () => {
        if (slideIndex === 3) return;
         setSlideIndex(slideIndex + 1);
    };
    const changeModalImage = (index) => {
        setSlideIndex(index)
    }

  return (
    <div className="productImages">
      <img src={image} alt="Images" onClick={openModal} />
      <div className={modal === false ? "hidden" : "imageModal show"}>
        <div className="closeWrapper">
          <img
            src={closeBtn}
            alt="closeButton"
            className="closeBtn"
            onClick={closeModal}
          />
        </div>
        <div className="productImage">
          <img
            id="prevBtn"
            src={prevBtn}
            alt="previous"
            className="navBtn"
            onClick={showPrevSlide}
          />
          <img
            src={firstImage}
            alt="firstImage"
            className={slideIndex === 0 ? "show" : "hidden"}
          />

          <img
            src={secondImage}
            alt="secondImage"
            className={slideIndex === 1 ? "show" : "hidden"}
          />

          <img
            src={thirdImage}
            alt="thirdImage"
            className={slideIndex === 2 ? "show" : "hidden"}
          />

          <img
            src={fourthImage}
            alt="fourthImage"
            className={slideIndex === 3 ? "show" : "hidden"}
          />
          <img
            id="nextBtn"
            src={nextBtn}
            alt="next"
            className="navBtn"
            onClick={showNextSlide}
          />
        </div>
        <div className="modalThumbnail">
          <img
            src={firstThumb}
            alt="firstThumbnail"
            onClick={() => {
              changeModalImage(0);
            }}
            className={slideIndex === 0 ? "active" : "modalThumbnail"}
          />
          <img
            src={secondThumb}
            alt="secondThumbnail"
            onClick={() => {
              changeModalImage(1);
            }}
            className={slideIndex === 1 ? "active" : "modalThumbnail"}
          />
          <img
            src={thirdThumb}
            alt="thirdThumbnail"
            onClick={() => {
              changeModalImage(2);
            }}
            className={slideIndex === 2 ? "active" : "modalThumbnail"}
          />
          <img
            src={fourthThumb}
            alt="fourthThumbnail"
            onClick={() => {
              changeModalImage(3);
            }}
            className={slideIndex === 3 ? "active" : "modalThumbnail"}
          />
        </div>
      </div>

      <div className="thumbnails">
        <img
          src={firstThumb}
          alt="firstThumbnail"
          onClick={() => {
            changeImage(firstImage);
          }}
          className={image === firstImage ? "active" : "thumbnails"}
        />
        <img
          src={secondThumb}
          alt="secondThumbnail"
          onClick={() => {
            changeImage(secondImage);
          }}
          className={image === secondImage ? "active" : "thumbnails"}
        />
        <img
          src={thirdThumb}
          alt="thirdThumbnail"
          onClick={() => {
            changeImage(thirdImage);
          }}
          className={image === thirdImage ? "active" : "thumbnails"}
        />
        <img
          src={fourthThumb}
          alt="fourthThumbnail"
          onClick={() => {
            changeImage(fourthImage);
            
          }}
          className={image === fourthImage ? "active" : "thumbnails"}
        />
      </div>
    </div>
  );
};

export default ProductImages;
