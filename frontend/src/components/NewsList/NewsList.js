import Link from 'next/link';
import styles from './NewsList.module.css';

async function getNoticias() {
    const res = await fetch('http://localhost:1337/api/noticias');
    if (!res.ok) {
        throw new Error('Falha ao  buscar dados da API');
    }
    return res.json();
}

export default async function NewsList() {
    const noticiasData = await getNoticias();
    const noticias = noticiasData.data;

    if (!noticias || noticias.length === 0) {
        return <p>Nenhuma notícia encontrada no momento.</p>;
    }
    return (
    <section className={styles.newsSection}>
      <h2 className={styles.sectionTitle}>Últimas Notícias</h2>
      <div className={styles.newsGrid}>
        {noticias.map((noticia) => (
            <Link key={noticia.id} href={`/noticias/${noticia.slug}`} className={styles.link}>
                <div key={noticia.id} className={styles.newsCard}>
                    <h3>{noticia.titulo}</h3>
                </div>
            </Link>
        ))}
      </div>
    </section>
  );
}