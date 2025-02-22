import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'

// function CadastroVideo() {
//   return (
//     <div>
//       Página de vídeo
//     </div>
//   )
// }

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
      {/* <Route component={() => (<div>Página 404</div>)} exact/> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);