import React from "react";
import Personaje from "../../assets/Personaje.png";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
import { slideUp, slideInFromSide } from "../../utility/animation.js";
const Hero = () => {
  return (
    <>
      <section className="mt-36">
        <div className="grid grid-cols-1 md:grid-cols-2">
       

          <div className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36">
            <motion.img
              src={Logo}
              alt="Logo del Juego"
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
            />
            <motion.p
              className="py-12 text-white"
              variants={slideUp(0.3)}
              initial="initial"
              animate="animate"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              fugit sed adipisci officia temporibus nihil dolores perspiciatis
              beatae inventore magnam. Quos, aliquam harum beatae natus fugit
              facilis debitis ex eius.
            </motion.p>
            <motion.div
              className="flex justify-center gap-4"
              variants={slideUp(1)}
              initial="initial"
              animate="animate"
            >
              <a
                href="#"
                className="bg-purple-600 py-2 px-12 rounded-3xl text-white hover:bg-purple-700 transition-all duration-300 items-center cursor-pointer"
              >
                Jugar ahora
                <i className="bi bi-controller text-xl ml-2"></i>
              </a>
              <a
                href="#"
                className="text-white flex items-center cursor-pointer"
              >
                Ver Gameplay
                <i className="bi bi-youtube text-xl ml-2"></i>
              </a>
            </motion.div>
          </div>
          <motion.div
            className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36"
            variants={slideInFromSide("right", 0.5)}
            initial="initial"
            animate="animate"
          >
            <img src={Personaje} alt="Personaje del Juego" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
