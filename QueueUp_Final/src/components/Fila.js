import React, { Component } from "react";

export default class Fila extends Component {
    render() {
        return (
            <div className="container">


                <button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#modalFila">Fila</button>


                <div className="modal fade" id="modalFila" tabindex="-1" role="dialog" aria-labelledby="modalFilaLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="avatar">
                                    <img className="imagemLog" src="../assets/images/queueup_logo.png" alt="Avatar" />
                        </div>
                                    <h5 className="modal-title">QueueUp</h5>

                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>

                                <div className="modal-body">
                                    <h4 className="modal-title">Mesa para quantos?</h4>

                                    <div className="qty mt-5">
                                        <span className="minus bg-dark">-</span>
                                        <input type="number" className="count" name="qty" value="1" />
                                        <span className="plus bg-dark">+</span>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12"><label id="nmFila">Qual o nome e sobrenome da pessoa que vai entrar na
                            fila?</label></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-9"><input type="text" className="form-control" id="campoNmFila" required="required" /></div>
                                    </div>

                                    <div className="col-sm-9"> <button type="button" className="btn btn-dark btn-block btn-lg">Entrar na fila</button></div>
                                </div>

                                <div className="modal-footer">

                                </div>
                            </div>
                        </div>
                    </div>




                </div>

                
                );
            }
}