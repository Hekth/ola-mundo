import styles from "./style.module.css";
import MenuLink from "../MenuLink";

export default function Navegacao() {    
    return (
        <header>
            {/* forma de acessar os seletores no css sem declarar um nome de uma classe, repare o nome do arquivo css tb style.module.ss e a forma de importação dele, muito interessante*/}
            <nav className={ styles.navegacao }>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre mim
                </MenuLink>
            </nav>
        </header>
    )
}