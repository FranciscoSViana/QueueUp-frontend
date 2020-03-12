import React from 'react';
import {Link} from 'react-router-dom';

import './styless.css'
const Header = () => (
    <header id="main-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <a className="navbar-brand" href="/" > <img src="favicon.png" width="50" height="50" alt=""></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><span className="sr-only">(página atual)</span></a>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <input className="form-control2 mr-sm-2" type="search" placeholder="Pesquisar Restaurantes" aria-label="Pesquisar" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
                    </form>
                    <ul class="navbar-nav">
                    <li>
                    <a class="nav-link" href="#">
                            <button type="button" class="btn btn-success" data-toggle="button" aria-pressed="false" autocomplete="off">
                                Minha Conta
                            </button>
                    </a>
                    </li>
                    </ul>
                    <ul class="navbar-nav ml-auto nav-flex-icons">
                    <li class="nav-item avatar">
                        <a class="nav-link p-0" href="#">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle z-depth-0"
                            alt="avatar image" height="35"/>
                        </a>
                        </li>
                    </ul>
                </div>
            </nav>
    </header>
);

export default Header;