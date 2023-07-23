export default ({ app }) => {
 // Every time the route changes (fired on initialization too)
 app.router.beforeEach((to, from, next) => {
   // Detect language
   if (to.query.lang) {
      app.i18n.setLocale(to.query.lang);
   }
    next();
 });
};
