import styles from "./SobreMim.module.css";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import fotoPerfil from "../../assets/foto-perfil.jpg";
import PostModelo from "../PostModelo";
export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>
                
            </h3>

            <img src={fotoPerfil} alt="minha foto" className={styles.fotoSobreMim} />

            <p className={styles.paragrafo}>
               Olá, eu sou Heitor... 
            </p>
        </PostModelo>
    );
}