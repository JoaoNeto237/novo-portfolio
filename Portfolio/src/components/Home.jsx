import styles from './Home.module.css';
import home from '../../imagens/home.avif';

function Home(){
    return(
        <div className={styles.divHome}>
           <div>
                <h1 className={styles.h1Home}>Transformando ideias em soluções digitais completas</h1>
                <p className={styles.pHome}>João Cunha/ Desenvolvedor Full-stack</p>
           </div>
            <div>
                <img className={styles.imgHome} src={home} alt='Imagem representando engenharia de software' />
            </div>
        </div>
    )
}

export default Home;