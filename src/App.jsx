import React from 'react';
import './App.css';
import ItemListContainer from './Componentes/Cart/ItemListContainer';
import Contador from './Componentes/Contador';
import Navbar from './Componentes/Navbar/Navbar';
import './Componentes/Navbar/navbar.css';
import Footer from './Componentes/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ItemDetailContainer from './Componentes/Cart/ItemDetailContainer';
import Cart from './Componentes/Cart/Cart'
import Contacto from './Componentes/Contacto';


const App=() => {
  const onAdd = (qty) => console.log(qty)
  return (
    <div> 
      <Router>
      <Navbar className="NavBar"/> 
      <hr />  
       <Routes>
          <Route exact path='/' element={<ItemListContainer />}/>    
          <Route exact path="/category/:categoryName" element={<ItemListContainer />}/>
          <Route exact path="/detail/:idProd" element={<ItemDetailContainer />}/>
          <Route exact path="/contacto" element={<Contacto />}/>
          <Route exact path="/cart" element={ <Cart />}/>    
       </Routes>
      </Router>
      <Contador stock="10" onAdd={onAdd} /> 
      <Footer />
  </div> 
  );
}

export default App;
