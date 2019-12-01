import React, { Component } from 'react';

// const error = ()=>{
//     return(
//         <div>
//                 <h1>Se ha producido un error, favor contactar con el administrador</h1>
//             </div>
//     );
// }


class ErrorPage extends Component{
    render() {
        return (
            <section id="content">
                <h1 className="subheader">Se ha producido un error, favor contactar con el administrador</h1>
                <p>La página que intentas acceder no existe</p>
            </section>
        )
    }
}

export default ErrorPage;
