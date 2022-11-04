import './App.css'
import ItemListContainer from './Componentes/Cart/ItemListContainer';
import Contador from './Componentes/Contador';
import Navbar from './Componentes/Navbar/Navbar';

function App() {
  const onAdd = () => console.log("sumar al carrito funciona")
  return (
    <div className="App">
      <header className="Danucci">
           
      </header>
      <Navbar />
      <hr />"
      <ItemListContainer saludo="Bienvenido a Danucci" nombre="amiguito" />
      <Contador stock="10" onAdd={onAdd}/>


    </div>
  );
}

export default App;