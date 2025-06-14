"use client";

import { useEffect, useState } from "react";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Snake3D from "@/components/Snake3D";
import { BasiliskNarrationOverlay } from "@/utils/basilisk-narration-overlay";

const ServicesPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleContactClick = () => {
    if (isClient) {
      window.open("https://wa.me/+573013375876", "_blank");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-4 mb-30 mt-8 ">
      <TransitionPage />
      <div className="grid items-center justify-center h-screen  mx-auto md:grid-cols-2 w-full">
        <div className="space-y-4 w-full p-2 mt-20 md:mt-0 ">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Quien <span className="font-bold text-secondary"> soy.</span>
          </h1>
          <p className="mb-3 text-gray-300 text-justify">
            Soy un profesional multidisciplinario con experiencia en desarrollo
            web, validación de sistemas informáticos y gestión de productos
            digitales. A lo largo de mi carrera he participado en proyectos
            tecnológicos, aplicando metodologías ágiles y asegurando el
            cumplimiento de estándares regulatorios. Me especializo en diseñar y
            construir soluciones escalables, optimizando procesos y generando
            valor a través de la mejora continua y la innovación.
          </p>
          <button
            className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65"
            onClick={handleContactClick}
          >
            Contacta conmigo
          </button>
          <h3 className="text-xl font-semibold text-center md:text-left md:mb-5">
            Habilidades
          </h3>
          <SliderServices />
        </div>
        <div className="h-full w-full flex justify-center items-center mb-20">
          <div className="h-full w-full flex flex-col justify-center items-center relative">
            <Snake3D />
            <BasiliskNarrationOverlay />
            <div className="mb-12 px-3  py-1 bg-black\/80 text-white text-xs md:text-sm rounded-full shadow z-10 animate-bounce select-none pointer-events-none bg-slate-500/30">
              ¡Arrastra, haz zoom y explora el basilisco!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
