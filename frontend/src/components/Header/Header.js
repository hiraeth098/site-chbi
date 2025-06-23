import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Header() {
  return (
    
    <header className={styles.headerWrapper}>
      
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.socialIcons}>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      
      <div className={styles.mainNav}>
        <div className={styles.container}>
          {/* 1. Links da Esquerda */}
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
            <Link href="/projetos-e-programas">Projetos e programas</Link>
            <Link href="/contato">Contato</Link>
            
          </nav>
        </div>
      </div>
    </header>
  );
}