import "./Seccion.css";
import hogwarts from './foto-hogwarts.jpg';
import Boton from "./Boton/Boton";
import React from 'react';


const handlerClicBoton = () => {
    alert('Hiciste clic en el boton');
};

function Seccion() {
    return (
        <section className="seccion">
            <h2>Informacion sobre Hogwarts</h2>
            <p>
                La escuela de magia y hechicería de Hogwarts es un lugar mágico donde los estudiantes se convierten en magos.
            </p>
            <div className="contenedor-img">
                <img src={hogwarts} alt="Hogwarts" />
            </div>
            <Boton texto="Leer más" />
            <Boton color="red" texto="Comprar" onClick={handlerClicBoton} />
        </section>
    );
}

export default Seccion;
