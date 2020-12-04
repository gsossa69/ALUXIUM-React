import "./Registro.css"
function Registrarse (){
    return(
      <div className="fondo" id="registrate">
          <div className="container" id="form" >
              <div className="row">
                  <div className="col-sm-12 col-md-12">
                      <h1>!Únete Hoy¡</h1>
                      <h3>Se Parte de la nueva Generacion de profesionales en el arte</h3>
                  </div>
                  <div className="col-ms-12 col-md-12">
                      <form action="" className="tt_form">
                      <input type="text" className="form-control"name="name" placeholder="Nombre" id="name"/>
                      <input type="text" className="form-control" name="phone" placeholder="Teléfono / Movil" id="phone"/>
                      <input type="text" className="form-control" name="email" placeholder="Email" id="email"/>
                      <textarea  name="message" placeholder="Mensaje" id="message" cols="30" rows="3"></textarea>
                      <div className="conteForm">
                          <div className="tt_form_ckb">
                              <button  type="button" className="btn fin">ENVIAR</button>
                          </div>
                      </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>  
    );
}
export default Registrarse;