import React from 'react';
import './App.css';
import ItemListContainer from './Componentes/Cart/ItemListContainer';
import Contador from './Componentes/Contador';
import Navbar from './Componentes/Navbar/Navbar';
import ItemDetail from './Componentes/Cart/ItemDetail';
import './Componentes/Navbar/navbar.css';
import Footer from './Componentes/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Item from './Componentes/Cart/Item';
import Cart from './Componentes/Cart/Cart'


function App() {
  const onAdd = (qty) => console.log(qty)
  return (
  
    <BrowserRouter>.
      
      <Navbar />
      <hr /> 
      <Routes>
      <Route path='/' element={ <ItemListContainer /> }/>    
      <Route path='/detail' element={ <Item /> }/>
      <Route path='/cart' element={ <Cart /> }/>    
     
      </Routes>
      <Contador stock="10" onAdd={onAdd} /> 
      <Footer />

    </BrowserRouter>
  );
}

export default App;