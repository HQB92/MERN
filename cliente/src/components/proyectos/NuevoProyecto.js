import React, { Fragment, useContext, useState } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import Proyecto from './proyecto';

const NuevoProyecto = () => {
    //Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario, agregarProyecto } = proyectosContext;
    //State para proyectos
    const [proyecto, guardarProyecto] = useState({
        nombre:''

    });
    //extraer nombre de proyecto
    const { nombre } = proyecto;
    const onChangeProyecto = e =>{
        guardarProyecto({
           ...proyecto,
           [e.target.name] : e.target.value
        })
    };

    //Cuando el usuario envia un proyecto
    const onSubmitProyecto = e =>{
        e.preventDefault();

        //Validar el proyecto
        if (nombre === '') {
            return;
        }

        //agregar al state
        agregarProyecto(Proyecto)
        //Reiniciar el form
    }

    const onClickFormulario = () => {
        mostrarFormulario();
    }
    return (
        <Fragment>
        <button 
            type="button"
            className="btn btn-block btn-primario"
            onClick={onClickFormulario}
        >Nuevo Proyecto</button>

        {
            formulario
            ?
                (<form 
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProyecto}>
                    <input
                        type="text"
                        name="nombre"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        value={nombre}
                        onChange={onChangeProyecto}
                    />
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar Proyecto"
                    />
                </form>)
            : null
        }

        </Fragment>
        
    );
}

export default NuevoProyecto;