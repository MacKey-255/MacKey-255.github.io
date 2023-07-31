<template>
  <button @click="changeLocale(nextLocale)">
    <span :class="'fi fi-' + $t('lang')"></span>
  </button>
</template>

<script>
export default {
  name: "LangSwitcher",
  computed: {
    nextLocale() {
      return this.$i18n.locale === 'en' ? 'es' : 'en';
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
