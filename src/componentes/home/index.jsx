import "./Home.css"
import logo_footer from "../../assets/img/logo_footer.png"
function Home (){
    return(
    <header id="inicio">
        <div className="toggle"></div>
        <div><img src={logo_footer}  className="logo"/></div>
        <nav>
            <div className="items">
                <a href="#inicio">INICIO</a>
                <a href="#acerca">ACERCA DE</a>
                <a href="#cursos">CURSOS</a>
                <a href="#fundadores">FUNDADORES</a>
                <a href="#temas">TEMAS</a>
                <a href="#registrate">REGISTRATE</a>
            </div>
        </nav>
    <section className="textos-header">
<h1>ALUXIUM TE DA LA BIENVENIDA</h1>
<h2>"todo lo que puede ser imaginado es real" <br></br>pablo picasso</h2>
    </section>
    <div className="wave">
    </div>
    </header>
    );
}

export default Home;