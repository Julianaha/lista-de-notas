import React, { Component } from "react";
import "./style.css";

class Formulario extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input
          type="text"
          placeholder="Titulo"
          className="form-cadastro_input"
        ></input>
        <textarea
          placeholder="Escreva sua nota"
          rows={15}
          className="form-cadastro_input"
        ></textarea>
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }
}

export default Formulario;
