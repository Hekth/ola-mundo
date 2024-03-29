import BotaoPrincipal from "../BotaoPrincipal";
import styles from "./PostCard.module.css";
import { Link } from "react-router-dom";
export default function PostCard({ post }) {
    return (
        <Link to={`post/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.capa} src={`../../assets/posts/${post.id}/capa.png`} alt="capa" />
                <h2 className={styles.titulo}>
                    { post.titulo }
                </h2>
                <BotaoPrincipal>
                    Ler
                </BotaoPrincipal>
            </div>
        </Link>
        
    )
}