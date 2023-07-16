<template>
  <div>
    <button
      class="bg-purple hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
      @click="changeLocale(nextLocale)">
      <span :class="'fi fi-' + countryCode"></span>
    </button>
  </div>
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
