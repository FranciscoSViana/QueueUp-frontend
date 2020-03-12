import React from 'react';
import './styles.css';
const Carousel = () => (
    
    
        <   div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                
                <div className="carousel-item active item-um">
                    
                    <img className="w-70 " src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/discoveries/ifood-capas-novas-maisrapidos-v3.jpg" alt="Primeiro Slide"/>
                   
                </div>

                    <div className="carousel-item item-dois" >
                        <img className="w-70" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/discoveries/ifood-capas-novas-super-restaurantes2.jpg" alt="Segundo Slide"/>
                    </div>
                        <div className="carousel-item item-tres">
                            <img className="w-70" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/discoveries/ifood-capas-veggie-destaques.png" alt="Terceiro Slide"/>
                        </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Anterior</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Próximo</span>
                        </a>
                    </div>
                
);
export default Carousel;