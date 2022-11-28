import React from 'react'
import { NavLink } from 'react-router-dom';
import CartWidget from '../../Cart/CartWidget';



const Navbar = () => {
  
  return (
   
        <nav className="nav link_header d-flex align-items-center font-weight-light text-secondary">
            
            <NavLink className="navbar-brand" to="/">Danucci</NavLink>
                   
               <NavLink className="links" to={"/category/Yogures"}>Yogures</NavLink>
                
              
                    <NavLink className="links" to={"/category/Vegano"}>Veganos</NavLink>
             
                
                    <NavLink className="links" to={"/category/Jelly"}>Jellys</NavLink>
              
                
                    <NavLink className="links" to={"/contacto"}>Contacto</NavLink>
               
                    <NavLink className="links"  to={"/cart"}>Cart</NavLink>

                    <CartWidget />
                                      
            </nav>
    );
}

export default Navbar
