import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import api from "../services/api";

class cadCliente extends Component {

    constructor(props){
        super(props)

        this.state = {
            nomeCli: "",
            emailCli: "",
            senhaCli: "",
            telCli: "",
            cpfCli: "",
            idade: "18",
            generoCli: "",
            error: ""
        }

    }

    handleChange = (event) => {
        const state = Object.assign({}, this.state);
        let field = event.target.id;
        state[field] = event.target.value;
    
        this.setState(state);
    };

    handleRegister = async (state) => {

        const credenciais = {
            login: this.state.cpfCli, 
            senha: this.state.senhaCli
        }

        try {
            const data = await api.post("/usuarios/criar", {
                nome: this.state.nomeCli,
                email: this.state.emailCli,
                credenciais: credenciais,
                telefone: this.state.telCli,
                cpf: this.state.cpfCli,
                idade: this.state.idade,
                genero: this.state.generoCli
            })

            if(data.status === 200) {
                this.props.history.push("/login")
            }

        } catch(data) {
            this.setState({error: "Erro ao tentar cadastrar"});
        }
    }

    render() {
        console.log(this.state)
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Cadastro de Usuário</h3>

                        <div className="form-group">
                            <label>Nome Completo</label>
                            <input onChange={(evt) =>this.handleChange(evt)} id="nomeCli" name="nomeCliente" type="text" className="form-control" placeholder="Nome Completo" required="required" />
                        </div>

                        <div className="form-group">
                            <label>CPF</label>
                            <input onChange={(evt) =>this.handleChange(evt)} id="cpfCli" name="cpfCliente" type="text" className="form-control" placeholder="000.000.000-00" required="required" />
                        </div>

                        <div className="form-group">
                            <label>E-mail</label>
                            <input onChange={(evt) =>this.handleChange(evt)} id="emailCli" name="emailCliente" type="email" className="form-control" placeholder="exemplo@exemplo.com.br" required="required" />
                        </div>

                        <div class="form-group">
                            <label>Gênero</label>
                            <select onChange={(evt) =>this.handleChange(evt)} id="generoCli" class="custom-select form-control">
                                <option selected>Selecione o Gênero</option>
                                <option value="F">Feminino</option>
                                <option value="M">Masculino</option>
                                <option value="OUTROS">Outro</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Telefone</label>
                            <input onChange={(evt) =>this.handleChange(evt)} id="telCli" name="telCliente" type="text" className="form-control" placeholder="Ex.: (00) 00000-0000" required="required" />
                        </div>

                        <div className="form-group">
                            <label>Senha</label>
                            <input onChange={(evt) =>this.handleChange(evt)} id="senhaCli" name="senhaCliente" type="password" className="form-control" placeholder="Senha" required="required" />
                        </div>

                        <div className="form-group">
                            <label>Confirmar senha</label>
                            <input onChange={(evt) =>this.handleChange(evt)} id="confsenhaCli" name="confsenhaCliente" type="password" className="form-control" placeholder="Confirmar Senha" required="required" />
                        </div>

                        <button onClick={this.handleRegister} className="btn btn-primary btn-block button-pink">Cadastrar</button>
                        <p className="forgot-password text-right">
                            Já possui uma conta? Faça <a href="#">login</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(cadCliente);