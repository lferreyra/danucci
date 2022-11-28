import React from 'react';
import './App.css';
import ItemListContainer from './Componentes/Cart/ItemListContainer';
import Navbar from './Componentes/Navbar/Navbar';
import './Componentes/Navbar/navbar.css';
import Footer from './Componentes/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemDetailContainer from './Componentes/Cart/ItemDetailContainer';
import Cart from './Componentes/Cart/Cart'
import Contacto from './Componentes/Contacto';
import Form from './Componentes/Form/Form';
import CartProvider from './Context/CartContext';


const App=() => {
   return (
    <BrowserRouter> 
        <CartProvider>
          <Navbar className="NavBar" /> 
              <hr />  
            <Routes>
                <Route exact path='/' element={<ItemListContainer />}/>    
                <Route exact path="/category/:categoryName" element={<ItemListContainer />}/>
                <Route exact path="/detail/:idProd" element={<ItemDetailContainer />}/>
                <Route exact path="/contacto" element={<Contacto />}/>
                <Route exact path="/cart" element={ <Cart />}/>
                <Route exact path="/checkout" element={ <Form />}/>
            </Routes>
            <Footer />
        </CartProvider>
     </BrowserRouter> 
  );
};
export default App;
