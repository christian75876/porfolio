import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  Instagram,
  Github,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/christian-pabon-villanueva",
  },
  {
    id: 3,
    logo: <Instagram size={30} strokeWidth={1} />,
    src: "https://www.instagram.com/pabonvillanueva?igsh=cjNnMHdrNnoweWFn&utm_source=qr",
  },
  {
    id: 4,
    logo: <Rss size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 5,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/christian75876/",
  },
  {
    id: 6,
    logo: <Youtube size={30} strokeWidth={1} />,
    src: "https://www.youtube.com/watch?v=eIb8uwdjr7g&t=79s",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/who-am-i",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  // {
  //   id: 5,
  //   title: "Home",
  //   icon: <Speech size={25} color="#fff" strokeWidth={1} />,
  //   link: "/testimonials",
  // },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Desarrollador Web y Product Owner",
    subtitle: "BlackBirdLabs",
    description:
      "Desempeño un rol dual como Desarrollador de Aplicaciones Web y Product Owner en equipos ágiles, combinando habilidades técnicas en desarrollo (JavaScript, TypeScript, Node.js, HTML, CSS) con liderazgo en la gestión de productos digitales bajo el marco Scrum. Me especializo en la construcción de soluciones web escalables, gestión efectiva del backlog y facilitación de ceremonias ágiles, siempre enfocado en la entrega de valor al usuario final y la mejora continua.",
    date: "Nov 2024 - Actualidad",
  },
  {
    id: 2,
    title: "Auxiliar en Validación de Sistemas Informáticos",
    subtitle: "LifeFactors",
    description:
      "Apoyo en la validación y prueba de sistemas informáticos, asegurando la calidad y el cumplimiento de los requisitos del cliente. Colaboro con equipos técnicos para identificar y corregir posibles fallos, optimizando procesos y mejorando la estabilidad de las plataformas desarrolladas.",
    date: "Ene 2022 - May 2025",
  },
  {
    id: 3,
    title: "Desarrollador Full-stack",
    subtitle: "RIWI",
    description:
      "Desarrollador de aplicaciones web con enfoque Full Stack, utilizando tecnologías como JavaScript, React, Node.js, y herramientas de gestión de estado global. Apoyo la implementación de soluciones escalables en el backend y colaboro en el desarrollo de interfaces de usuario interactivas en el frontend.",
    date: "Ene 2023 - Nov 2024",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 2,
    text: "Año de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 50,
    text: "Proyectos realizados",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 10,
    text: "Años trabajando en compañías",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 5,
    text: "Certificaciones obtenidas",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Validaciones y Pruebas",
    description:
      "Ejecuto y gestiono pruebas unitarias y funcionales para asegurar la calidad, confiabilidad y cumplimiento de los requisitos del software en cada etapa del desarrollo.",
  },
  {
    icon: <Pencil />,
    title: "Backend",
    description:
      "Diseño y desarrollo APIs robustas, implementando lógica de servidor eficiente y segura, así como gestionando la integración de bases de datos y servicios externos.",
  },
  {
    icon: <Computer />,
    title: "Frontend",
    description:
      "Desarrollo interfaces web interactivas y accesibles, enfocándome en la experiencia de usuario, la adaptabilidad móvil y la integración fluida con servicios backend.",
  },
  {
    icon: <Book />,
    title: "Documentación Técnica",
    description:
      "Redacto y mantengo documentación clara y precisa, facilitando la comprensión y la colaboración en proyectos de desarrollo, especialmente en entornos backend.",
  },
  {
    icon: <Rocket />,
    title: "Optimización de Performance",
    description:
      "Identifico y soluciono cuellos de botella para mejorar el rendimiento y la escalabilidad de aplicaciones web, logrando tiempos de respuesta más rápidos y mayor eficiencia.",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Riwi - Portal clientes",
    image: "/Fondo-claro-logo2-1.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
    description:
      "Sitio web para clientes orientado a la consulta de servicios, solicitudes y soporte, construido sobre WordPress con personalización visual y funcional.",
    contribution:
      "Encargado de tareas de mantenimiento y mejoras continuas en una página realizada con WordPress y Elementor. Aseguré la correcta operatividad, actualizaciones y personalización de secciones según los requerimientos del cliente.",
  },
  {
    id: 2,
    title: "Dropshipping - Ecommerce",
    image: "/icon-deuna.svg",
    urlGithub: "#!",
    urlDemo: "#!",
    description:
      "Plataforma web para la gestión integral de tiendas de dropshipping, permitiendo administrar catálogos, inventarios, pedidos y pagos en tiempo real.",
    contribution:
      "Como Desarrollador Junior, participé desde cero en la creación del proyecto, implementando la interfaz de usuario y la lógica de negocio con Next.js. Colaboré en la integración de funcionalidades clave para la experiencia del cliente y el panel administrativo.",
  },
  {
    id: 3,
    title: "Chatbot - para WhatsApp",
    image: "/chatbot-logo.svg",
    urlGithub: "#!",
    urlDemo: "#!",
    description:
      "Sistema conversacional automatizado vía WhatsApp, diseñado para gestionar consultas, reservas y atención al cliente de forma eficiente y escalable.",
    contribution:
      "Como Product Owner, lideré la definición de requisitos, priorización de funcionalidades y validación de entregables. Supervisé el desarrollo del chatbot, asegurando la alineación con los objetivos del negocio y la satisfacción de los usuarios finales.",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
  },
];

export const talkWithMe =
  "https://wa.me/573013375876?text=Hello,%20I%20saw%20your%20page%20and%20would%20like%20to%20contact%20you.";
