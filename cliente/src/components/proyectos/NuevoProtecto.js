import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {
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

        //agregar al state

        //Reiniciar el form
    }
    return (
        <Fragment>
        <button 
            type="button"
            className="btn btn-block btn-primario"
        >Nuevo Proyecto</button>

        <form 
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
        </form>

        </Fragment>
        
    );
}

export default NuevoProyecto;