// Ficheiro: src/app/noticias/[slug]/page.js

import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

// --- A NOVA FUNÇÃO QUE RESOLVE O ERRO ---
// Esta função busca todos os slugs de notícias para o Next.js gerar as páginas estáticas
export async function generateStaticParams() {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const res = await fetch(`${strapiUrl}/api/noticias`);
  const noticiasData = await res.json();
  const noticias = noticiasData.data;

  // Retornamos um array de objetos, onde cada objeto tem um 'slug'
  return noticias.map((noticia) => ({
    slug: noticia.slug,
  }));
}

// Esta função busca os dados de UMA notícia específica
async function getNoticiaBySlug(slug) {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const url = `${strapiUrl}/api/noticias?filters[slug][$eq]=${slug}&populate=imagem_destacada`;
  
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Falha ao buscar dados');
  }

  const data = await res.json();
  
  if (data.data.length === 0) {
    notFound();
  }

  return data.data[0];
}

// O componente da página continua igual
export default async function NoticiaPage({ params }) {
  const noticia = await getNoticiaBySlug(params.slug);
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  const imageUrl = noticia.imagem_destacada?.url 
    ? `${strapiUrl}${noticia.imagem_destacada.url}`
    : null;

  return (
    <article className={styles.article}>
      {imageUrl && (
        <div className={styles.imageContainer}>
          <Image 
            src={imageUrl} 
            alt={noticia.titulo} 
            fill 
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <h1 className={styles.title}>{noticia.titulo}</h1>
      <p className={styles.publishedDate}>
        Publicado em: {new Date(noticia.publishedAt).toLocaleDateString('pt-BR')}
      </p>
      
      <div className={styles.content}>
        {noticia.conteudo.map(block => {
          if (block.type === 'paragraph' && block.children[0]?.text) {
            return <p key={Math.random()}>{block.children[0].text}</p>;
          }
          return null;
        })}
      </div>
    </article>
  );
}
