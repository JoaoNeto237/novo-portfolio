import styles from './Formacao.module.css';
import formacao3 from '../../imagens/formacao3.avif';

function Formacao(){
    return(
    <>

        <div className={styles.divGeralFormacao}>
            <div>
            <h2 className={styles.h2Formacao}>Formação</h2>
            </div>
            <div className={styles.containerFormacao}>
            <img
                className={styles.imgFormacao}
                src={formacao3}
                alt="Foto de formatura"
            />
        
            <div className={styles.textContainer}>
                <div>
                <h3 className={styles.h3Formacao}>Formação</h3>
                <ul className={styles.ulFormacao}>
                    <li className={styles.liFormacao}>
                    Colégio Estadual José Pereira Faustino, Ensino Médio, 2022
                    </li>
                    <li className={styles.liFormacao}>
                    Análise e desenvolvimento de sistemas, Estácio de Sá, 2023 -
                    </li>
                </ul>
                </div>
        
                {/* Experiência Profissional */}
                <div>
                <h3 className={styles.h3Formacao}>Experiência Profissional</h3>
                <ul className={styles.ulFormacao}>
                    <li className={styles.liFormacao}>
                    Desenvolvedor web freelancer, 2023 - atual
                    </li>
                    <li className={styles.liFormacao}>
                    Professor de inglês, 2023 - atual
                    </li>
                </ul>
                </div>
                <button className={styles.buttonFormacao} >Carregar CV</button>
            </div>
            </div>
        </div>
      </>
      
    )
}

export default Formacao;