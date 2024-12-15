import styles from './Header.module.css';
import React from 'react';

function Header() {
    const rolarParaComponentes = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.headerNav}>
                    <ul className={styles.headerUl}>
                        <li className={styles.headerLi}>
                            <button 
                                onClick={() => rolarParaComponentes('Home')} 
                                style={{ all: 'unset' }} // Remove toda a estilização padrão do botão
                            >
                                Home
                            </button>
                        </li>
                        <li className={styles.headerLi}>
                            <button 
                                onClick={() => rolarParaComponentes('Sobre')} 
                                style={{ all: 'unset' }} // Remove toda a estilização padrão do botão
                            >
                                Sobre
                            </button>
                        </li>
                        <li className={styles.headerLi}>
                            <button 
                                onClick={() => rolarParaComponentes('Formacao')} 
                                style={{ all: 'unset' }} // Remove toda a estilização padrão do botão
                            >
                                Formação
                            </button>
                        </li>
                        <li className={styles.headerLi}>
                            <button 
                                onClick={() => rolarParaComponentes('Habilidades')} 
                                style={{ all: 'unset' }} // Remove toda a estilização padrão do botão
                            >
                                Habilidades
                            </button>
                        </li>
                        <li className={styles.headerLi}>
                            <button 
                                onClick={() => rolarParaComponentes('Servicos')} 
                                style={{ all: 'unset' }} // Remove toda a estilização padrão do botão
                            >
                                Serviços
                            </button>
                        </li>
                        <li className={styles.headerLi}>
                            <button 
                                onClick={() => rolarParaComponentes('Projetos')} 
                                style={{ all: 'unset' }} // Remove toda a estilização padrão do botão
                            >
                                Projetos
                            </button>
                        </li>
                        <li className={styles.headerLi}>
                            <button 
                                onClick={() => rolarParaComponentes('Contato')} 
                                style={{ all: 'unset' }} // Remove toda a estilização padrão do botão
                            >
                                Contato
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
