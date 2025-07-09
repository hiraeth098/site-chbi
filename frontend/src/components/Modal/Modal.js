"use client";

import Image from 'next/image';
import styles from './Modal.module.css';
import { FaTimes } from 'react-icons/fa';

export default function Modal({ project, onClose }) {
  if (!project) return null;

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const isImage = project.arquivo && project.arquivo.mime.startsWith('image/');
  
  // A MUDANÇA ESTÁ AQUI:
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={handleContentClick}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className={styles.modalTitle}>{project.titulo}</h2>
        
        <div className={styles.modalBody}>
          {isImage && (
            <div className={styles.imagePreviewContainer}>
              <Image
                src={`${strapiUrl}${project.arquivo.url}`}
                alt={`Preview do projeto ${project.titulo}`}
                width={project.arquivo.width}
                height={project.arquivo.height}
                className={styles.imagePreview}
              />
            </div>
          )}

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

        {project.arquivo && !isImage && (
          <div className={styles.modalFooter}>
            <a 
              href={`${strapiUrl}${project.arquivo.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadButton}
            >
              Ver Documento Anexado
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
