import React, { Component } from 'react'
import

class Productos extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = [
    //         { id: 1, name: 'Camisa ReactJs', precio: 10 },
    //         { id: 2, name: 'Camisa VueJs', precio: 15 },
    //         { id: 3, name: 'Camisa Angular', precio: 20 },
    //         { id: 4, name: 'Camisa Node.js', precio: 25 }   
    //     ]
    // }

    state = {
        productos: [
            { id: 1, name: 'Camisa ReactJs', precio: 10 },
            { id: 2, name: 'Camisa VueJs', precio: 15 },
            { id: 3, name: 'Camisa Angular', precio: 20 },
            { id: 4, name: 'Camisa Node.js', precio: 25 }
        ],
        totalCarrito: 500,
        cliente: 'Roberto Carlos'
    };

    render() {
        const productos = this.state;
        console.log('productos', productos)
        return (
            <h1>Lista de Productos</h1>
            { productos.map(producto => (
                
            ))}
        );
    }
}

export default Productos;