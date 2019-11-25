import React, { Component, Fragment } from 'react';
import Producto from './Producto';

class ListaProductos extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = [
    //         { id: 1, name: 'Camisa ReactJs', precio: 10 },
    //         { id: 2, name: 'Camisa VueJs', precio: 15 },
    //         { id: 3, name: 'Camisa Angular', precio: 20 },
    //         { id: 4, name: 'Camisa Node.js', precio: 25 }   
    //     ]
    // }

    state = ({
        productos: [],
        totalCarrito: 500,
        cliente: 'Roberto Carlos'
    });

    componentDidMount() {
        console.log('1 component did mounted');
        this.setState({
            productos: [
                { id: 1, name: 'Camisa ReactJs', precio: 10 },
                { id: 2, name: 'Camisa VueJs', precio: 15 },
                { id: 3, name: 'Camisa Angular', precio: 20 },
                { id: 4, name: 'Camisa Node.js', precio: 25 }
            ]
        });
    }

    componentWillMount() {
        console.log('2 component will mount')
    }

    componentWillUpdate() {
        console.log('3 component will update')
    }

    componentWillUnmount() {
        console.log('4 component will unmount')
    }

    render() {
        console.log('5 component render')
        const {productos} = this.state;
        console.log('6 productos', productos)
        return (
            <Fragment>
                <h1>Lista de Productos</h1>
                {productos.map(producto => (<Producto key={producto.id} producto={producto}/>))}
            </Fragment>
        );
    }
}

export default ListaProductos;