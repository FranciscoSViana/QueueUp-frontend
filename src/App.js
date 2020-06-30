import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import "./styles.css";
import Header from './componentss/Header';
import Carousel from './componentss/Carousel';
import Categories from './componentss/Categories';
import Footer from './componentss/Footer';
import Main from './pages/main';
import Principal from './pages/mainrestaurante';

import "./index.scss";

import Content from "./components/Content";
import ContentPageTwo from "./components/ContentPageTwo";
import Contato from "./components/Contato";
import Login from "./components/Login";
import CadastroCliente from "./components/CadastroCliente";
import CadastroRestaurante from "./components/CadastroRestaurante";
import SimpleReactLightbox from "simple-react-lightbox";




const App = () => (
  <>
    <BrowserRouter>
      <div className="App">
        <Route component={Header} exact path="/main" />
        <Route component={Carousel} exact path="/main" />
        <Route component={Categories} exact path="/main" />
        <Route path="/restaurantes" component={Main} />
        <Route component={Footer} exact path="/main" />
        <Route component={Principal} exact path="/mainrestaurantes" />

        {/* <Route path="/" exact component={Content} />
        <Route path="/usuario/" component={ContentPageTwo} />
        <Route path="/contato/" component={Contato} />
        <Route path="/login/" component={Login} />
        <Route path="/cadastro-restaurante" component={CadastroRestaurante} />
        <Route path="/cadastro-cliente" component={CadastroCliente} /> */}
      </div>
    </BrowserRouter>

    <SimpleReactLightbox>
      <div className="App">
        <BrowserRouter>
          <Route path="/" exact component={Content} />
          <Route path="/usuario/" component={ContentPageTwo} />
          <Route path="/contato/" component={Contato} />
          <Route path="/login/" component={Login} />
          <Route path="/cadastro-restaurante" component={CadastroRestaurante} />

          <Route path="/cadastro-cliente" component={CadastroCliente} />
        </BrowserRouter>
      </div>

    </SimpleReactLightbox>
  </>

);


export default App;
