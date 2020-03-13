import React from 'react';
import './style.css'


const Principal = () => (
  <div>
        <div className="wrapper">
    <div className="sidebar">
    <img src="https://mocoto.com.br/wp-content/uploads/2018/12/apple-touch-icon-1.png"  class="rounded-circle mainrest"/>
        <ul>
            <li><a href="#"><i className="fas fa-home"></i>Home</a></li>
            <li><a href="#"><i className="fas fa-user"></i>Profile</a></li>
            <li><a href="#"><i className="fas fa-address-card"></i>About</a></li>
        </ul> 
        <div class="social_media">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
</div>
        <div className="container mainrestc">
        <div className="row">
        <div className="col-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Beatriz Viana</td>
                <td>QueueUp</td>
                <td>
                  <button type="button" className="btn btn-primary"><span class="oi oi-brush"></span></button>
                  <button type="button" className="btn btn-danger"><span class="oi oi-trash"></span></button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Diego Costa</td>
                <td>QueueUp</td>
                <td>
                  <button type="button" className="btn btn-primary"><span className="oi oi-brush"></span></button>
                  <button type="button" className="btn btn-danger"><span className="oi oi-trash"></span></button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                    <td>Fernada Oliveira</td>
                    <td>QueueUp</td>
                    <td>
                      <button type="button" className="btn btn-primary"><span class="oi oi-brush"></span></button>
                      <button type="button" className="btn btn-danger"><span class="oi oi-trash"></span></button>
                    </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
    </div>
    <form className="form-inline mainrest">
      <div className="form-group mx-sm-3 mb-2">
      <label for="inputPassword2" className="sr-only">Password</label>
      <input className="form-control form-control-lg" type="text" placeholder="Digite seu nome"/>
      </div>
      <button type="submit" className="btn btn-primary mb-2">ADICIONAR</button>
    </form>
    <div className="col-12 cardcol">
      <div className="card bg-light mb-3">
      <div className="card-header">Mesas</div>
      <div className="card-body">
      <h6 className="card-title">15</h6>
      </div>
    </div>
    </div>
      
    
    
    
    
    
    
    
  
    
  </div>
    
    
)
    export default Principal;

