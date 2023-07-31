<template>
  <div class="mx-auto">
    <div class="sm:mt-8"></div>
    <div class="grid gap-x-10 md:gap-y-6 md:grid-cols-2">
      <div class="md:col-span-1 lg:w-full lg:max-w-7xl lg:gap-x-8">
        <div class="mb-4 ">
          <h1 class="mt-2 mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
            {{ $t('project_education_title') }}:
          </h1>
          <Card v-for="item in educations" v-bind:key="item.title"
                image-class="img-education"
                :title="item.title" :description="item.description"
                :extra="item.institution"
                :image-url="item.image"
                :url="item.link"
                :technologies="item.techs"
                :end-date="item.endDate"
                :start-date="item.startDate"/>
        </div>
        <div class="mb-4">
          <h1 class="my-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
            {{ $t('project_work_title') }}:
          </h1>
          <Card v-for="item in works" v-bind:key="item.title"
                image-class="img-education"
                :title="item.title" :description="item.description"
                :extra="item.company"
                :image-url="item.image"
                :url="item.link"
                :technologies="item.techs"
                :end-date="item.endDate"
                :start-date="item.startDate"/>
        </div>
      </div>

      <div class="md:col-span-1">
        <h1 class="my-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
          {{ $t('project_title') }}:
        </h1>
        <ol class="border-l-2 border-blue-300 dark:border-blue-500 text-gray-900 dark:text-gray-200">
          <li v-for="item in projects" v-bind:key="item.id">
            <bg-saturate class="rounded-r-lg">
              <div class="flex-start items-center flex flex-wrap pt-3">
                <div class="-ml-[8px] h-[16px] w-[16px] rounded-full bg-blue-300 dark:bg-blue-500"></div>
                <p class="text-sm ml-2">{{ item.date }}</p>
                <span v-for="item in item.language"
                      class="inline-block ml-2 mb-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {{item}}
                </span>
              </div>
              <div class="mb-6 px-4 mt-2 pb-3">
                <client-only placeholder="Loading...">
                  <h4 class="pb-1.5 text-xl font-semibold">
                    <span>{{ item.title }}</span>
                  </h4>
                  <p class="pb-3" v-html="item.description"></p>

                  <div class="group inline-flex flex-wrap items-center gap-3" v-if="item.images.length > 0 || item.url">
                    <button
                      v-if="item.images.length > 0"
                      @click="open_gallery('project_' + item.id)"
                      type="button"
                      class="inline-block rounded bg-blue-500 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      {{ $t('preview') }}
                    </button>
                    <a
                      v-if="item.url"
                      target="_blank"
                      rel="noreferrer"
                      :href="item.url"
                      type="button"
                      class="inline-block rounded bg-blue-500 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase
                      leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out
                      hover:bg-info-600 focus:bg-info-600 focus:outline-none focus:ring-0 active:bg-info-700
                      hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]
                      focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]
                      active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]
                      dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)]
                      dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]
                      dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]
                      dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                    >
                      <span class="mr-2">{{ $t('project_link') }}</span>
                      <font-awesome-icon class="text-xs font-norma" :icon="['fas', 'external-link']"/>
                    </a>
                    <fancy-box :ref="'project_' + item.id">
                      <span :data-fancybox="item.id" v-for="img in item.images" :data-src="img"></span>
                    </fancy-box>
                  </div>
                </client-only>
              </div>
            </bg-saturate>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/utils/Card";
import FancyBox from "@/components/utils/FancyBox";
import BgSaturate from "@/components/layout/BgSaturate";

export default {
  name: "Portfolio",
  components: {Card, FancyBox, BgSaturate},
  data() {
    return {
      /* Data */
      project: {
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
      },
      education: {
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
      },
      work: {
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
      }
    }
  },
  computed: {
    projects() {
      return this.project[this.$i18n.locale].map((value) => {
        return {
          ...value,
          date: this.dateToString(new Date(value.date)),
        };
      }).sort((a, b) => b.id - a.id);
    },
    educations() {
      return this.education[this.$i18n.locale].map((value) => {
        const startDate = new Date(value.startDate),
          endDate = value.endDate === undefined ? undefined : new Date(value.endDate);
        return {
          ...value,
          startDate: this.dateToString(startDate),
          endDate: this.isSameDate(startDate, endDate) ? undefined : this.dateToString(endDate),
        };
      });
    },
    works() {
      return this.work[this.$i18n.locale].map((value) => {
        const startDate = new Date(value.startDate),
          endDate = value.endDate === undefined ? undefined : new Date(value.endDate);
        return {
          ...value,
          startDate: this.dateToString(startDate),
          endDate: this.isSameDate(startDate, endDate) ? undefined : this.dateToString(endDate),
        };
      });
    },
  },
  methods: {
    open_gallery(id) {
      const element = this.$refs[id][0];
      if (!element) {
        return;
      }
      element.click();
    },
    dateToString(date) {
      if (date === undefined) {
        return this.$t('present');
      }
      return `${this.$t('months')[date.getMonth()]} ${date.getFullYear()}`;
    },
    isSameDate(first, second) {
      if (first === undefined || second === undefined) {
        return false;
      }
      return first.getMonth() === second.getMonth() && first.getFullYear() === second.getFullYear();
    }
  }
}
</script>

<style>
.img-education {
  width: 128px;
}
</style>
