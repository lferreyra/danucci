import React from 'react'
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
   
        <nav className="nav link_header d-flex align-items-center font-weight-light text-secondary">
            
            <NavLink className="navbar-brand" to="/">Danucci</NavLink>
                   
               <NavLink className="link" classNameActive="active" to={"/category/Yogures"}>Yogures</NavLink>
                
              
                    <NavLink className="link" classNameActive="active" to={"/category/Vegano"}>Veganos</NavLink>
             
                
                    <NavLink className="link" classNameActive="active" to={"/category/Jelly"}>Jellys</NavLink>
              
                
                    <NavLink className="link" classNameActive="active" to={"/contacto"}>Contacto</NavLink>
               
              
                <NavLink classNameActive="active" to={"/cart"}> 
             
                </NavLink>
                                      
            </nav>
    );
}

export default Navbar
