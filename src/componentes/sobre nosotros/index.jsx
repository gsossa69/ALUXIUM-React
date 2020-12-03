import "./nosotros.css"
import jonathan_borba_Yod824b0KDA_unsplash from "../../assets/img/jonathan-borba-Yod824b0KDA-unsplash.jpg"
function Nosotros (){
    return(
        <section classNameclass="contenedor sobre-nosotros" id="acerca">
            <h2 className="titulo">ACERCA DE NOSOTROS</h2>
            <div className="contenedor-sobre-nosotros">
                <div className="contenido-textos">
                    <p>Somos un proyecto formado por un grupo de artistas con una  ámplia
                        experiéncia en el arte del dibujo y con gran conocimiento de técnicas en el ámbito artístico</p>
                        <img src={jonathan_borba_Yod824b0KDA_unsplash} className="tamaño1"/>        
                </div>
            </div>
        </section>
    )
}
export default Nosotros;