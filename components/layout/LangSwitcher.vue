<template>
  <button @click="changeLocale(nextLocale)">
    <span :class="'fi fi-' + countryCode"></span>
  </button>
</template>

<script>
export default {
  name: "LangSwitcher",
  data() {
    return {
      lang: this.$i18n.locale,
    }
  },
  computed: {
    nextLocale() {
      return this.lang === 'en' ? 'es' : 'en';
    },
    countryCode() {
      return this.lang === 'en' ? 'gb' : 'es';
    }
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.setLocale(locale);
      this.lang = locale;
      const hash = ['', '#'].includes(this.$router.currentRoute.hash) ? {} : {
        hash: this.$router.currentRoute.hash.replace('#', '')};
      this.$router.push({ path: '', query: { lang: locale }, ...hash});
    },
    mounted() {
      this.lang = this.$i18n.locale;
    },
    updated() {
      this.lang = this.$i18n.locale;
    },
    unmounted() {
      this.lang = this.$i18n.locale;
    }
  }
}
</script>
