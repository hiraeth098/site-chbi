"use client";

import { useState } from 'react';
import styles from './ProjectAccordion.module.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function ProjectAccordion({ project }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={styles.accordionItem}>
            <button className={styles.accordionButton} onClick={toggleOpen}>
                <span className={styles.projectTitle}>{project.titulo}</span>
                <span className={styles.icon}>{isOpen ? <FaMinus /> : <FaPlus />}</span>
            </button>

            {isOpen &&(
                <div className={styles.accordionContent}>
                    {/* Descrição do strapi */}
                    {project.descricao.map(block => {
                        if (block.type === 'paragraph') {
                            return <p key={Math.random()}>{block.children[0].text}</p>;
                        }
                        return null;
                    })}
                </div>
            )} 


        </div>
    );
}