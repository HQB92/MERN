import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
    AGREGAR_PROYECTO,
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTO } from '../../types';
import uuid from 'uuid';
import Proyecto from '../../components/proyectos/proyecto';

const ProyectoState = props => {
    const proyectos = [
        {id: 1, nombre:'Tienda Virtual'},
        {id: 2, nombre:'Intranet'},
        {id: 3, nombre:'Sitio Web'}
    ]
    const initialState = {
        proyectos: [],
        formulario: false
    }

    //Dispach para ejecutar las accions
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Funciones CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTO,
            payload: proyectos
        })
    }
    //Agregar Nuevo Proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuid.v4();
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: Proyecto
        })

    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;