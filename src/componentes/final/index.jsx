import "./Final.css"
import whap from "../../assets/img/iconodewhap.png"
import face from "../../assets/img/logodeface.png"
import inst from "../../assets/img/logodeinst.png"
import youtube from "../../assets/img/iconodeyoutube.png"
import alux from "../../assets/img/logodelheder.png"
function Footer () {
    return(
        <footer>
            <div className="contenedor-footer">
                <div className="redes-sociales">
                    <img src={whap} alt=""/>
                    <img src={face} alt=""/>
                    <img src={inst} alt=""/>
                    <img src={youtube} alt=""/>
                </div>
                <h1>Sobre Nosotros / Contacto / Politica de Privacidad</h1>
                <div className="logo-futer">
                    <img src={alux} alt=""/>
                </div>
            </div>
            <h2 className="titulo-final">&copy;ALUXIUM</h2>
        </footer>
    );
}
export default Footer;