import React, { Fragment } from 'react';

const Producto = ({producto}) => (
    <div>
        <h1>{producto.name}</h1>
        <p> precio: ${producto.precio}</p>
    </div>

)

export default Producto;