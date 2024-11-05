"use client";
import { useEffect, useState } from "react";
import { talkWithMe } from "@/data";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`z-20 w-full bg-darkBg/60 ${
        windowWidth < 500 ? "" : ""
      }`}
    >
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 gap-8">
        <Image
          src="/home-1.png"
          priority
          width="400"
          height="400"
          alt="Profile pic"
          className="ml-auto"
        />

        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Si puedes pensarlo, <br />
            <TypeAnimation
              sequence={[
                "Puedes desarrollar",
                1000,
                "Puedes optimizar",
                1000,
                "Puedes desarrollar",
                1000,
                "Puedes diseñar",
                1000,
                "Puedes ilustrar",
                1000,
                "Puedes pintar",
                1000,
                "Puedes esculpir",
                1000,
                "Puedes imaginar",
                1000,
                "Puedes crear",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>
          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
            Soy un desarrollador junior con pasión por el desarrollo de
            software, siempre en búsqueda de oportunidades para implementar y
            expandir mis habilidades. Me entusiasmo por explorar nuevas
            tecnologías. Tengo habilidades blandas sólidas como la comunicación
            y el trabajo en equipo, lo que me permite colaborar eficazmente y
            adaptarme rápidamente.
          </p>
          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <a
              href="https://github.com/christian75876?tab=repositories"
              target="_blank"
              className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/15"
            >
              Ver proyectos
            </a>
            <a
              href={talkWithMe}
              target="_blank"
              className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary/15"
            >
              Contacta conmigo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
