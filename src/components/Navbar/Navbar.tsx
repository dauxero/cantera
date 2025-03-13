import React, { useState } from "react";
import Logo from "../../assets/Logo.png";

interface NavLinks {
  id: number;
  title: string;
  Link: string;
  icon?: string;
}

const navbarLinks: NavLinks[] = [
  {
    id: 1,
    title: "Inicio",
    Link: "#",
  },
  {
    id: 2,
    title: "Nosotros",
    Link: "#",
  },
  {
    id: 3,
    title: "Contacto",
    Link: "#",
  },
  {
    id: 4,
    title: "Soporte",
    Link: "#",
  },
];

const navbarRedes: NavLinks[] = [
  {
    id: 1,
    title: "Instagram",
    Link: "https://www.instagram.com",
    icon: "bi bi-instagram",
  },
  {
    id: 2,
    title: "Tiktok",
    Link: "https://www.tiktok.com",
    icon: "bi bi-tiktok",
  },
];

//? sm:px-12 sm:py-6 pantallas grandes | px-4 py-3 pantallas pequeñas
const Navbar = () => {
  //? estado | funcion | estado inicial
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((previsOpen) => !previsOpen);
  };
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-purple-900 opacity-50 backdrop-blur-md z-50 transition-all duration-300">
        <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
          {/* logo navbar */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo del sitio" className="w-[100px]" />
          </div>
          {/* menu hamburguesa */}
          <button className="md:hidden text-white p-2" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          {/* navegacion desktop  */}
          <div className="hidden md:block">
            <ul className="flex space-x-4 sm:space-x-8">
              {navbarLinks.map(({ id, title, Link }) => (
                <li key={id}>
                  <a
                    href={Link}
                    className="text-white sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110 transform inline-block duration-300"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* navegacion desktop */}
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              {navbarRedes.map(({ id, Link, icon }) => (
                <li key={id}>
                  <a
                    href={Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform duration-300 transform hover:scale-125"
                  >
                    <i
                      className={`${icon} sm:text-2xl text-lg text-white hover:text-sky-200 transition-all duration-300`}
                    ></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* navegacion mobile */}
        <div
          className={`md:hidden absolute w-full bg-purple-950 transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className=" flex flex-col px-4 py-2">
            {navbarLinks.map(({ id, title, Link }) => (
              <li key={id} className="py-2 text-center">
                <a
                  href={Link}
                  className="text-white hover:text-sky-100 block"
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>

          {/* redes sociales mobile */}
          <ul className="flex space-x-4 px-4 py-2 border-t border-purple-700 justify-center">
            {navbarRedes.map(({ id, Link, icon }) => (
              <li key={id}>
                <a
                  href={Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <i
                    className={`${icon} text-lg text-white hover:text-sky-100`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
