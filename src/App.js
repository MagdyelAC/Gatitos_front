import React, { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Addgatitos from "./components/add-gatitos.component";
import GatitosList from "./components/gatitos-list.component";
import Gatitos from "./components/galeriaGatitos";
import Perfil from "./components/perfil";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-blue bg-blue">
          <a href="/perfil" className="navbar-brand">
            Gatitos
          </a>
          <div className="navbar-nav mr-auto">
            <li>
              <Link to={"/inicio"} className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/gatitos"} className="nav-link">
                GatitosList
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/perfil"} className="nav-link">
                Perfil
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>React Firestore CRUD</h2>
          <Routes>
            <Route exact path="/inicio" element={<Gatitos/>} />
            <Route path= "/gatitos"  element={<GatitosList/>} />
            <Route path="/add" element={<Addgatitos/>} />
            <Route path="/perfil" element={<Perfil/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
