import styles from './Sobre.module.css';
import fotoPerfil from '../../imagens/fotoPerfil.jpeg';

function Sobre(){
    return(
        <div id='Sobre' className={styles.containerSobre}>
          <div className={styles.sobreText}>
            <h2 className={styles.h2Sobre}>Sobre</h2>
            <p className={styles.pSobre}> Olá! Sou João Cunha, desenvolvedor full-stack com sólida experiência na criação de aplicações web completas e eficientes. Tenho um perfil orientado a resultados, oferecendo soluções escaláveis, de alta performance e qualidade técnica. Meu trabalho combina expertise em frontend moderno, garantindo interfaces intuitivas e atraentes, com um backend robusto e bem estruturado, capaz de atender às demandas mais desafiadoras. Sou apaixonado por transformar ideias em produtos digitais que geram valor e impacto positivo para negócios e usuários.</p>
            <hr className={styles.hrSobre} />
        </div>
        <div>
           <img className={styles.imgSobre} src={fotoPerfil} alt="Foto de perfil" />
        </div>
        </div>
      
    )
}

export default Sobre;