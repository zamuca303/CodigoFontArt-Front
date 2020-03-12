import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from './pages/main';
import Produtos from "./pages/Produtos";
import Carrinho from './pages/Carrinho';
import CriarProduto from './pages/CriarProduto';
import NotFound from './pages/NotFound';
import Pesquisa from './pages/Pesquisa';
import NotCart from './pages/NotCart';
import AlertSucess from './pages/Alert';
import AlertError from './pages/AlertError';

const Routes = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/produtos/:id" component={Produtos}/>
          <Route path="/carrinho" component={Carrinho}/>
          <Route path="/criarproduto" component={CriarProduto}/>
          <Route path="/notfound" component={NotFound} />
          <Route path="/pesquisa/:title" component={Pesquisa} />
          <Route path="/notcart" component={NotCart} />
          <Route path="/alertsucess" component={AlertSucess} />
          <Route path="/alerterror" component={AlertError} />
      </Switch>
  </BrowserRouter>
);

export default Routes;