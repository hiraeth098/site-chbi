
import NewsList from "@/components/NewsList/NewsList";
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <NewsList />
      </main>
      <aside className={styles.sidebar}>
        <h2>Campeonatos</h2>
        <p>Em breve...</p>
      </aside>
    </div>
  );
}