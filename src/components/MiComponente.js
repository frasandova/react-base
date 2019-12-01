import React, {Component, Fragment} from 'react';

class MiComponente extends Component{

 render(){

    let receta = {
        nombre:'Pizza',
        ingredientes: ['Tomate','Queso', 'Jamon cocido'],
        calorias: 400
    };

     return (
        <div className ="mi-componente">
            <h1>{'Nombre:' + receta.nombre}</h1> 
            <h2>{'Calorias: ' + receta.calorias}</h2> 
            <h3>{receta.nombre}</h3>
            <ol>
                {
                    receta.ingredientes.map((ingrediente,i)=>{
                        return(
                        <li key={i}>
                            {ingrediente}
                        </li>  
                        )
                    
                    })
                }
            </ol>      
            <hr/>
                
                {this.props.indicador==1 ? (
                   <Fragment>
                        <h1>Desde una prop: Saludo 1</h1>
                        <h3>{this.props.saludo}</h3>
                    </Fragment>
                   ) : (
                    <Fragment>
                    <h1>Desde una prop: Saludo 2</h1>
                    <h3>{this.props.saludo}</h3>
                    </Fragment>
                   )
                }


        </div>
        // <Fragment>
        //     <h1>Hola Soy el componente llamado: MiComponente</h1> 
        //     <hr/>  
        //     <h2>Probando el componente</h2>      
        // </Fragment>
          
     );
 }

}

export default MiComponente;