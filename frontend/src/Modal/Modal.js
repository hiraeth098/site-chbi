// Arquivo: src/components/Modal/Modal.js
"use client";

import styles from './Modal.module.css';
import { FaTimes } from 'react-icons/fa'; // Ícone para o botão de fechar

export default function Modal({ project, onClose }) {
  // Impede que o clique no conteúdo feche o modal
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // O fundo escuro que cobre a tela. Clicar nele fecha o modal.
    <div className={styles.modalBackdrop} onClick={onClose}>
      {/* O container branco com o conteúdo */}
      <div className={styles.modalContent} onClick={handleContentClick}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className={styles.modalTitle}>{project.titulo}</h2>
        <div className={styles.modalBody}>
          {project.descricao && Array.isArray(project.descricao) ? (
            project.descricao.map(block => {
              if (block.type === 'paragraph' && block.children[0]?.text) {
                return <p key={Math.random()}>{block.children[0].text}</p>;
              }
              return null;
            })
          ) : (
            <p>Descrição não disponível.</p>
          )}
        </div>
      </div>
    </div>
  );
}
