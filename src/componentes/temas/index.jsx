import "./temas.css"
import Ilustraciones from "../../assets/img/descarga.jpg"
import Cuerpo from "../../assets/img/Gran Guía de Dibujo del Cuerpo por Cedarseed en deviantART.jpg"
import Detalles from "../../assets/img/Artist Creates Pencil Drawings That Look Like They’re Lit With Fluorescent Lights.jpg"
import Rostro from "../../assets/img/descarga1.png"
import Paisajes from "../../assets/img/Mt Baker Washington taken by Tyler Robinson [1365X2048].jpg"
import Caricatura from "../../assets/img/IMG_20201003_110139.jpg"
import Oscuro from "../../assets/img/IMG_20201003_110254.jpg"
import Lapiz from "../../assets/img/e11c59790960c5fa8e13d02a64b1189a.jpg"
function Tutorial (){
    return (
        <section className="portafolio" id="temas">
            <h2 className="temas">TEMAS</h2>
            <div className="imagen-port">
                <img src={Rostro} alt=""/>
            <div className="galeria-port">
                <img src={Rostro} alt=""/>
            </div>
            <div className="hover-galeria">
                <img src="img/iconos%20de%20tema.png" alt=""/>
                <p>Proporciones del rostro</p>
            </div>
            </div>
            <div className="imagen-port">
                <img src={Detalles} alt=""/>
                <div className="hover-galeria">
                    <img src="img/iconos%20de%20tema.png" alt=""/>
                    <p>tecnicas y detalles</p>
                </div>
            </div>
            <div className="imagen-port">
                <img src={Ilustraciones} alt=""/>
                <div className="hover-galeria">
                    <img src="img/iconos%20de%20tema.png" alt=""/>
                    <p>illustraciones</p>
                </div>
            </div>
            <div className="imagen-port">
                <img src={Cuerpo} alt=""/>
                <div className="hover-galeria">
                    <img src="img/iconos%20de%20tema.png" alt=""/>
                    <p>proporciones del cuerpo</p>
                </div>
            </div>
            <div className="imagen-port">
                <img src={Paisajes} alt=""/>
                <div className="hover-galeria">
                    <img src="img/iconos%20de%20tema.png" alt=""/>
                    <p>paisajes realistas</p>
                </div>
            </div>
            <div className="imagen-port">
                <img src={Caricatura} alt=""/>
                <div className="hover-galeria">
                    <img src="img/iconos%20de%20tema.png" alt=""/>
                    <p>caricatura</p>
                </div>
            </div>
            <div className="imagen-port">
                <img src={Oscuro} alt=""/>
                <div className="hover-galeria">
                    <img src="img/iconos%20de%20tema.png" alt=""/>
                    <p>arte oscuro</p>
                </div>
            </div>
            <div className="imagen-port">
                <img src={Lapiz} alt=""/>
                <div className="hover-galeria">
                    <img src="img/iconos%20de%20tema.png" alt=""/>
                    <p>tecnica a lapiz</p>
                </div>
            </div>
        </section>
    );
}
export default Tutorial;