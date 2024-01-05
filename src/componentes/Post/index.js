import { useParams } from "react-router-dom"
import posts from "../../assets/json/posts.json";
import PostModelo from "../PostModelo";
import ReactMarkdown from "react-markdown"
import "./Post.css";
import PaginaNaoEncontrada from "../PaginaNaoEncontrada";
export default function Post() {
    /* utilizando o hook do react router dom para pegar os parametros da rota */
    const { id } = useParams();

    const post = posts.find((elemento) => elemento.id.toString() === id);

    if (!post) {
        return <PaginaNaoEncontrada />
    }
    return (
        <PostModelo fotoCapa={ `../../assets/posts/${id}/capa.png` } titulo={post.titulo}>
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    )
}