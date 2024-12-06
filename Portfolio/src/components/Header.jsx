import styles from './Header.module.css';

function Header(){
    return(
        <>
           <header className={styles.header}>
                <nav className={styles.headerNav}>
                    <ul className={styles.headerUl}>
                        <li className={styles.headerLi}>Home</li>
                        <li className={styles.headerLi}>Sobre</li>
                        <li className={styles.headerLi}>Formacao</li>
                        <li className={styles.headerLi}>Habilidades</li>
                        <li className={styles.headerLi}>Servicos</li>
                        <li className={styles.headerLi}>Projetos</li>
                        <li className={styles.headerLi}>Contato</li>
                    </ul>
                </nav>
           </header>
        </>
    )
}

export default Header;