import React from 'react';
import {Link } from 'react-router-dom';
import './styles.css'
const Categories = () => (
  <div>
      <h3 className="text">Categorias</h3>
  <div className="container">
  <div className="row">
    <div className="col">
      <img src="./images/blue.jpg" className="img-fluid" alt="Imagem responsiva"/>
     <label id="mp"><Link to="/restaurantes" id="href"><h2>Mais Próximos</h2></Link></label>
    </div>
    <div className="col">
      <img src="./images/cafedamanha.jpg" className="img-fluid" alt="Imagem responsiva"/>
      <label id="mp">< Link to="/restaurantes" id="href"><h2>Café da Manhã</h2></Link></label>
    </div> 
      
  </div>
  <div className="row ">
    <div className="col">
        <img src="./images/sobremesas.jpg" className="img-fluid" alt="Imagem responsiva"/>
        <label id="mp"><Link to="/restaurantes" id="href"><h2>Sobremesas</h2></Link></label>
    </div>
    <div className="col">
      <img src="./images/comida-americana.png" className="img-fluid" alt="Imagem responsiva"/>
      <label id="mp"><Link to="/restaurantes" id="href"><h2>Americana</h2></Link></label>
    </div> 
   
  </div>
  <div className="row">
    <div className="col">
      <img src="./images/comida-brasileira.jpg" className="img-fluid" alt="Imagem responsiva" />
      <label id="mp"><Link to="/restaurantes" id="href"><h2 id="href">Brasileira</h2></Link></label>
    </div>
    <div className="col">
      <img src="./images/comida-francesa.jpg" className="img-fluid"  alt="Imagem responsiva"/>
      <label id="mp"><Link to="/restaurantes" id="href"><h2>Francesa</h2></Link></label>
    </div> 
  </div>
  <div className="row">
    <div className="col">
      <img src="./images/comida-italiana.jpg" className="img-fluid" alt="Imagem responsiva" />
      <label id="mp"><Link to="/restaurantes" id="href"><h2>Italiana</h2></Link></label>
    </div>
    <div className="col">
      <img src="./images/comida-japonesa.jpg" className="img-fluid"alt="Imagem responsiva" />
      <label id="mp"><Link to="/restaurantes" id="href"><h2>Japonesa</h2></Link></label>
    </div> 
  </div>
</div>
</div>
);
export default Categories;