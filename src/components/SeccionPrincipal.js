import React, { Component } from "react";

import MiComponente from "./MiComponente";


class SeccionPrincipal extends Component {

    contador =0;

    // constructor(props){
    //     super(props);
    //     this.state={
    //         contador:0
    //     };
    // }

    state= {
        contador:0
    };


    HolaMundo(nombre, edad){
        var presentacion = (
            <div>
                <h2>Hola, Soy {nombre}</h2>
                <h3>Tengo {edad} años</h3>
            </div>
        );

        return presentacion;
    }

    Sumar = (e) =>{
        this.setState({
            contador: (this.state.contador+1)
        });
    }

    Restar = (e)=>{
        this.setState({
            contador: (this.state.contador-1)
        });
    }

    render() {


    return (
      <section id="content">
            <h2 className="subheader">Últimos artículos</h2>
            <p>Bienvenido al curso de React Francisco Sandoval</p>

            <h2 className="subheader">Funciones y JSX basico</h2>
            { this.HolaMundo('Francisco Sandoval',34) };


            <h2 className="subheader">Componentes</h2>
            <section className="componentes">
                <MiComponente />
                {/* <Peliculas /> */}
            </section>      

            <h2 className="subheader">Estados Componentes</h2>
            <p>
                Contador: {this.state.contador}
            </p>
             <p>
                <input type="button" value="Sumar" onClick={this.Sumar}/>
                <input type="button" value="Restar" onClick={this.Restar}/>
                {/* <input type="button" value="Restar" onClick={this.Restar.bind(this)}/> */}
            </p>


            {/* Listado articulos */}
            <div id="articles">
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                <img
                    src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8"
                    alt="Paisaje"
                />
                </div>

                <h2>Articulo de prueba</h2>
                <span className="date">Hace 5 minutos</span>
                <a href="#">Leer más</a>

                <div className="clearfix" />
            </article>

          {/* AÑADIR ARTICULOS VIA JS */}
             </div>
      </section>
    );
  }
}


export default SeccionPrincipal;