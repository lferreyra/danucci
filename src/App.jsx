import React from 'react';
import './App.css';
import ItemListContainer from './Componentes/Cart/ItemListContainer';
import Navbar from './Componentes/Navbar/Navbar';
import './Componentes/Navbar/navbar.css';
import Footer from './Componentes/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemDetailContainer from './Componentes/Cart/ItemDetailContainer';
import Cart from './Componentes/Cart/Cart';
import Form from './Componentes/Form/Form';
import CartProvider from './Context/CartContext';
import Contacto from './Componentes/Contacto'


const App=() => {
   return (
    <BrowserRouter> 
        <CartProvider>
          <Navbar className="NavBar" /> 
              <hr />  
            <Routes>
                <Route path='/' element={<ItemListContainer />} />    
                <Route path="/category/:categoryName" element={<ItemListContainer />} />
                <Route path="/detail/:idProd" element={<ItemDetailContainer />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Form />} />
            </Routes>
            <Footer />
        </CartProvider>
    </BrowserRouter>
  );
};
export default App;
