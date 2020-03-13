import React from "react";
import Layout from "./Layout";
import { SRLWrapper } from "simple-react-lightbox";
import Form from "react-bootstrap/Form";
import Cartao from "../assets/images/Cartao.png";

const Contato = () => {
  return (
    <Layout>
      <SRLWrapper>
        <div id="content-page-one" className="container content">
          <div className="center col-text">
            <h3>Fale Conosco</h3>
          </div>

          <div className="row">

            <div className="col-md-6 col-12">
              <img
                className="col-image-contato"
                src={Cartao}
                alt="Equipe" />
            </div>
            <div className="col-md-6 col-12 col-text">
              <Form>

                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Assunto</Form.Label>
                  <Form.Control as="select">
                    <option>SAC</option>
                    <option>Finanças</option>
                    <option>Comercial</option>
                    <option>Sugestão</option>
                    <option>Outros</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Descrição</Form.Label>
                  <Form.Control as="textarea" rows="10" />
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>

      </SRLWrapper>
    </Layout>
  );
};

export default Contato;
