import "./Fundadores.css" 
import Yuliana from "../../assets/img/IMG_20201002_185505.jpg"
import Esmeralda from "../../assets/img/_DSC0314.JPG"
import Giancarlo from "../../assets/img/_DSC0318.JPG"
import Alexandra from "../../assets/img/IMG-20201023-WA0005.jpg"
function Fundadores (){
    return(
        <section className="clientes contenedor1" id="fundadores">
            <h2 className="titulo">FUNDADORES</h2>
            <div className="cards col-md-12">
                <div className="card col-md-3 caja1">
                    <img src={Yuliana} alt=""/>
                    <div className="contenido-texto-card">
                        <h4>Yuliana Bedoya</h4>
                        <p>Animadora y Compositora</p>
                    </div>
                </div>
                <div className="card col-md-3 caja2">
                    <img src={Esmeralda} alt=""/>
                    <div className="contenido-texto-card">
                        <h4>Esmeralda Redondo</h4>
                        <p>Ilustradora Digital</p>
                    </div>
                </div>
                <div className="card col-md-3 caja3">
                    <img src={Giancarlo} alt=""/>
                    <div className="contenido-texto-card">
                        <h4>Giancarlo Sossa</h4>
                        <p>Programador Web!</p>
                    </div>
                </div>
                <div className="card col-md-3 caja4">
                    <img src={Alexandra} alt=""/>
                    <div className="contenido-texto-card">
                        <h4>Alexandra Avendaño</h4>
                        <p>Escritora y Fotografa</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Fundadores;