import React, { useState } from "react";
import { pathImage } from "../../data-image";
import "./Image.css";
import { Eye, CircleX } from "lucide-react";

// Sous-composant Modal
const Modal = ({ images, onClose }) => (
  <div className="modal">
    {images.map((image) => (
      <img key={image.id} src={image.path} alt="" />
    ))}
    <button onClick={onClose}>
      <CircleX size={16} strokeWidth={1.25} />
    </button>
  </div>
);

const Image = () => {
  const [modalImages, setModalImages] = useState([]); // État pour stocker les images à afficher dans le modal
  const [modalVisible, setModalVisible] = useState(false); // État pour contrôler la visibilité du modal

  const imagePairs = [];
  for (let i = 0; i < pathImage.length; i += 2) {
    imagePairs.push([pathImage[i], pathImage[i + 1]]);
  }

  // Gestionnaire d'événements pour ouvrir le modal avec les images de la carte
  const handleEyeClick = (images) => {
    setModalImages(images);
    setModalVisible(true);
  };

  // Gestionnaire d'événements pour fermer le modal
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="image">
      {imagePairs.map((pair, index) => (
        <div className="card" key={index}>
          <div className="hover">
            <Eye className="eye-icon" onClick={() => handleEyeClick(pair)} />
          </div>
          {pair.map((image) => (
            <img key={image.id} src={image.path} alt="" />
          ))}
        </div>
      ))}

      {modalVisible && <Modal images={modalImages} onClose={closeModal} />}
    </div>
  );
};

export default Image;
