export const profile = {
  name: 'Michel',
  last_name: 'Suárez',
  professions: {
    es: ['Desarrollador Web Full-Stack', 'Ingeniero de Software', 'Desarrollador Backend'],
    en: ['Full-Stack Web developer', 'Software Engineer', 'Backend developer'],
  },
  description: {
    es: 'Soy un ingeniero de software con experiencia en diseño, codificación, prueba y mantenimiento de sistemas de software. Competente en varios frameworks (Django/FastAPI/Flask), lenguajes (Python/C#/Java) y sistemas embebidos. Capaz de autogestionar mi tiempo de manera efectiva durante los proyectos independientes, así como colaborar formando parte de un equipo de desarrollo.',
    en: 'I\'m a experienced Software Engineer adept in bringing forth expertise in design, installation, testing and maintenance of software systems. Proficient in various frameworks (FastAPI/Django/Flask), languages (Python/C#/Java), and embedded systems. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.',
  },
};

export const contact = {
  github_profile: 'https://github.com/MacKey-255',
  linkedin_profile: 'https://www.linkedin.com/in/mackey255/',
  email: 'mackeyfuturo@gmail.com',
  phone: '+34 604256897',
  location: {
    es: 'Canarias, España',
    en: 'Canary, Spain',
  },
};

export const skills = {
  technologies: [
    {label: 'Python', xp: '5', icon: '/icons/python-5.svg'},
    {label: 'Javascript', xp: '4', icon: '/icons/logo-javascript.svg'},
    {label: 'C#', xp: '2', icon: '/icons/c--4.svg'},
    {label: 'Java', xp: '2', icon: '/icons/java-14.svg'},
    {label: 'Django', xp: '4', icon: '/icons/django.svg'},
    {label: 'FastAPI', xp: '1', icon: '/icons/fastapi-1.svg'},
    {label: 'Vue.js', xp: '1', icon: '/icons/vue-js-1.svg'},
    {label: 'Bootstrap', xp: '3', icon: '/icons/bootstrap-4.svg'},
    {label: 'HTML', xp: '5', icon: '/icons/html-1.svg'},
    {label: 'CSS', xp: '5', icon: '/icons/css-3.svg'},
  ],
  tools: [
    {label: 'Git', xp: '3', icon: '/icons/git-icon.svg'},
    {label: 'Docker', xp: '1', icon: '/icons/docker-4.svg'},
    {label: 'PostgreSQL', xp: '4', icon: '/icons/postgresql.svg'},
    {label: 'Redis', xp: '1', icon: '/icons/redis.svg'},
    {label: 'Debian', xp: '5', icon: '/icons/debian-2.svg'},
  ],
};

export const languages = {
  es: [
    {label: 'Español', level: 'Nativo'},
    {label: 'Ingles', level: 'A2'}
  ],
  en: [
    {label: 'Spanish', level: 'Native'},
    {label: 'English', level: 'A2'}
  ],
};

export const project = {
  es: [
    {
      id: 0,
      title: 'LEVERAGE',
      description: 'Sitio web del servidor de Minecraft <strong>LEVERAGE</strong>, que ofrece servicios de registro y autenticación para los jugadores, información detallada sobre el estado del servidor y la opción de subir skins personalizadas.',
      images: ['/projects/web/leverage-v1.jpg', '/projects/web/leverage-v2.jpg', '/projects/web/leverage-v3.jpg'],
      language: ['PHP'],
      date: '2015-05-01',
    },
    {
      id: 1,
      title: 'Chat Faranduleando',
      description: 'Chat en tiempo real con una sala global para la interacción entre todos a los usuarios. Ofrece iconos, categorías de usuarios y salas privadas.',
      images: [
        '/projects/web/faranduleando-outside.jpg', '/projects/web/faranduleando-inside.jpg',
        '/projects/web/faranduleando-new-outside.jpg', '/projects/web/faranduleando-new-inside.jpg'
      ],
      language: ['PHP'],
      date: '2015-08-01',
    },
    {
      id: 2,
      title: 'Dota 2 - Sitio de estadísticas',
      description: 'Sitio web de estadísticas en tiempo real para <strong>Dota 2</strong> que proporciona información sobre los jugadores conectados al servidor y las estadísticas de las partidas jugadas.',
      images: ['/projects/web/dota-stats.jpg'],
      language: ['PHP', 'Symfony'],
      date: '2016-01-01',
    },
    {
      id: 3,
      title: 'GTA - Portal web',
      description: 'Portal web con información detallada sobre el servidor de <strong>GTA</strong> y guías útiles para facilitar el acceso y disfrute de la experiencia en dicho servidor.',
      images: ['/projects/web/gta-website.jpg'],
      language: ['PHP', 'Symfony'],
      date: '2016-05-01',
    },
    {
      id: 4,
      title: 'Proyecto Inyenius',
      description: 'El proyecto Inyenius incluye un portal web, un foro de juegos y una tienda de compra/venta en línea.',
      images: ['/projects/web/inyenius-website.jpg', '/projects/web/inyenius-shop.jpg'],
      language: ['PHP', 'Symfony', 'XenForo', 'Wordpress'],
      date: '2016-10-01',
    },
    {
      id: 5,
      title: 'Call of Duty - Sitio de estadísticas',
      description: 'Sitio web para visualizar los servidores de <strong>Call of Duty</strong> junto con la información de los jugadores actualmente conectados a cada servidor.',
      images: ['/projects/web/call-website.jpg'],
      language: ['PHP'],
      date: '2016-12-01',
    },
    {
      id: 6,
      title: 'Trunkers - Portal web',
      description: 'Trunkers.mp proporciona información detallada sobre el servidor de <strong>Euro Truck</strong> y guías útiles para facilitar el acceso y disfrute en el servidor.',
      images: ['/projects/web/trunkers-website.jpg'],
      language: ['Wordpress'],
      date: '2017-03-01',
    },
    {
      id: 7,
      title: 'Rust legacy - Sitio de estadísticas',
      description: 'Sitio web de estadísticas para <strong>Rust Legacy</strong> que proporciona información sobre los jugadores conectados al servidor y las estadísticas de las partidas jugadas.',
      images: ['/projects/web/rust-stats.jpg'],
      language: ['PHP'],
      date: '2017-07-01',
    },
    {
      id: 8,
      title: 'Sitio web - FICI',
      description: 'Web de la <strong>Facultad Introductoria de Ciencias Informáticas</strong> (FICI), que ofrece noticias e información sobre la facultad de manera accesible y actualizada.',
      images: ['/projects/web/fici-web.jpg'],
      language: ['Python', 'Django'],
      date: '2018-01-01',
    },
    {
      id: 9,
      title: 'LEVERAGE - Sitio web',
      description: 'Web de <strong>Minecraft</strong> - LEVERAGE que ofrece un simple sistema anti-trampas, lista de usuarios en tiempo real, estado de los servidores y la opción de subir skins personalizadas.',
      images: ['/projects/web/leverage-v4-0.jpg', '/projects/web/leverage-v4-1.jpg'],
      language: ['Python', 'Django'],
      url: 'https://github.com/MacKey-255/LEVERAGE-Web',
      date: '2018-06-01',
    },
    {
      id: 10,
      title: 'LEVERAGE - Lanzador',
      description: 'Lanzador de <strong>Minecraft</strong> - LEVERAGE que cuenta con un sencillo sistema anti-trampas, gestión de versiones de Minecraft y ofrece la opción de subir skins personalizadas.',
      images: ['/projects/web/leverage-launcher-0.jpg', '/projects/web/leverage-launcher-1.jpg'],
      language: ['Java', 'JavaFX'],
      url: 'https://github.com/MacKey-255/LEVERAGE-Launcher',
      date: '2018-08-01',
    },
    {
      id: 11,
      title: 'GoodByeCaptcha',
      description: 'Una biblioteca asincrónica de Python para automatizar la resolución de ReCAPTCHA v2 utilizando reconocimiento de audio e imágenes.',
      images: [],
      language: ['Python'],
      url: 'https://github.com/MacKey-255/GoodByeCatpcha',
      date: '2019-07-01',
    },
    {
      id: 12,
      title: 'KeyMac',
      description: 'Es un proyecto AntiCheat independiente que busca contribuir a la seguridad y bienestar de la comunidad de <strong>SNET</strong>. Evitando el uso de mecanismos de intervención de juegos o hardware especializado creados para tener ventajas sobre el resto de los jugadores. Un AntiCheat facil de instalar, libre, escalable, gratuito y robusto.',
      images: [
        '/projects/web/keymac-v3.jpg', '/projects/web/keymac-all-work.jpg',
        '/projects/web/keymac-about.jpg', '/projects/web/keymac-loading.jpg',
        '/projects/web/keymac-web-home.jpg', '/projects/web/keymac-website.jpg',
        '/projects/web/keymac-tool.jpg'
      ],
      language: ['C#', 'Javascript', 'Vue.js'],
      url: 'https://github.com/CubanKeyDev/KeyMac',
      date: '2020-02-01',
    },
  ],
  en: [
    {
      id: 0,
      title: 'LEVERAGE',
      description: 'Website of the Minecraft server <strong>LEVERAGE</strong>, which provides registration and authentication services for players, detailed information about server status and the option to upload custom skins.',
      images: ['/projects/web/leverage-v1.jpg', '/projects/web/leverage-v2.jpg', '/projects/web/leverage-v3.jpg'],
      language: ['PHP'],
      date: '2015-05-01',
    },
    {
      id: 1,
      title: 'Chat Faranduleando',
      description: 'Real-time chat with a global room for interaction among all users. It offers icons, user categories, and private rooms.',
      images: [
        '/projects/web/faranduleando-outside.jpg', '/projects/web/faranduleando-inside.jpg',
        '/projects/web/faranduleando-new-outside.jpg', '/projects/web/faranduleando-new-inside.jpg'
      ],
      language: ['PHP'],
      date: '2015-08-01',
    },
    {
      id: 2,
      title: 'Dota 2 - Stats Website',
      description: 'Real-time statistics website for <strong>Dota 2</strong> that provides information about the players currently connected to the server and the statistics of the matches played.',
      images: ['/projects/web/dota-stats.jpg'],
      language: ['PHP', 'Symfony'],
      date: '2016-01-01',
    },
    {
      id: 3,
      title: 'GTA - Web portal',
      description: 'Web portal with detailed information about the <strong>GTA</strong> server and useful guides to facilitate access and enhance the experience on that server.',
      images: ['/projects/web/gta-website.jpg'],
      language: ['PHP', 'Symfony'],
      date: '2016-05-01',
    },
    {
      id: 4,
      title: 'Inyenius project',
      description: 'The Inyenius project includes a web portal, a gaming forum, and an online buying/selling store.',
      images: ['/projects/web/inyenius-website.jpg', '/projects/web/inyenius-shop.jpg'],
      language: ['PHP', 'Symfony', 'XenForo', 'Wordpress'],
      date: '2016-10-01',
    },
    {
      id: 5,
      title: 'Call of Duty - Stats Website',
      description: 'Website to view the <strong>Call of Duty</strong> servers along with the information of players currently connected to each server.',
      images: ['/projects/web/call-website.jpg'],
      language: ['PHP'],
      date: '2016-12-01',
    },
    {
      id: 6,
      title: 'Trunkers - Web portal',
      description: 'Trunkers.mp provides detailed information about the <strong>Euro Truck</strong> server and useful guides to facilitate access and enjoyment on the server.',
      images: ['/projects/web/trunkers-website.jpg'],
      language: ['Wordpress'],
      date: '2017-03-01',
    },
    {
      id: 7,
      title: 'Rust legacy - Stats Website',
      description: 'Website of statistics for <strong>Rust Legacy</strong> that provides information about the players currently connected to the server and the statistics of the matches played.',
      images: ['/projects/web/rust-stats.jpg'],
      language: ['PHP'],
      date: '2017-07-01',
    },
    {
      id: 8,
      title: 'FICI - Website',
      description: 'Website of the <strong>Introductory Faculty of Computer Science</strong> (FICI), which provides accessible and up-to-date news and information about the faculty.',
      images: ['/projects/web/fici-web.jpg'],
      language: ['Python', 'Django'],
      date: '2018-01-01',
    },
    {
      id: 9,
      title: 'LEVERAGE - Website',
      description: 'Website of <strong>Minecraft</strong> - LEVERAGE that offers a simple anti-cheat system, real-time user list, server status, and the option to upload custom skins.',
      images: ['/projects/web/leverage-v4-0.jpg', '/projects/web/leverage-v4-1.jpg'],
      language: ['Python', 'Django'],
      url: 'https://github.com/MacKey-255/LEVERAGE-Web',
      date: '2018-06-01',
    },
    {
      id: 10,
      title: 'LEVERAGE - Launcher',
      description: '<strong>Minecraft</strong> Launcher - LEVERAGE that features a simple anti-cheat system, Minecraft version management, and provides the option to upload custom skins.',
      images: ['/projects/web/leverage-launcher-0.jpg', '/projects/web/leverage-launcher-1.jpg'],
      language: ['Java', 'JavaFX'],
      url: 'https://github.com/MacKey-255/LEVERAGE-Launcher',
      date: '2018-08-01',
    },
    {
      id: 11,
      title: 'GoodByeCaptcha',
      description: 'An asynchronized Python library to automate solving ReCAPTCHA v2 using audio and image recognition.',
      images: [],
      language: ['Python'],
      url: 'https://github.com/MacKey-255/GoodByeCatpcha',
      date: '2019-07-01',
    },
    {
      id: 12,
      title: 'KeyMac',
      description: 'It is an independent AntiCheat project that aims to contribute to the security and well-being of the <strong>SNET</strong> community. By avoiding the use of game intervention mechanisms or specialized hardware created to gain advantages over other players. An easy-to-install, free, scalable, and robust AntiCheat.',
      images: [
        '/projects/web/keymac-v3.jpg', '/projects/web/keymac-all-work.jpg',
        '/projects/web/keymac-about.jpg', '/projects/web/keymac-loading.jpg',
        '/projects/web/keymac-web-home.jpg', '/projects/web/keymac-website.jpg',
        '/projects/web/keymac-tool.jpg'
      ],
      language: ['C#', 'Javascript', 'Vue.js'],
      url: 'https://github.com/CubanKeyDev/KeyMac',
      date: '2020-02-01',
    },
  ],
};

export const education = {
  es: [
    {
      title: 'Ingeniero en Ciencias Informáticas, Ingeniería informática',
      description: [
        'Destacado en proyectos de investigación y expansión científica.',
        'Diseñé y desarrollé software de alto impacto en la ciencia médica.'
      ],
      institution: 'Universidad de las Ciencias Informáticas (UCI)',
      image: '/projects/logo/uci.jpeg',
      link: 'https://www.uci.cu/',
      techs: ['Python', 'JavaScript', 'Java', 'C#', 'Git', 'Docker', 'Linux', 'PostgreSQL'],
      startDate: '2017-09-01',
      endDate: '2022-12-01',
    },
  ],
  en: [
    {
      title: 'Computer Science Engineer, Software Engineer',
      description: [
        'Excelled in research projects and scientific expansion.',
        'Designed and developed high-impact software in the medical science.'
      ],
      institution: 'University of Informatics Sciences (UCI).',
      image: '/projects/logo/uci.jpeg',
      link: 'https://www.uci.cu/en',
      techs: ['Python', 'JavaScript', 'Java', 'C#', 'Git', 'Docker', 'Linux', 'PostgreSQL'],
      startDate: '2017-09-01',
      endDate: '2022-12-01',
    },
  ]
};

export const work = {
  es: [
    {
      title: 'Ingeniero de software',
      description: [
        'Desarrollé scripts automatizados (en Python) para simplificar las tareas comunes y reducir el esfuerzo manual.',
        'Creé diferentes scrapers/crawlers bots.',
        'Mejorando el rendimiento de la base de datos a través de la indexación y la optimización de consultas.',
        'DevOps utilizando Docker y sistema operativo Linux.',
      ],
      company: 'Mapio.net',
      image: '/projects/logo/mapio.png',
      link: 'https://mapio.net/',
      techs: ['Python', 'Docker', 'Scrapy', 'Git', 'Linux', 'PostgreSQL'],
      startDate: '2022-11-01',
      endDate: '2023-07-01',
    },
    {
      title: 'Desarrollador web',
      description: [
        'Desarrollador Web Full Stack (PHP, Symfony, Python, Django, Javascript, Vue.js)',
        'Creé diferentes bots (Telegram, WhatsApp) para automatizar procesos.',
        'Desarrollé Scrapy/Crawler y diferentes sistemas automatizados.',
        'Creé aplicaciones de escritorio con C# (WinForms) y Java (JavaFX).',
        'Creación de aplicaciones móviles con Java y Android Studio.',
        'Desarrollé un sistema Anti-Cheat con C# para mantener la seguridad en la intranet de Cuba.',
        'Implementé bibliotecas independientes y administré algunos servidores Linux.',
      ],
      company: 'Freelancer',
      image: '/projects/logo/freelancer.png',
      techs: ['Python', 'Django', 'PHP', 'Javascript', 'Vue.js', 'C#', 'GraphQL', 'Git', 'Scrapy', 'Linux', 'MySQL'],
      startDate: '2016-10-01',
      endDate: '2022-06-01',
    },
  ],
  en: [
    {
      title: 'Software engineer',
      description: [
        'Developed automated scripts (in Python) to simplify common tasks and reduce manual effort.',
        'Created different scrapers/crawlers bots.',
        'Improved database performance through query optimization and indexing.',
        'DevOps using Docker and Linux operative system.',
      ],
      company: 'Mapio.net',
      image: '/projects/logo/mapio.png',
      link: 'https://mapio.net/',
      techs: ['Python', 'Docker', 'Scrapy', 'Git', 'Linux', 'PostgreSQL'],
      startDate: '2022-11-01',
      endDate: '2023-07-01',
    },
    {
      title: 'Web developer',
      description: [
        'Full Stack Web Developer (PHP, Symfony, Python, Django, Javascript, Vue.js)',
        'Created different bots (Telegram, WhatsApp) for automate processes.',
        'Developed automated scrapers/crawlers.',
        'Created desktop apps with C# (WinForms) and Java (JavaFX).',
        'Creation of mobile apps with Java and Android Studio.',
        'Developed a Anti-Cheat systems with C# for keep the security in Cuba intranet.',
        'Implemented independent libraries and managed some Linux servers.',
      ],
      company: 'Freelancer',
      image: '/projects/logo/freelancer.png',
      techs: ['Python', 'Django', 'PHP', 'Javascript', 'Vue.js', 'C#', 'GraphQL', 'Git', 'Scrapy', 'Linux', 'MySQL'],
      startDate: '2016-10-01',
      endDate: '2022-06-01',
    },
  ],
};
