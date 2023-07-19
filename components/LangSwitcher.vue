<template>
  <button @click="changeLocale(nextLocale)">
    <span :class="'fi fi-' + countryCode"></span>
  </button>
</template>

<script>
export default {
  name: "LangSwitcher",
  computed: {
    nextLocale() {
      return this.$i18n.locale === 'en' ? 'es' : 'en';
    },
    countryCode() {
      return this.$i18n.locale === 'en' ? 'gb' : 'es';
    }
  },
  methods: {
    async changeLocale(locale) {
      this.$i18n.setLocale(locale);
      await this.$router.push('/?lang=' + locale);
    }
  }
}
</script>
