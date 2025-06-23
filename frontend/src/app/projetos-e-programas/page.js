import styles from './page.module.css';
import { FaFilePdf } from "react-icons/fa"; 


async function getDocumentos() {
  const url = 'http://localhost:1337/api/documentos?populate=arquivo';
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Falha ao buscar documentos');
  }
  const data = await res.json();
  return data.data; 
}

export default async function ProjetosEProgramasPage() {
  const documentos = await getDocumentos();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projetos e Programas</h1>
      <p className={styles.description}>Acesse os documentos e informações sobre os projetos e programas da nossa associação.</p>

      <div className={styles.documentList}>
        {documentos && documentos.length > 0 ? (
          documentos.map((doc) => (
            <div key={doc.id} className={styles.documentCard}>
              <div className={styles.iconWrapper}>
                <FaFilePdf /> {/* ícone de PDF */}
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{doc.titulo}</h2>
                <p className={styles.cardDate}>
                  Publicado em: {new Date(doc.data_publicacao).toLocaleDateString('pt-BR')}
                </p>
              </div>
              {doc.arquivo && (
                <a 
                  href={`http://localhost:1337${doc.arquivo.url}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.downloadButton}
                >
                  Ver Arquivo
                </a>
              )}
            </div>
          ))
        ) : (
          <p>Nenhum documento encontrado no momento.</p>
        )}
      </div>
    </div>
  ); 
}