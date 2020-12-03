import "./cursos.css"
import Fondo1 from "../../assets/img/fondo1.jpeg"
function Curso() {
    return (
  <section className="about-services" id="cursos">
    <div className="contenedor">
      <h2 className="titulo">CONOCE DE NUESTROS CURSOS ONLINE</h2>
      <div className="servicio-cont">
        <div className="servicio-ind">
          <img src={Fondo1} alt=""/>
          <p>Este curso es Completo porque cubre el total del viaje del ilustrador
                            frente al miedo y el bloqueo creativo. Es perfecto tanto para
                            gente con 0 , un poco, o mucha experiencia.
                            
                            La experiencia
                            no importa cuando creamos desde el corazón.
                            Conviértete en un ilustrador sin miedos y re-enamóra</p>
        </div>
      </div>
    </div>
  </section>
    );
  }
  
  export default Curso;