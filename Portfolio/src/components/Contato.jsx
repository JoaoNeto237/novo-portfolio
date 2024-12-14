import styles from './Contato.module.css';
import github from '../../imagens/github.webp';
import linkedin from '../../imagens/linkedin.png';
import instagram from '../../imagens/instagram.jfif';

function Contato(){
    return(
        <>
            <div className={styles.containerContato}>
                <h2 className={styles.h2Contato}>Contato</h2>
              <div className={styles.containerConteudoContato}>
                  <div>
                    <h3 className={styles.h3Contato}>Redes sociais</h3>
                    <img className={styles.imgContato} src={github} alt="Logo do GitHub" />
                    <img className={styles.imgContato} src={instagram} alt="Logo do instagram" />
                    <img className={styles.imgContato} src={linkedin} alt="Logo do linkedin" />
                </div>
                <div>
                    <h3 className={styles.h3Contato}>E-mail</h3>
                    <p className={styles.pContato}>joascunha123@gmail.com</p>
                </div>
                <div>
                    <h3 className={styles.h3Contato}>Telefone</h3>
                    <p className={styles.pContato}>(64)99255-9884</p>
                </div>
             </div>
             <p className={styles.pDireitosContato}>Copyright: © 2024 João Cunha. Todos os direitos reservados</p>
            </div>
        </>
    )
}

export default Contato;