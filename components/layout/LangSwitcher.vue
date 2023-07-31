<template>
  <button @click="changeLocale(nextLocale)" type="button" :class="icon_class"> {{$t('lang')}}</button>
</template>

<script>
export default {
  name: "LangSwitcher",
  computed: {
    nextLocale() {
      return this.$i18n.locale === 'en' ? 'es' : 'en';
    },
    icon_class() {
      const lang = `fi fi-${this.$t('lang')}`;
      console.log('Locale:', lang, this.$i18n.locale);
      return lang;
    }
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.setLocale(locale);
      const hash = ['', '#'].includes(this.$router.currentRoute.hash) ? {} : {
        hash: this.$router.currentRoute.hash.replace('#', '')};
      this.$router.push({ path: '', query: { lang: locale }, ...hash});
    }
  }
}
</script>
