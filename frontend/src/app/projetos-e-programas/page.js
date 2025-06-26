import styles from './page.module.css';
import ProjectList from '@/components/ProjectList/ProjectList';

async function getProjetos() {
  // CORREÇÃO: Adicionado o populate=arquivo para buscar os dados do arquivo anexado.
  const url = 'http://localhost:1337/api/documentos?populate=arquivo';
  const res = await fetch(url, { cache: 'no-store' }); 
  
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({ message: 'Resposta não é JSON' }));
    console.error('Erro recebido do Strapi:', res.status, res.statusText, errorData);
    throw new Error('Falha ao buscar projetos');
  }

  const data = await res.json();
  return data.data;
}

export default async function ProjetosPage() {
  const projetos = await getProjetos();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projetos e Programas</h1>
      <ProjectList projects={projetos} />
    </div>
  );
}
