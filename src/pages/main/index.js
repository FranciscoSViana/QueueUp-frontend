import React, {Component} from 'react';
import api from '../../services/api';
import Header from '../../componentss/Header';
import Carousel from '../../componentss/Carousel';
import Footer from '../../componentss/Footer';
import './style.css';


export default class Main extends Component {
    state = {
        products: []
    }
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/restaurantes');
        this.setState({products: response.data.items})
    }

    render(){
    const {products} = this.state;
    return (
        
        <div className="products-list">
            <Header />
            <Carousel />
            {products.map(product =>(
               <div className="card-deck main">
               <div className="card main" key={product.id}>
               <img className="card-img-top" src={product.image} alt="Imagem de capa do card"/>
               <div className="card-body">
                 <h5 className="card-title">{product.name}</h5>
                 <p className="card-text" >{product.des}</p>
                 <a href="#" class="btn btn-primary">Entrar</a>
               </div>
               </div>
               </div>
            ))}
            <Footer />
        </div>
    )
    }
}