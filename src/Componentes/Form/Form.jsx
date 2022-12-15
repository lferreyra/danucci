import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { db } from '../../services/firebaseConfig';

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [orderId, setOrderId] = useState('');
    //crear un estado de loading

    const { cart, totalPrecio, deleteAll } = useContext(CartContext);
    const totalCarrito = totalPrecio();

    const enviarDatos = (e) => {
        e.preventDefault();
      
        const objOrden = {
            buyer: {
                name,
                lastName,
                telefono: 3516161300,
                direccion: 'Cordoba 2018',
                email: 'lucas.ferreyra@gmail.com',
            },
            items: cart,
         
            total: totalCarrito,
            date: serverTimestamp(),
        };

        const orderCollection = collection(db, 'orders');

        addDoc(orderCollection, objOrden)
            .then((res) => {
                setOrderId(res.id);
                deleteAll();
            })
            .catch((error) => {
                console.log('Hubo un error', error);
            });
    
    };

    const handleName = (e) => setName(e.target.value);

    const handleLastName = (e) => setLastName(e.target.value);

    if (orderId) {
        return (
            <h5>Gracias por tu compra tu número de seguimiento es {orderId}</h5>
        );
    }

    return (
        <div
            style={{
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form action="" onSubmit={enviarDatos}>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    onChange={handleName}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                    onChange={handleLastName}
                    value={lastName}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;