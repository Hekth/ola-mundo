import { NavLink } from "react-router-dom";
import "./MenuLink.css";

export default function MenuLink({ children, to }) {
    
    /* navlink consegue saber se o link foi clicado, e quando vc clica, o link recebe por padrao a classe active, dessa forma nao precisamos utilizar da renderização condicional, nao funciona direito quando o css é o module q nem no outro componente */
    return (
        <NavLink to={ to } className="link"> 
            { children }
        </NavLink>
    );
}