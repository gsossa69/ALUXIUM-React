import "./Home.css"
import logo_footer from "../../assets/img/logo_footer.png"
function Home (){
    return(
    <header id="inicio">
        <div className="toggle"><span></span></div>
        <div><img src={logo_footer} className="logo"/></div>
        <nav>
            <div className="items">
                <a href="#inicio"></a>
                <a href="#acerca"></a>
                <a href="#cursos"></a>
                <a href="#fundadores"></a>
                <a href="#temas"></a>
                <a href="#registrate"></a>
            </div>
        </nav>
    <section className="textos-header">
<h1>ALUXIUM TE DA LA BIENVENIDA</h1>
<h2>"todo lo que puede ser imaginado es real" <br></br>pablo picasso</h2>
    </section>
    <div  className="wave" style="height: 150px; overflow: hidden;">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none"  style="height: 100%; width: 100%;">
            <path  d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"  style="stroke: none; fill: #fff;"></path>
        </svg>
    </div>
    </header>
    );
}

export default Home;