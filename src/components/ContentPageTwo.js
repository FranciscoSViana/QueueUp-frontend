import React from "react";
import Layout from "./Layout";
import Customer from "../assets/images/Customer.png";
import Skeleton from "../assets/images/skeleton.png";
import Places from "../assets/images/Places.png";
import MobileTotem from "../assets/images/MobileTotem.png";
import Alerta from "../assets/images/Alerta.png";

// This examples uses external images
import { SRLWrapper } from "simple-react-lightbox";

const ContentPageTwo = () => {
  return (
    <Layout>
      <SRLWrapper>
        <div id="content-page-two" className="container content">
          <div className="row">
            <div className="col-md-6 col-12 col-text">
              <h2>
                Chega de <br />
                esperar em filas.
              </h2>
              <p>
                Com o crescimento populacional e, consequentemente, cada vez
                maiores concentrações de pessoas nas grandes cidades, sabemos
                que <strong> filas de espera</strong> têm se tornado um problema
                recorrente na vida dos cidadãos de cidades grandes. Com o
                intuito de dar um fim a esse problema, nasce a{" "}
                <strong>QueueUp</strong>, unindo em uma plataforma única, um
                sistema de gestão de filas de espera, fila virtual e cardápio
                digital (em breve).
              </p>
            </div>
            <div className="col-md-6 col-12">
              <img src={Customer} alt="Perfect reflection" />
            </div>



            <div className="row">
              <div className="col-md-4 col-12">
                <img src={Skeleton} alt="A beautiful landscape" />
              </div>
              <div className="col-md-8 col-12 col-text">
                <h2>
                  Você sabia?
              </h2>
                <p>
                  Em média, você passa <strong>seis meses de sua vida </strong>{" "}
                  esperando em filas. Essa 'perda de tempo' pode parecer tão
                  inevitável quanto dormir ou almoçar, mas com a QueueUp, você
                  pode recuperar essas horas perdidas e usá-las de forma mais
                produtiva, para se beneficiar. Comece <strong>hoje!</strong>
                </p>
              </div>
            </div>


            {/* <div className="col-image col-12 col-text">
              <Carousel className="Carousel">
                <Carousel.Item>
                  <img className="d-block w-100" src={Places} alt="First slide" />
                  <Carousel.Caption>
                    <h3>Localize estabelecimentos próximos a você.</h3>
                    <p>
                      A QueueUp é um sistema de gerenciamento de filas móvel para
                      seus clientes reservar bilhetes e filas nos diferentes
                      serviços de suas agências / locais. O aplicativo do
                      consumidor é para os clientes fazerem o download em seus
                      próprios dispositivos. É ideal para clientes fiéis e que
                      retornam.
                  </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={MobileTotem}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Tablet</h3>
                    <p>
                      No local do estabelecimento também terá clientes que não
                      sabem ou não estão interessados ​​em usar o aplicativo. Para
                      esses clientes, você pode configurar um aplicativo para
                      tablet no local. Configure o tablet perto das filas e os
                      clientes poderão reservar ou se inscrever sem ter que
                      esperar na fila para interagir com um atendente físico.
                  </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={Alerta} alt="Third slide" />

                  <Carousel.Caption>
                    <h3>Saiba quando for a sua vez</h3>
                    <p>
                      Tanto clientes que entraram na fila virtual por meio do
                      aplicativo quanto aqueles que ingressaram a fila por meio do
                      Totem físico presente no estabelecimento parceiro, ambos
                      serão notificados por SMS de sua vez a serem atendidos.
                  </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div> */}

            <div className="row">
              <div className="col-md-6 col-12 col-text col-image-small">
                <h2>
                  Saiba quando for a sua vez.
              </h2>
                <p>
                  Tanto clientes que entraram na fila virtual por meio do
                  aplicativo quanto aqueles que ingressaram a fila por meio do
                  Totem físico presente no estabelecimento parceiro, ambos
                  serão notificados por SMS de sua vez a serem atendidos.
                </p>
              </div>
              <div className="col-md-6 col-12 col-image-small">
                <img src={Alerta} alt="A beautiful landscape" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-12 col-image-small">
                <img src={MobileTotem} alt="A beautiful landscape" />
              </div>
              <div className="col-md-6 col-12 col-text col-image-small">
                <h2>
                  Tablet
              </h2>
                <p>
                  No local do estabelecimento também terá clientes que não
                  sabem ou não estão interessados ​​em usar o aplicativo. Para
                  esses clientes, você pode configurar um aplicativo para
                  tablet no local. Configure o tablet perto das filas e os
                  clientes poderão reservar ou se inscrever sem ter que
                  esperar na fila para interagir com um atendente físico.
                </p>
              </div>
            </div>


            <div className="row">
              <div className="col-md-6 col-12 col-text col-image-small">
                <h2>
                  Localize estabelecimentos próximos a você.
              </h2>
                <p>
                  A QueueUp é um sistema de gerenciamento de filas móvel para
                  seus clientes reservar bilhetes e filas nos diferentes
                  serviços de suas agências / locais. O aplicativo do
                  consumidor é para os clientes fazerem o download em seus
                  próprios dispositivos. É ideal para clientes fiéis e que
                  retornam.
                </p>
              </div>
              <div className="col-md-6 col-12 col-image-small">
                <img src={Places} alt="A beautiful landscape" />
              </div>
            </div>



          </div>
        </div>
      </SRLWrapper>
    </Layout>
  );
};

export default ContentPageTwo;
