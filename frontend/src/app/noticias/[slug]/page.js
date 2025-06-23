import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

async function getNoticiaBySlug(slug) {
    const url = `http://localhost:1337/api/noticias?filters[slug][$eq]=${slug}`;

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

export default async function NoticiaPage({ params }) {
    const noticia = await getNoticiaBySlug(params.slug);

    return (
        <article className={styles.article}>
            <h1 className={styles.title}>{noticia.titulo}</h1>
            <p className={styles.publishedDate}>
                Publicado em: {new Date(noticia.publishedAt).toLocaleDateString('pt-BR')}
            </p>

            
            <div className={styles.content}>
                {noticia.conteudo.map(block => {
                    if (block.type === 'paragraph') {
                        return <p key={Math.random()}>{block.children[0].text}</p>
                    }
                    return null;
                })}
            </div>       
        </article>
    )
    
}