import en from './locales/en-US.js';
import es from './locales/es-ES.js';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Michel Suárez - Software Engineer',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'format-detection', content: 'telephone=no' },
      /* Author metadata */
      { name: 'author', content: 'Michel Suárez' },
      { name: 'description', content: 'Software Engineer | Full Stack web developer | Python | Vue.js | Docker.' },
      { name: 'keywords', content: 'Web developer, Backend developer, Full stack developer, Full stack web developer, Python, Django, JavaScript, Vue.js, FastAPI' },
      /* Share metadata */
      { name: 'og:title', content: 'Michel Suárez' },
      { name: 'og:description', content: 'Full Stack Web Developer (Python & Vue.js) and C#/Java Desktop Developer.' },
      { name: 'og:image', content: '/profile.jpg' },
      { name: 'og:url', content: 'https://mackey-255.github.io/' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    'flag-icons/css/flag-icons.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-typer.client.js',
    '~/plugins/route-lang.js',
    '~/plugins/fontawesome.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English'
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Español'
      }
    ],
    strategy: 'no_prefix',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { en, es }
    },
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root',
      alwaysRedirect: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
};
