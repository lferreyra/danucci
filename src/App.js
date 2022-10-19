import './App.css'
import ItemListContainer from './Cart/ItemListContainer';
import Navbar from './Navbar/Navbar.js';

function App() {
  return (
    <div className="App">
      <header className="Danucci">
           
      </header>
      <Navbar />
      <ItemListContainer saludo="Bienvenido a Danucci" nombre="amiguito" />


    </div>
  );
}

export default App;