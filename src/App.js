import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import SobreMim from "./componentes/Sobremim";
import PaginaNaoEncontrada from "./componentes/PaginaNaoEncontrada";
import Navegacao from "./componentes/Navegacao";
function App() {
  
  return (
    <BrowserRouter>
      <Navegacao />
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="/sobremim" element={ <SobreMim /> } />
        {/* o asterisco indicara q se qualquer coisa for digitada alem das rotas criadas, ele ira renderizar a paginanaoencontrada */}
        <Route path="/*" element={ <PaginaNaoEncontrada /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
