import React, { Component } from "react";
import SRLLogo from "../assets/images/SRL_Logo.png";

export default class cadRestaurante extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form method="post">
                        {/* <div className="col-md-6">
                <img
                    src={SRLLogo}
                />
                </div> */}

                        <h3>Cadastro de estabelecimento</h3>

                        <div className="form-group">
                            <div className="row">
                                <div className="fileUpload btn btn-dark">
                                    <span>Escolha uma foto</span>
                                    <input type="file" className="upload" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Nome do estabelecimento</label>
                            <input type="text" className="form-control nomeRestaurante" placeholder="Ex.: Terraço Itália" />
                        </div>

                        <div className="form-group">
                            <label>CNPJ </label>
                            <label class="cnpjNum">(Digite apenas números)</label>
                            <input type="text" className="form-control cnpjRestaurante" placeholder="0000000/0000-00" />
                        </div>

                        <div className="form-group">
                            <label>CEP</label>
                            <label class="cepNum">(Digite apenas números)</label>
                            <input type="text" className="form-control cepRestaurante" placeholder="00000-000" />
                        </div>

                        <div className="form-group">
                            <label>Bairro</label>
                            <input type="text" className="form-control bairroRestaurante" placeholder="Ex.: República" />
                        </div>

                        <div className="form-group">
                            <label>Logradouro</label>
                            <input type="text" className="form-control logradouroRestaurante" placeholder="Ex.: R. Haddock Lobo" />
                        </div>

                        <div className="form-group">
                            <label>Número</label>
                            <input type="text" className="form-control numeroRestaurante" />
                        </div>

                        <div className="form-group">
                            <label>Cidade</label>
                            <input type="text" className="form-control cidadeRestaurante" placeholder="Ex.: São Paulo" />
                        </div>

                        <div className="form-group">
                            <label>Estado</label>
                            <input type="text" className="form-control estadoRestaurante" placeholder="Ex.: São Paulo" />
                        </div>

                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" className="form-control emailRestaurante" placeholder="exemplo@exemplo.com.br" />
                        </div>

                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="text" className="form-control telRestaurante" placeholder="(11)00000-0000" />
                        </div>

                        <div className="form-group">
                            <label>Culinária</label>
                            <input type="text" className="form-control culinariaRestaurante" placeholder="Ex.: Comida Italiana" />
                        </div>

                        <div className="form-group">
                            <label>Horário de funcionamento</label>
                            <div className="row">
                                <div className="col-sm-5"> <input id="hrRest" className="hr1Restaurante" type="time" class="form-control" required="required" /></div>
                                <div class="col-sm-2"> <label>às</label></div>
                                <div className="col-sm-5"> <input id="hrRest" className="hr2Restaurante" type="time" class="form-control" required="required" /></div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Senha</label>
                            <input type="password" className="form-control senhaRestaurante" />
                        </div>

                        <div className="form-group">
                            <label>Confirmar Senha</label>
                            <input type="password" className="form-control senhaRestaurante" />
                        </div>




                        <button type="submit" className="btn btn-primary btn-block button-pink">Cadastrar</button>
                        <p className="forgot-password text-right">
                            Já possui uma conta? Faça <a href="#">login</a>
                        </p>
                    </form >
                </div>
            </div>
        );
    }
}