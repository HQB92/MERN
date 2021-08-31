import React, { Fragment }from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {
    const tareasProyecto = [
        {nombre: 'Elejir Plataforma', estado: true},
        {nombre: 'Elejir colores', estado: false},
        {nombre: 'Elejir Plataforma Pago', estado: false},
        {nombre: 'Elejir hosting', estado: true},
    ];

    return (
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ?(<li className="tarea"><p>No Hay Tareas</p></li>)
                    :tareasProyecto.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
}
 
export default ListadoTareas;