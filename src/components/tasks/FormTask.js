import React from 'react';

const FormTask = () => {
    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input type="text" className="input-text" placeholder="Nombre de la tarea" name="name"/>
                </div>
                <div className="contenedor-input">
                    <input type="submit" className="btn tbn-primario btn-submit btn-block" value="Agregar tarea"/>
                </div>
            </form>
        </div>
    );
};

export default FormTask;