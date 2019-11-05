import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../componentes/Navbar.scss';

const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  const fecharMenu = () => {
    setMenuAtivo(false)
  }

  return (
    <div className="Navbar">
      <nav>
        <div id="nome"><p>caieiras  cultere</p></div>
        
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <Link onClick={fecharMenu} to="/">Home</Link>
        <Link onClick={fecharMenu} to="/cursos">Cursos</Link>
        <Link onClick={fecharMenu} to="/sobre">Sobre</Link>
        <Link onClick={fecharMenu} to="/cadastro">Cadastro</Link>
      </section>
    </div>
  );
};
export default Navbar;
