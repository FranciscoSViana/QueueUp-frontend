import React, { Component } from "react";

export default class cadCliente extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form method="post">
                        <h3>Cadastro de Usuário</h3>

                        <div className="form-group">
                            <label>Nome Completo</label>
                            <input id="nomeCli" name="nomeCliente" type="text" className="form-control" placeholder="Nome Completo" required="required" />
                        </div>

                        <div className="form-group">
                            <label>CPF</label>
                            <input id="CpfCli" name="cpfCliente" type="text" className="form-control" placeholder="000.000.000-00" required="required" />
                        </div>

                        <div className="form-group">
                            <label>E-mail</label>
                            <input id="EmailCli" name="emailCliente" type="email" className="form-control" placeholder="exemplo@exemplo.com.br" required="required" />
                        </div>

                        <div class="form-group">
                            <label>Gênero</label>
                            <select class="custom-select form-control">
                                <option selected>Selecione o Gênero</option>
                                <option value="1">Feminino</option>
                                <option value="2">Masculino</option>
                                <option value="3">Outro</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Telefone</label>
                            <input id="telCli" name="telCliente" type="text" className="form-control" placeholder="Ex.: (00) 00000-0000" required="required" />
                        </div>

                        <div className="form-group">
                            <label>Senha</label>
                            <input id="senhaCli" name="senhaCliente" type="password" className="form-control" placeholder="Senha" required="required" />
                        </div>

                        <div className="form-group">
                            <label>Confirmar senha</label>
                            <input id="confsenhaCli" name="confsenhaCliente" type="password" className="form-control" placeholder="Confirmar Senha" required="required" />
                        </div>




                        <button type="submit" className="btn btn-primary btn-block button-pink">Cadastrar</button>
                        <p className="forgot-password text-right">
                            Já possui uma conta? Faça <a href="#">login</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}