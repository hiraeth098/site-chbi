// Arquivo: src/components/Modal/Modal.js
"use client";

import styles from './Modal.module.css';
import { FaTimes } from 'react-icons/fa';

export default function Modal({ project, onClose }) {
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={handleContentClick}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className={styles.modalTitle}>{project.titulo}</h2>
        
        <div className={styles.modalBody}>
          {project.descricao && Array.isArray(project.descricao) && project.descricao.length > 0 ? (
            project.descricao.map(block => {
              if (block.type === 'paragraph' && block.children[0]?.text) {
                return <p key={Math.random()}>{block.children[0].text}</p>;
              }
              return null;
            })
          ) : (
            <p><i>Descrição não disponível.</i></p>
          )}
        </div>

        {/* CÓDIGO NOVO: Seção que mostra o botão do arquivo, se ele existir */}
        {project.arquivo && (
          <div className={styles.modalFooter}>
            <a 
              href={`http://localhost:1337${project.arquivo.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadButton}
            >
              Ver Arquivo Anexado
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
