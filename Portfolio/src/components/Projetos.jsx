import styles from './Projetos.module.css';
import barbearia from '../../imagens/barbearia.jpg';
import offstyle from '../../imagens/offstyle.jpg';
import landingPage from '../../imagens/landingPage.png';
import premiumChoices from '../../imagens/premiumChoices.jpg';
import sistema from '../../imagens/sistema.jpeg';
import sanduicheria from '../../imagens/sanduicheria.jpg';

function Projetos() {
    return (
        <div id='Projetos' className={styles.containerProjetos}>
            <div className={styles.headerProjetos}>
                <h2 className={styles.h2Projetos}>Projetos</h2>
            </div>

            <div className={styles.projetosContainer}>
                <div className={styles.projetos}>
                    <img
                        className={styles.imgProjetos}
                        src={offstyle}
                        alt="loja de roupas streetwear"
                    />
                    <h3 className={styles.projetoTitulo}>Site Institucional</h3>
                    <p className={styles.projetoDescricao}>Site institucional para uma loja de roupas streetwear, com o objetivo de divulgar os produtos, fortalecer a identidade da marca e prospectar novos clientes.</p>
                </div>

                <div className={styles.projetos}>
                    <img
                        className={styles.imgProjetos}
                        src={premiumChoices}
                        alt="E-Commerce"
                    />
                    <h3 className={styles.projetoTitulo}>E-Commerce</h3>
                    <p className={styles.projetoDescricao}>
                    E-commerce de venda de roupas, com o objetivo de oferecer uma plataforma online para a venda de roupas e acessórios exclusivos, focada em um público jovem e antenado nas últimas tendências.</p>
                </div>

                <div className={styles.projetos}>
                    <img
                        className={styles.imgProjetos}
                        src={landingPage}
                        alt="Landing Page"
                    />
                    <h3 className={styles.projetoTitulo}>Landing Page</h3>
                    <p className={styles.projetoDescricao}>Landing page para uma loja de tecnologia, com o objetivo de apresentar produtos inovadores, fortalecer a imagem da marca e atrair novos clientes. A página destaca dispositivos eletrônicos de ponta e suas funcionalidades, oferecendo uma experiência de navegação rápida e eficiente para facilitar a compra.</p>
                </div>
                <div className={styles.projetos}>
                    <img
                        className={styles.imgProjetos}
                        src={sanduicheria}
                        alt="site de vendas"
                    />
                    <h3 className={styles.projetoTitulo}>Site de vendas</h3>
                    <p className={styles.projetoDescricao}>Site de vendas para uma para uma sanduicheria, com o objetivo de divulgar o cardápio e promover ofertas especiais. A página destaca os diferentes tipos de sanduíches, ingredientes frescos e combinações exclusivas, oferecendo uma experiência visual apetitosa e de fácil navegação para facilitar o pedido online.</p>
                </div>

                <div className={styles.projetos}>
                    <img
                        className={styles.imgProjetos}
                        src={sistema}
                        alt="Sistema para controle de estoque"
                    />
                    <h3 className={styles.projetoTitulo}>Sistema para controle de estoque</h3>
                    <p className={styles.projetoDescricao}>Sistema para controle de estoque, com o objetivo de gerenciar e monitorar os níveis de produtos de forma eficiente e precisa. Ele visa otimizar o processo de reposição de estoque, reduzir desperdícios e garantir que a empresa tenha sempre a quantidade adequada de produtos disponíveis para atender à demanda.</p>
                </div>

                <div className={styles.projetos}>
                    <img
                        className={styles.imgProjetos}
                        src={barbearia}
                        alt="Aplicativo de Barbearia"
                    />
                    <h3 className={styles.projetoTitulo}>Aplicativo de Barbearia</h3>
                    <p className={styles.projetoDescricao}>Aplicativo de barbearia, desenvolvido para facilitar o agendamento de horários, gerenciamento de clientes e serviços oferecidos. O aplicativo permite que os usuários escolham o profissional desejado, visualizem os serviços disponíveis e agendem o melhor horário, tudo de forma rápida e intuitiva.</p>
                </div>

            </div>
        </div>
    );
}

export default Projetos;
