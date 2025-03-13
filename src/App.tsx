import { useState, CSSProperties } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Fondo from "./assets/Fondo.png";

interface bgImage extends CSSProperties {
  backgroundImage: string;
  backgroundRepeat: string;
  backgroundPosition: string;
  backgroundSize: string;
}

function App() {
  const bgImagen: bgImage = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
  };

  return (
    <>
      <div
        style={bgImagen}
        className=" position-absolute inset-0 flex justify-center overflow-hidden min-h-screen"
      >
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
