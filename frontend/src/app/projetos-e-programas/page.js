// Arquivo: src/app/projetos-e-programas/page.js
import styles from './page.module.css';
import ProjectList from '@/components/ProjectList/ProjectList';


async function getProjetos() {
  const url = 'http://localhost:1337/api/documentos?populate=descricao';
  const res = await fetch(url);
  if (!res.ok) throw new Error('Falha ao buscar projetos');
  const data = await res.json();
  return data.data;
}


export default async function ProjetosPage() {
  const projetos = await getProjetos();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projetos e Programas</h1>
      {/* Aqui chamamos nosso novo componente interativo, passando os dados para ele */}
      <ProjectList projects={projetos} />
    </div>
  );
}
