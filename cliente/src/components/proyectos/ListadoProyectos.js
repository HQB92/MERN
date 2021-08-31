import React, { useContext, useEffect } from 'react';
import Proyecto from './proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
const ListadoProyectos = () => {
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;
    useEffect(() => {
        obtenerProyectos();
    },[]);
    //revisar si proecto tiene contenido 
    if (proyectos.length === 0) {
        return null
    };
   
    return (
        <ul className="listado-proyecto">
            {proyectos.map(proyecto => (
                <Proyecto
                    key={Proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}

export default ListadoProyectos;