import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState, useContext} from 'react'
import { CartContext } from '../../Context/CartContext';
import { db } from '../../services/firebaseConfig';

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email1, setEmail1] = useState('');
    const [email2, setEmail2] = useState('');
    const [phone, setPhone] = useState('');
    const [dir, setDir] = useState('');
    const [orderId, setOrderId] = useState('');

    const {cart, totalPrecio, deleteAll} = useContext(CartContext)
    const totalCarrito = totalPrecio()

    const enviarDatos = (e) => {
      e.preventDefault();
      const objOrden = {
        buyer: {
          name, 
          lastName, 
          phone, 
          email1, 
          dir
        },
        items: cart,
        total: totalCarrito,
        date: serverTimestamp(),
      };
      
      const orderCollection = collection(db, 'orders')

      addDoc(orderCollection, objOrden)
      .then((res)=> {
        setOrderId(res.id);
        deleteAll();
      })

      .catch((error)=> {
        console.log('Ha habido un error', error);
      })

  

     };

    const handleName = (e) => setName(e.target.value);
    
    const handleLastName = (e) => setLastName(e.target.value);

    const handlePhone = (e) => setPhone(e.target.value);

    const handleEmail1 = (e) => setEmail1(e.target.value);

    const handleEmail2 = (e) => setEmail2(e.target.value);

    const handleDir = (e) => setDir(e.target.value);

    if(orderId) {
      return (
        <h3> Gracias por elegirnos, tu orden de compra es {orderId}</h3>
      );
    }

  return (
    <div 
        style={{minHeight: '70vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    }}

    >
     <form action="" onSubmit={enviarDatos}>
            <imput
            type="text" 
            placeholder="Nombre" 
            name="nombre" 
            onChange={handleName}
            value={name}
            />

            <imput 
            type="text" 
            placeholder="Apellido" 
            name="apellido" 
            onChange={handleLastName}
            value={lastName} 
            />

            <imput 
            type="number" 
            placeholder="Telfono con codigo de área" 
            name="phone" 
            onChange={handlePhone}
            value={phone} 
            />

           <imput 
            type="email" 
            placeholder="Email" 
            name="email1" 
            onChange={handleEmail1}
            value={email1} 
            />
            
            <imput 
            type="email" 
            placeholder="Ingrese nuevamente su correo" 
            name="email2" 
            onChange={handleEmail2}
            value={email2} 
            />

            <imput 
            type="text" 
            placeholder="Dirección" 
            name="dir" 
            onChange={handleDir}
            value={dir} 
            />
            
            <button diseable={email1 !== email2}>Enviar</button>
            
        </form>
    </div>
  );
};

export default Form;