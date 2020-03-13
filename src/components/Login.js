import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Login</h3>

                        <div className="form-group">
                            <label>CPF/CNPJ</label>
                            <input type="text" className="form-control" placeholder="Insira seu CPF ou CNPJ" />
                        </div>

                        <div className="form-group">
                            <label>Senha</label>
                            <input type="password" className="form-control" placeholder="Insira sua senha" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block button-pink">Entrar</button>
                        <p className="forgot-password text-right">
                            Esqueceu sua <a href="#">senha?</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}