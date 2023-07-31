export default ({ app, store }) => {
  // Every time the route changes (fired on initialization too)
  app.router.beforeEach((to, from, next) => {
    // Detect language
    if (to.query.lang) {
      if (!['es', 'en'].includes(to.query.lang)) {
        to.query.lang = 'en';
      }
      app.i18n.setLocale(to.query.lang);
    }
    // Detect page
    const value = to.hash.replace('#', '');
    store.commit('SET_PAGE', value);

    // Set title
    const title = (value !== '' ? app.i18n.t(value) + ' - ' : '') + "Michel Suarez";
    if (process.client) {
      document.title = title;
    } else {
      app.head.title = title;
    }
    next();
  });
};
