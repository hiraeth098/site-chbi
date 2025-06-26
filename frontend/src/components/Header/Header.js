import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.socialIcons}>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className={styles.mainNav}>
        <div className={styles.container}>
          <nav className={styles.navLinks}>
            <Link href="/">Início</Link>
            <Link href="/noticias">Notícias</Link>
            <Link href="/jogos">Jogos</Link>
          </nav>

          <div className={styles.logoContainer}>
            <Link href="/">
              <Image src="/CHBI.png" alt="Logo CHBI" width={280} height={186} />
            </Link>
          </div>

          <nav className={styles.navLinks}>
            <Link href="/projetos-e-programas">Projetos</Link>
            
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>Governança</button>
              <div className={styles.dropdownContent}>
                <div className={styles.megaMenuGrid}>
                  <div className={styles.megaMenuColumn}>
                    <h3>Governança</h3>
                    <Link href="/estatuto">Estatuto</Link>
                    <Link href="/conselho-administrativo">Conselho Administrativo</Link>
                    <Link href="/conselho-fiscal">Conselho Fiscal</Link>
                  </div>
                  <div className={styles.megaMenuColumn}>
                    <h3>Transparência</h3>
                    <Link href="/prestacao-de-contas">Prestação de Contas</Link>
                    <Link href="/contratos">Contratos Públicos</Link>
                    <Link href="/resultados-financeiros">Resultados Financeiros</Link>
                  </div>
                  <div className={styles.megaMenuColumn}>
                    <h3>Documentos</h3>
                    <Link href="/documentos-institucionais">Documentos Institucionais</Link>
                    <Link href="/resolucoes">Resoluções</Link>
                    <Link href="/portarias">Portarias</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/contato">Contato</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
