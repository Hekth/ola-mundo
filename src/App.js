import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import SobreMim from "./componentes/Sobremim";
import PaginaNaoEncontrada from "./componentes/PaginaNaoEncontrada";
import Navegacao from "./componentes/Navegacao";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Post from "./componentes/Post";
function App() {
  
  return (
    <BrowserRouter>
      <Navegacao />
      <Routes >
        {/* rotas aninhadas:
        
        quando a rota é "/" renderizará o conteúdo da paginapadrao tambem e nao se esquecer do outlet para renderizar os conteudos das rotas filhas:
        <PaginaPadrao> 
          <Inicio />
        </PaginaPadrao>
        quando a rota é /sobremim:

        <PaginaPadrao> 
          <SobreMim />
        </PaginaPadrao>
        */}
        <Route path="/" element={ <PaginaPadrao />} >
          {/* o atributo index indica que o path é o mesmo da rota pai */}
          <Route index element={ <Inicio /> } />
          {/* sem o "/" quer dizer que a rota será relativa a rota pai entao seria a mesma coisa que: "/sobremim" */}
          <Route path="sobremim" element={ <SobreMim /> } />
        </Route>
        {/*utilizando o params do react router dom */}
        <Route path="post/:id" element={<Post />} />
        {/* o asterisco indicara q se qualquer coisa for digitada alem das rotas criadas, ele ira renderizar a paginanaoencontrada */}
        <Route path="/*" element={ <PaginaNaoEncontrada /> } />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
