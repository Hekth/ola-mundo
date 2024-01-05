/* é possivel importar um svg como um componente react e ai nao precisamos utilizar a tag img */
import styles from "./Rodape.module.css";
import { ReactComponent as MarcaRegistrada } from "../../assets/marca_registrada.svg";
export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            Desenvolvido por Heitor da Costa
        </footer>
    )
}