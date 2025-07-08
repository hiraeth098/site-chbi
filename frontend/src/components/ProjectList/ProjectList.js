// Ficheiro: src/components/ProjectList/ProjectList.js
"use client";

import { useState } from 'react';
import styles from './ProjectList.module.css';
import Modal from '@/components/Modal/Modal';

export default function ProjectList({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className={styles.categorySection}>
        <div className={styles.categoryTitleWrapper}>
          <div className={styles.categoryBar}></div>
          <h2 className={styles.categoryTitle}>Projetos</h2>
        </div>
        
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
      </div>

      {selectedProject && (
        // A correção é garantir que a prop 'onClose' está a ser passada aqui
        <Modal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}
