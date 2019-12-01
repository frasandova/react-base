import React,{Component} from 'react';
import MensajeEstatico from './MensajeEstatico';
import Pelicula from './Pelicula'

class Peliculas extends Component{
    
    state={
      peliculas:[
          {titulo:"Batman vs Superman", image: "https://as.com/ocio/imagenes/2016/04/10/cine/1460272862_892134_1460273063_noticia_grande.jpg"},
          {titulo:"Warcraft", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXBs8FKLRAMVzjNTiuPLmsQmGP7IAeLiLxyLlOZm4QcSe1vxH&s"},
          {titulo:"Marvel", image: "https://static.iris.net.co/soho/upload/images/2016/4/29/41710_1.jpg"}
        ],
        nombre:"Francisco Sandoval",
        peliculafavorita:''
    };



    CambiarTitulo = ()=>{
         var { peliculas } = this.state;
        //  var random = Math.floor(Math.random() * 3);
        peliculas[0].titulo = "Batman Begins";                
        this.setState({
            peliculas:peliculas
        });
    }

    Favorita = (pelicula, indice)=>{
        console.log('Marcar Favorita')
        console.log(pelicula, indice);

        this.setState({
            peliculafavorita:pelicula
        })
    }    

    render(){
        var pStyle ={
            background:'green',
            color:'white',
            padding: '10px'
        };

        return(
            <div id="content" className="content">
                <h2 className="subheader">Peliculas</h2>
                {/* <MensajeEstatico/> */}
                <p>Selección de las peliculas favoritas de {this.state.nombre}</p>
                <p>
                    <button onClick={this.CambiarTitulo}> Cambiar Titulo</button>
                </p>

                {this.state.peliculafavorita.titulo &&
                    <p className="favorita" style={pStyle}>
                    <strong>La pelicula favorita es: </strong>
                    <span>{this.state.peliculafavorita.titulo}</span>
                    </p>
                }

             

                {/* Foreach Peliculas en React */}
                <div id="articles" className="peliculas">

                    {
                        this.state.peliculas.map((pelicula,i)=>{                        
                            return(
                                <Pelicula 
                                    key={i} 
                                    indice={i}
                                    pelicula={pelicula}
                                    MarcarFavorita={this.Favorita}
                                />
                            )

                        })
                    }



                </div>



            </div>
        );
    }
}

export default Peliculas;