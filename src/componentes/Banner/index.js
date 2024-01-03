import styles from "./Banner.module.css";
import circuloColorido from "../../assets/circulo_colorido.png";
import minhaFoto from "../../assets/foto-perfil.jpg";
export default function Banner() {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={ styles.titulo }>
                    Olá, mundo!
                </h1>

                <p className={ styles.paragrafo }>
                    Olá, tudo bem? Meu nome é Heitor e sou estudante de desenvolvimento front-end na Alura e também estou no 3º semestre do curso de Análise e Desenvolvimneto na Estácio.
                </p>
            </div>
            <div className={ styles.imagens }>
                <img 
                    className={ styles.circuloColorido } 
                    src={circuloColorido} alt="circulo colorido" 
                    aria-hidden={true} 
                />
                <img
                    className={ styles.minhaFoto }
                    src={ minhaFoto }
                    alt="foto do heitor em preto e branco"
                />
            </div>
        </div>
    );
}