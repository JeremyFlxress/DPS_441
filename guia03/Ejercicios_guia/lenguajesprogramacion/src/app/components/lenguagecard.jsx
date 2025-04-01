"use client"
import React, { useState } from 'react';
import Modal from './Modal';
import styles from './styles.css';

const LanguageCard = ({ language }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.card} onClick={() => setIsModalOpen(true)}>
        <img src={language.image} alt={language.name} className={styles.cardImage} />
        <h3>{language.name}</h3>
        <button className={styles.cardButton}>Ver detalles</button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={styles.modalBody}>
          <h2>{language.name}</h2>
          <img src={language.image} alt={language.name} className={styles.modalImage} />
          <p><strong>Descripción:</strong> {language.description}</p>
          <p><strong>Año de creación:</strong> {language.year}</p>
          <p><strong>Creador:</strong> {language.creator}</p>
          <p><strong>Paradigma:</strong> {language.paradigm}</p>
          <div>
            <strong>Frameworks populares:</strong>
            <ul>
              {language.popularFrameworks.map((framework, index) => (
                <li key={index}>{framework}</li>
              ))}
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LanguageCard;
