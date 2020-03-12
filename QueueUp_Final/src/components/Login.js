import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import api from "../services/api";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login: "",
            senhaCli: ""
        }
    }

    handleChange = (event) => {
        const state = Object.assign({}, this.state);
        let field = event.target.id;
        state[field] = event.target.value;

        this.setState(state);
    };

    handleLogin = async (state) => {
        const credenciais = {
            login: this.state.login,
            senha: this.state.senha
        }
        
        api.post("/login", credenciais)
        .then((resp) => {
            if (resp.status === 200) {
                this.props.history.push("/main")
            }
            console.log(resp)
            console.log(resp.status)
        })
    }

    render() {
        console.log(this.state)

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Login</h3>

                        <div className="form-group">
                            <label>CPF/CNPJ</label>
                            <input id='loginCli' onChange={(evt) => this.handleChange(evt)} type="text" className="form-control" placeholder="Insira seu CPF ou CNPJ" />
                        </div>

                        <div className="form-group">
                            <label>Senha</label>
                            <input id='senhaCli' onChange={(evt) => this.handleChange(evt)} type="password" className="form-control" placeholder="Insira sua senha" />
                        </div>

                        <button
                            onClick={this.handleLogin} className="btn btn-primary btn-block button-pink">Entrar</button>
                        <p className="forgot-password text-right">
                            Esqueceu sua <a href="#">senha?</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Login)