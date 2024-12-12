import styles from './Sobre.module.css';
import fotoPerfil from '../../imagens/fotoPerfil.jpeg';

function Sobre(){
    return(
        <div className={styles.containerSobre}>
          <div className={styles.sobreText}>
            <h2 className={styles.h2Sobre}>Sobre</h2>
            <p className={styles.pSobre}> Olá! Sou João Cunha, desenvolvedor full-stack,  profissional focado em resultados. Com experiência em criar aplicações web completas, trabalho com uma abordagem focada em soluções escaláveis e de alta performance, combinando frontend moderno com backend robusto</p>
            <hr className={styles.hrSobre} />
        </div>
        <div>
           <img className={styles.imgSobre} src={fotoPerfil} alt="Foto de perfil" />
        </div>
        </div>
      
    )
}

export default Sobre;