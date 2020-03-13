import React from "react";
import Content from "./components/Content";
import ContentPageTwo from "./components/ContentPageTwo";
import Contato from "./components/Contato";
import Login from "./components/Login";
import CadastroCliente from "./components/CadastroCliente";
import CadastroRestaurante from "./components/CadastroRestaurante";
import SimpleReactLightbox from "simple-react-lightbox";
import { BrowserRouter as Router, Route } from "react-router-dom";

const options = {
  // overlayColor: "rgb(25, 136, 124)",
  // captionStyle: {
  //   captionColor: "#a6cfa5",
  //   captionFontFamily: "Raleway, sans-serif",
  //   captionFontSize: "22px",
  //   captionFontWeight: "300",
  //   captionFontStyle: "capitalize"
  // },
  // buttonsStyle: {
  //   buttonsBackgroundColor: "#1b5245",
  //   buttonsIconColor: "rgba(126, 172, 139, 0.8)"
  // },
  // autoplaySpeed: 1500,
  // transitionSpeed: 900,
  // showCaption: true,
  // showThumbnails: true
};

function App() {
  return (
    <SimpleReactLightbox {...options}>
      <div className="App">
        <Router>
          <Route path="/" exact component={Content} />
          <Route path="/usuario/" component={ContentPageTwo} />
          <Route path="/contato/" component={Contato} />
          <Route path="/login/" component={Login} />
          <Route path="/cadastro-restaurante" component={CadastroRestaurante} />
          <Route path="/cadastro-cliente" component={CadastroCliente} />
        </Router>
      </div>
      
    </SimpleReactLightbox>
  );
}

export default App;
