 import React from "react";

import "./assets/css/App.css";

//Importar componentes

// import Header from "./components/Header";
// import Slider from "./components/Slider";
// import Sidebar from "./components/Sidebar";
// import Footer from "./components/Footer";
// import SeccionPrincipal from "./components/SeccionPrincipal";
// import Peliculas from "./components/Peliculas";
 import Router from "./Router";

function App() {

  var buttonString="Ir al blog";

  // var nombre = "Francisco sandoval";
  // var presentacion = (
  //   <h2>
  //     {" "}Hola, Soy {nombre}{" "}
  //   </h2>
  // );

  return (
    <div className="App">

    {/* <Header />
      <Slider 
        title="Slider bienvenido Francisco Sandoval"
        btn={buttonString}
      /> */}

      {/* <div className="center"> */}
  
        <Router/>
        {/* <SeccionPrincipal/> */}

        {/* <Peliculas/> */}
        
        {/* <Sidebar />

        <div className="clearfix" /> */}
      {/* </div> */}

    </div>
  );
}

export default App;
