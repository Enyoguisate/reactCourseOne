import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Productos from './components/ListaProductos';

function App() {
  const empleado = {
    nombre: 'Juan Pablo',
    trabajo: 'Desarrollador Web'
  }
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      {/*  */}
      <Header titulo="Tienda Virtual"></Header>
      <Productos></Productos>
      <Footer fecha={fecha}></Footer>
    </Fragment>
  );
}

export default App;
