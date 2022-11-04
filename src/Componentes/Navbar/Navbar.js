import React from 'react'
import CartWidget from '../Cart/CartWidget';
import logo from "../Img/logoDANUCCI.png";

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <ul className="nav d-flex align-items-center font-weight-light text-secondary">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="./"><img src={logo} width="48" alt="Logo" /></a> 
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="">Pedí tu Danucci</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="">Catalogo</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="">Promos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="">Contacto</a>
                </li>
              
                <CartWidget />
                <span className="font-weight-bold">8</span>
                       
            </ul>
        </div>
    </div>
  );
}

export default Navbar