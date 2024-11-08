"use client";

import { useEffect, useState } from "react";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

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
    <>
      <TransitionPage />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px] mt-20 md:mt-0">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis <span className="font-bold text-secondary"> servicios.</span>
          </h1>
          <p className="mb-3 text-xl text-gray-300">
            Ofrezco servicios de desarrollo Full Stack, especializados en
            soluciones robustas y escalables. Utilizando Node.js, Express,
            NestJS y React Native, creo arquitecturas eficientes que optimizan
            el rendimiento y la seguridad de las aplicaciones. Mi enfoque
            incluye el desarrollo de APIs seguras y la gestión de la lógica del
            servidor, mejorando la funcionalidad y escalabilidad de las
            plataformas digitales de mis clientes.
            {/* Ofrezco servicios de desarrollo web backend, especializados en
            soluciones robustas y escalables. Utilizando Node.js, Express y
            NestJS, creo arquitecturas de servidor eficientes que optimizan el
            rendimiento y la seguridad de las aplicaciones. Mi enfoque incluye
            el desarrollo de APIs seguras y la gestión de la lógica del
            servidor, mejorando la funcionalidad y escalabilidad de las
            plataformas digitales de mis clientes. */}
          </p>
          <button
            className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65"
            onClick={handleContactClick}
          >
            Contacta conmigo
          </button>
        </div>
        <div>
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
