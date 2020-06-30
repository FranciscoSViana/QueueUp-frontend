import React from "react";
import SRLLogo from "../assets/images/SRL_Logo.png";
import { withSRLContext } from "simple-react-lightbox";
import { Link } from "react-router-dom";
/*
We can use an High Order Component to pass the context and use the methods provided
in case we want to open the lightbox from a button or anything :)
*/

// Pass the props as an argument
const Header = props => {
  return (
    <div id="header">
      <div className="container">
        <div className="row align-items-end">
          <div className="SRL_Logo col-md-6 col-12">
            <img
              src={SRLLogo}
              alt="Simple React Lightbox - A simple but functional light-box for React"
            />
          </div>
          <div className="col-md-6 col-12">
            <nav>
              <ul>
                <li>
                  <Link to="/">Restaurante</Link>
                </li>
                <li>
                  <Link to="/Usuario/">Usuário</Link>
                </li>
                <li>
                  <Link to="/Contato/">Contato</Link>
                </li>



                <li>
                  <Link to="/cadastro-restaurante/">Cadastro Restaurante</Link>
                </li>

                <li>
                  <Link to="/cadastro-cliente/">Cadastro Usuário</Link>
                </li>

                <li>
                  <Link to="/Login/">Login</Link>
                </li>




{/* 
                <div className="SRL_CTA">
                  <button className="SRL_CTA-OpenLightbox">
                    <a href=  "/login/">Login</a>
                  </button>
                </div>

                <div className="SRL_CTA">
                  <button className="SRL_CTA-OpenLightbox2">
                    <Link to="/cadastro-restaurante/">Cadastro Restaurante</Link>
                  </button>
                </div>

                <div className="SRL_CTA SRL_CTA-OpenLightbox2">
                  <li>
                    <Link to="/cadastro-cliente/">Cadastro Usuário</Link>
                  </li>
                </div> */}


              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

// Wrap your component using the provided HOC
export default withSRLContext(Header);
