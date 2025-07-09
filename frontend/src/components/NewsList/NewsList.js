import Link from 'next/link';
import Image from 'next/image';
import styles from './NewsList.module.css';

async function getNoticias() {
  // A MUDANÇA ESTÁ AQUI:
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const url = `${strapiUrl}/api/noticias?populate=imagem_destacada`;

  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Falha ao buscar notícias');
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
        {noticias.map((noticia) => {
          const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
          const imageUrl = noticia.imagem_destacada?.url 
            ? `${strapiUrl}${noticia.imagem_destacada.url}`
            : "https://placehold.co/600x400/0d1b42/f0c420?text=CHBI";

          return (
            <Link key={noticia.id} href={`/noticias/${noticia.slug}`} className={styles.cardLink}>
              <div className={styles.newsCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={imageUrl}
                    alt={noticia.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>{noticia.titulo}</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
