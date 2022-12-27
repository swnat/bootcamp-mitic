import React from 'react';
import {Link} from "react-router-dom";

const Administrador = props => {
    return (
        <>
            <div className="d-grid gap-2">
                <Link className="btn btn-primary" type="button" to={'/administrador/usuario'}>
                    Usuarios
                </Link>
                <Link className="btn btn-success" type="button" to={'/administrador/producto'}>
                    Productos
                </Link>
            </div>
        </>
    );
};


export default Administrador;