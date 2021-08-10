import React from 'react';
import Proyecto from './proyecto';
const ListadoProyectos = () => {
    const proyectos = [
        {nombre:'Tienda Virtual'},
        {nombre:'Intranet'},
        {nombre:'Sitio Web'}
    ]

    return (
        <ul className="listado-proyecto">
            {proyectos.map(proyecto => (
                <Proyecto
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}

export default ListadoProyectos;