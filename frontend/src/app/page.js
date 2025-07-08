// Ficheiro: src/app/page.js

import Image from 'next/image';
import styles from './page.module.css';
import NewsList from '@/components/NewsList/NewsList';

export default function Home() {
  return (
    // Usamos um Fragment <> para poder retornar múltiplos elementos na ordem correta
    <>
      {/* O layout de duas colunas agora vem PRIMEIRO */}
      <div className={styles.container}>
        <main className={styles.mainContent}>
          <NewsList />
        </main>
        <aside className={styles.sidebar}>
          <h2>Campeonatos</h2>
          <p>Em breve...</p>
        </aside>
      </div>

      {/* A faixa de manutenção agora vem DEPOIS, no meio da página */}
      <section className={styles.maintenanceBanner}>
        <Image src="/CHBI.png" alt="Escudo do CHBI" width={100} height={66} />
        <h2>EM CONSTRUÇÃO</h2>
        <p>Novas secções e funcionalidades em breve!</p>
      </section>
    </>
  );
}
