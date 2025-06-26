// Arquivo: src/components/ProjectList/ProjectList.js
"use client";

import { useState } from 'react';
import styles from './ProjectList.module.css';
// CORREÇÃO FINAL: O caminho correto para um componente irmão.
import Modal from '../Modal/Modal'; 

export default function ProjectList({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className={styles.listContainer}>
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <button 
              key={project.id} 
              className={styles.projectItem}
              onClick={() => setSelectedProject(project)}
            >
              {project.titulo}
            </button>
          ))
        ) : (
          <p>Nenhum projeto encontrado.</p>
        )}
      </div>

      {selectedProject && (
        <Modal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}
