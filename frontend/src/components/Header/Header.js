import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/"> 
                {/* Escudo do CHBI: Link para a página inicial */}
                <Image src="/CHBI.png" alt="Logo CHBI" width={235} height={170}/>
                </Link >
                <nav className={styles.nav}>
                    <ul>
                        <li><Link href="/">Início</Link></li>
                        <li><Link href="/noticias">Notícias</Link></li>
                        <li><Link href="/jogos">Jogos</Link></li>                       
                        <li><Link href="/projetos-e-programas">Projetos e Programas</Link></li>
                        <li><Link href="/contato">Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}