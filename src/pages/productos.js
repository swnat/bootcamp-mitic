import React from 'react';
import PropTypes from 'prop-types';

const Productos = props => {
    const productos = [
        {nombre: 'Hamburguesa', precio: '20.000'},
        {nombre: 'Lomito', precio: '25.000'},
        {nombre: 'Empanada', precio: '5.000'},
    ];

    return (
        <div className="row">
            <div className="col-12">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col-6">Nombre</th>
                        <th scope="col-3">Precio</th>
                        <th scope="col-3"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {productos.map((producto, index) =>
                        <tr>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio}</td>
                            <td>
                                <button type="submit" className="btn btn-primary me-1">
                                    <span className="bi bi-pencil-square"></span>
                                </button>
                                <button type="submit" className="btn btn-secondary">
                                    <span className="bi bi-trash"></span>
                                </button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default Productos;
