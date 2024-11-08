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
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    link: "/testimonials",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Desarrollador Full-stack",
    subtitle: "RIWI",
    description:
      "Actualmente, estudiante en formación con una intensidad horaria de 8 horas diarias en la compañía RIWI, en Medellín, especializado en JavaScript para desarrollo Back-end.",
    date: "Actual",
  },
  {
    id: 2,
    title: "Analítica Básica con Python",
    subtitle: "Institución Educativa Pascual Bravo",
    description:
      "Completé la formación en análisis básico con Python, con una intensidad horaria de 20 horas.",
    date: "Mar 2024",
  },
  {
    id: 3,
    title: "Desarrollo de Aplicaciones Android",
    subtitle: "Institución Educativa Pascual Bravo",
    description:
      "Programa de 120 horas en el componente técnico, 48 horas en inglés especializado y 24 horas en habilidades blandas. Completé con éxito la etapa práctica.",
    date: "Dic 2023",
  },
  {
    id: 4,
    title: "Oracle Next Education F2 T5 Back-end",
    subtitle: "Programación Back-end en Java",
    description:
      "Completé 6 formaciones con una carga de trabajo estimada de 331 horas.",
    date: "Sep 2023",
  },
  {
    id: 5,
    title: "Fundamentos de Programación",
    subtitle: "Programación desde Cero",
    description:
      "Estudiante en el área de programación básica en Egg, con una intensidad de 81 horas teóricas y prácticas.",
    date: "Abr 2023",
  },
  {
    id: 6,
    title: "Analista Químico",
    subtitle: "Técnico en Química",
    description: "Estudiante en el Instituto Colombiano SENA.",
    date: "Ene 2023",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 1,
    text: "Año de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 20,
    text: "Proyectos realizados",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 8,
    text: "Años trabajando en compañías",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 4,
    text: "Certificaciones obtenidas",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Validations",
    description:
      "Soporte en la implementación y ejecución de pruebas unitarias y funcionales para garantizar la calidad del software.",
  },
  {
    icon: <Pencil />,
    title: "Backend",
    description:
      "Desarrollo backend, encargándome de la creación de APIs y la implementación de la lógica del servidor.",
  },
  {
    icon: <Computer />,
    title: "Frontend",
    description:
      "Desarrollo y mantenimiento de sitios web, centrado en usabilidad, funcionalidad y adaptabilidad.",
  },
  {
    icon: <Book />,
    title: "Technical Documentation",
    description:
      "Redacción y apoyo en la documentación técnica para proyectos de desarrollo backend.",
  },
  {
    icon: <Rocket />,
    title: "Performance Optimization",
    description:
      "Apoyo en la optimización de rendimiento de aplicaciones web y backend.",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Web Pro",
    image: "/image-1.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 2,
    title: "Desarrollo Web Ágil",
    image: "/image-2.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "Estrategias Web",
    image: "/image-3.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 4,
    title: "Ideas Creativas",
    image: "/image-4.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
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
