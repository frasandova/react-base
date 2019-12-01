import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SeccionPrincipal from "./components/SeccionPrincipal";
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        {/* // Configurar rutas y Páginas */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/ruta-prueba" component={SeccionPrincipal}></Route>
          <Route exact path="/segunda-ruta" component={MiComponente}></Route>

          {/* //Ruta sin componente */}
          <Route
            exact
            path="/ruta-sin-componente"
            render={() => (
              <Fragment>
                <h1>Hola mundo desde la ruta: Pagina 1</h1>
                <MiComponente saludo="Hola Amigo" indicador="2" />
              </Fragment>
            )}
          />

          <Route
            exact
            path="/pruebas/:id/:nombres/:apellidos?"
            render={props => {
              var id = props.match.params.id;
              var nombres = props.match.params.nombres;
              var apellidos = props.match.params.apellidos;
              return (
                <div id="content">
                  <h1 class="subheader">Página de pruebas</h1>
                  <h2>Id: {id}</h2>
                  <h2>Nombres: {nombres}</h2>
                  <h2>Apellidos: {apellidos}</h2>

                  <Fragment>
                    {!apellidos ? (
                      <h2>Nombre Completo: {nombres}</h2>
                    ) : (
                      <h2>
                        Nombre Completo: {nombres} {apellidos}
                      </h2>
                    )}
                  </Fragment>
                </div>
              );
            }}
          />
          <Route component={ErrorPage}></Route>
        </Switch>

        <div className="clearfix" />
        <Footer />
      </BrowserRouter>
    );
  }
}
export default Router;
