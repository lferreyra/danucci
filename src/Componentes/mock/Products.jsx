
export const products = [
    
    {
        id: 1, 
        nombre: "Colchón de Frutas",
        descripcion: "Trozos de pera, durazno y ananá, con una suave capa crema descremada y crocante granola con miel que lo completan todo.", 
        peso: "350g.", 
        imagen: "https://i.postimg.cc/2SS3m799/10.png",
        category:'Colchón de frutas',  
        precio: 350, 
        stock: 8,
    },
    {
        id: 2, 
        nombre:"Jelly", 
        descripcion: "Trozos de pera, durazno y ananá, con una deliciosa gelatina de cereza y una suave crema descremada para tu deleite.", 
        peso: "350g.", 
        imagen: "https://i.postimg.cc/R03FJVBc/11.png",
        category:'Jelly',  
        precio: 350, 
        stock: 5,
    },
    {
        id: 3, 
        nombre: "Yogur Mousse de Frutilla", 
        descripcion: "Trozos de pera, durazno y ananá, con un suave mousse de yogur descremado y crocante granola tostada.", 
        peso: "350g.", 
        imagen:"https://i.postimg.cc/650TDmcG/9.png",
        category:'Yogures',  
        precio: 350, 
        stock: 7,
    },
    {
        id: 4, 
        nombre:"Yogur Mousse de Vainilla",
        descripcion: "Trozos de pera, durazno y ananá, con un suave mousse de yogur descremado y crocante granola tostada.", 
        peso:"350g.", 
        imagen: "https://i.postimg.cc/sxP1f6Rq/8.png",
        category:'Yogures', 
        precio:350, 
        stock:6,
    },
    {
        id: 5, 
        nombre: "Colchón de Frutas VEGANO", 
        descripcion: "Trozos de pera, durazno y ananá, con un suave crema NO LACTEA y crocante granola tostada.", 
        peso: "350g.", 
        imagen:"https://i.postimg.cc/ZqqN7ShR/7.png",
        category:'Vegano', 
        precio: 350, 
        stock: 9, 
    },

];

export const getProducts = (categoryName) => {
    return new Promise((res, rej) => {
        const prodFiltrados = products.filter(
            (prod) => prod.category === categoryName
        );
        const ref = categoryName ? prodFiltrados : products;
        setTimeout(() => {
            res(ref);
        }, 500);
    });
};

export const getProduct = (idProd) => {
    return new Promise((res, rej) => {
        const product = products.find((prod) => prod.id === +idProd);
        setTimeout(() => {
            res(product);
        }, 2000);
    });
};