import React from "react";
import Layout from "./Layout";
import { SRLWrapper } from "simple-react-lightbox";
import Remote from "../assets/images/Remote.png";
import Notification from "../assets/images/Notification.png";
import Temporeal from "../assets/images/Temporeal.png";
import SaibaQuem from "../assets/images/SaibaQuem.png";
import Posicao from "../assets/images/Posicao.png";
import HowItWorks from "../assets/images/HowItWorks.png";
const Content = () => {
  return (
    <Layout>
      <SRLWrapper>
        <div id="content-page-one" className="container content">
          <div className="row">
            <div className="col-md-6 col-12 col-text">
              <h2>Um novo jeito de organizar filas de espera</h2>
              <p>
                Com a <strong>QueueUp</strong> seu restaurante não só reune em
                uma única plataforma a gestão de filas de espera do seu
                estabelecimento, como também proporciona uma maior visibilidade
                para os usuários da nossa plataforma, através de sistemas de
                feedbacks. Além disso, como melhor gestão de filas, a plataforma
                garante maior praticidade e, consequentemente, maior satisfação
                para seus clientes uma vez que não precisam sair de casa para
                entrarem na fila de espera, gerando uma melhor qualidade no
                atendimento e experiência no seu estabelecimento.
              </p>
            </div>
            <div className="col-md-6 col-12 col-image">
              <img
                src="https://skiplinostorage.blob.core.windows.net/skiplino-wordpress/2018/04/landingpageiso-13-min.png"
                alt="New York City - Architecture"
              />
            </div>

            <div className="col-md-4 col-12 col-image-small col-text">
              <img src={Temporeal} alt="The mist in the forest" />
              <h5>Acompanhamento em tempo real</h5>
              <p>
                A ferramenta de relatórios avançados da QueueUp permite
                monitorar as filas em suas filiais e para cada serviço e avaliar
                o desempenho de seus agentes
              </p>
            </div>

            <div className="col-md-4 col-12 col-image-small col-text">
              <img src={Notification} alt="Parallels building" />
              <h5>SMS e Notificações</h5>
              <p>
                Seja para obter um aviso no local ou remotamente, seus clientes
                agora podem ser alertados por SMS, email ou pelo aplicativo
                móvel quando for a sua vez
              </p>
            </div>

            <div className="col-md-4 col-12 col-image-small col-text">
              <img src={Remote} alt="Between two mountains" />
              <h5>Fila virtual</h5>
              <p>
                A solução da QueueUp permite que seus clientes formem filas
                virtuais sem ter que sair de casa ou do trabalho
              </p>
            </div>

            <div className="row">
              <div className="col-md-6 col-12 col-image-custom">
                <img src={SaibaQuem} alt="A beautiful landscape" />
              </div>
              <div className="col-md-6 col-12 col-text">
                <h2>
                  Permita que seus clientes entrem na fila antes mesmo de chegar no restaurante!
              </h2>
                <p>
                  Aumente seu fluxo de clientes atraindo quem destes não iriam por conta de sua fila de espera.
                </p>
              </div>
            </div>



            <div className="row">
              <div className="col-md-8 col-12 col-text">
                <h2>
                  Diminua a desistência do seu restaurante
              </h2>
                <p>
                  Forneça comodidade e transparência para toda sua fila, fazendo seus clientes aproveitarem ainda mais o passeio.
                </p>
              </div>
              <div className="col-md-4 col-12 col-image-custom">
                <img src={Posicao} alt="A beautiful landscape" />
              </div>
            </div>



            <div className="row">
              <div className="col-md-6 col-12 col-image">
                <img src={HowItWorks} alt="A beautiful landscape" />
              </div>
              <div className="col-md-6 col-12 col-text">
                <h2>
                  Como funciona?
              </h2>
                <p>
                  <strong> 1A. </strong> Clientes que utilizam o serviço da QueueUp aguardam sua vez já cientes da sua posição na fila de espera.
                  <br />
                  <br />
                  <strong> 1B. </strong> Clientes físicos que não possuem o aplicativo da QueueUp entram na fila através do Toten posicionado na entrada do estabelecimento.
                  <br />
                  <br />
                  <strong> 2. </strong>Com a fila devidamente organizada, os clientes aguardam sua vez sendo possível visualizar a fila através de uma tela (opcional).



                </p>
              </div>
            </div>











          </div>
        </div>
      </SRLWrapper>
    </Layout>
  );
};

export default Content;
