// import images
import Hero_person from "./assets/images/Hero/profile.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import Hireme_person from "./assets/images/Hireme/hire.svg";

// import icons from react-icons
import { MdArrowForward } from "react-icons/md";
import { TbBrandWhatsapp, TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

export const content = {
  nav: [
    {
      id: 1,
      link: "#home",
      icon: TbSmartHome,
    },
    {
      id: 2,
      link: "#skills",
      icon: BiUser,
    },
    {
      id: 3,
      link: "#services",
      icon: RiServiceLine,
    },
    {
      id: 4,
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      id: 5,
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "WAYNER",
    LastName: "KEYLOR",
    contactMe: "Contáctame",
    cv: "Download CV",
    image: Hero_person,
    hero_content: [
      {
        count: "*",
        text: " Soy un desarrollador web con una pasión por construir y crear experiencias en línea.",
      },
      {
        count: "*",
        text: "Me esfuerzo por escribir código limpio, eficiente y mantenible, y siempre estoy buscando nuevas formas de mejorar mis habilidades y expandir mis conocimientos.",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    content: [
      {
        name: "HTML",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
      },
      {
        name: "CSS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
      },
      {
        name: "JavaScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png"
      },
      {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
      },
      {
        name: 'Vue',
        logo: 'https://cdn.worldvectorlogo.com/logos/vue-js-1.svg',
      },
      {
        name: 'SQL',
        logo: 'https://cdn.iconscout.com/icon/free/png-512/sql-4-190807.png',
      },
      {
        name: 'PHP',
        logo: 'https://cdn.worldvectorlogo.com/logos/php-1.svg',
      },
      {
        name: "Phyton",
        logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg"
      },
      {
        name: 'Laravel',
        logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
      },
      {
        name: 'Go',
        logo: 'https://cdn.worldvectorlogo.com/logos/go-6.svg',
      },
      {
        name: 'Office',
        logo: "https://cdn.worldvectorlogo.com/logos/microsoft-office-2013.svg",
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    content: [
      {
        id: 1,
        title: "Desarrollo de aplicaciones web:",
        description: "Ofrecer el desarrollo de aplicaciones web interactivas, con un diseño y una interfaz de usuario atractivos y amigables",
        image: services_logo2,
      },
      {
        id: 2,
        title: "Optimización de la velocidad del sitio",
        description: "Ofrecer servicios de optimización del rendimiento del sitio, como la optimización del tamaño de las imágenes, la reducción del número de solicitudes y la implementación de técnicas de caché",
        image: services_logo3,
      },
      {
        id: 3,
        title: "Integración de APIs y servicios web",
        description: " Ofrecer servicios de integración de APIs y servicios web para permitir a los clientes conectar sus sitios web y aplicaciones con otros servicios y plataformas.",
        image: services_logo1,
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    content: [
      {
        id: 1,
        title: "Mi página web personal",
        description: "Una página web donde muestro mi información personal y mis habilidades.",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/mi-usuario/mi-pagina-web-personal",
        previewLink: "https://mi-usuario.github.io/mi-pagina-web-personal/",
        image: "https://i.ibb.co/DwcwgDP/pexels-chevanon-photography-1108099-1.png",
        isPreview: true,
        screenshots: []
      },
      {
        id: 2,
        title: "Red social de naturaleza",
        description: "Una red social donde los usuarios pueden compartir fotos y experiencias relacionadas con la naturaleza.",
        technologies: ["React", "Node.js", "MongoDB"],
        githubLink: "https://github.com/mi-usuario/red-social-naturaleza",
        previewLink: "https://mi-usuario.github.io/red-social-naturaleza/",
        image: "https://i.ibb.co/DwcwgDP/pexels-chevanon-photography-1108099-1.png",
        isPreview: true,
        screenshots: []
      },
      {
        id: 3,
        title: "Red social de naturaleza",
        description: "Una red social donde los usuarios pueden compartir fotos y experiencias relacionadas con la naturaleza.",
        technologies: ["React", "Node.js", "MongoDB"],
        githubLink: "https://github.com/mi-usuario/red-social-naturaleza",
        previewLink: "https://mi-usuario.github.io/red-social-naturaleza/",
        image: "https://i.ibb.co/DwcwgDP/pexels-chevanon-photography-1108099-1.png",
        isPreview: true,
        screenshots: []
      },
      {
        id: 4,
        title: "Juego de memoria",
        description: "Un juego de memoria donde el usuario debe recordar la posición de las cartas.",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/mi-usuario/juego-de-memoria",
        previewLink: "https://mi-usuario.github.io/juego-de-memoria/",
        image: "https://i.ibb.co/DwcwgDP/pexels-chevanon-photography-1108099-1.png",
        isPreview: false,
        screenshots: [
          {
            id: 1,
            image: "https://i.ibb.co/DwcwgDP/pexels-chevanon-photography-1108099-1.png",
            description: "“ I love this. Thanks. The seeker has solitude, but not everyone disturbs it The body of suffering is full of fear. I am fully satisfied and would recommend buying from them as they have made my life so much easier :)”",
          },
          {
            id: 2,
            image: "https://i.ibb.co/DwcwgDP/pexels-chevanon-photography-1108099-1.png",
            description: "“ I love this. Thanks. The seeker has solitude, but not everyone disturbs it The body of suffering is full of fear. I am fully satisfied and would recommend buying from them as they have made my life so much easier :)”",
          },
          {
            id: 3,
            image: "https://i.ibb.co/DwcwgDP/pexels-chevanon-photography-1108099-1.png",
            description: "“ I love this. Thanks. The seeker has solitude, but not everyone disturbs it The body of suffering is full of fear. I am fully satisfied and would recommend buying from them as they have made my life so much easier :)”",
          }
        ]
      },
      {
        id: 5,
        title: "Juego de memoria 2",
        description: "Un juego de memoria donde el usuario debe recordar la posición de las cartas.",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/mi-usuario/juego-de-memoria",
        previewLink: "https://mi-usuario.github.io/juego-de-memoria/",
        image: "https://i.ibb.co/DwcwgDP/pexels-chevanon-photography-1108099-1.png",
        isPreview: false,
        screenshots: [
          {
            id: 1,
            image: "https://i.ibb.co/DwcwgDP/pexels-chevanon-photography-1108099-1.png",
            description: "“ I love this. Thanks. The seeker has solitude, but not everyone disturbs it The body of suffering is full of fear. I am fully satisfied and would recommend buying from them as they have made my life so much easier :)”",
          },
          {
            id: 2,
            image: "https://i.ibb.co/DwcwgDP/pexels-chevanon-photography-1108099-1.png",
            description: "“ I love this. Thanks. The seeker has solitude, but not everyone disturbs it The body of suffering is full of fear. I am fully satisfied and would recommend buying from them as they have made my life so much easier :)”",
          },
          {
            id: 3,
            image: "https://i.ibb.co/DwcwgDP/pexels-chevanon-photography-1108099-1.png",
            description: "“ I love this. Thanks. The seeker has solitude, but not everyone disturbs it The body of suffering is full of fear. I am fully satisfied and would recommend buying from them as they have made my life so much easier :)”",
          }
        ]
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    description: "Me apasiona crear soluciones innovadoras que satisfagan las necesidades únicas de mis clientes. Estoy emocionado por la oportunidad de trabajar en su proyecto y traer mi experiencia a la mesa. ¡Trabajemos juntos para crear algo increíble!.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    socials: [
      {
        id: 1,
        text: "waynerespinozap@gmail.com",
        icon: FiMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        id: 2,
        text: "+51 930 127 991",
        icon: FiPhone,
        link: "https://wa.me/1234567890",
      },
      {
        id: 3,
        text: "wayner-keylor",
        icon: FiLinkedin,
        link: "https://www.linkedin.com/in/wayner-keylor/",
      },
      {
        id: 4,
        text: "+51 930 127 991",
        icon: TbBrandWhatsapp,
        link: "https://wa.me/930127991",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
