<template>
  <div :class="darkClass">
    <particles :is-dark-mode="isDarkMode"/>
    <AppMenu/>

    <div class="container px-4 md:mx-auto">
      <NuxtChild/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: "default",
  methods: {
    ...mapMutations(['SET_DARK']),
  },
  computed: {
    darkClass() {
      return this.isDarkMode ? 'dark' : 'light';
    },
    ...mapGetters(['isDarkMode'])
  },
  mounted() {
    if (process.client) {
      // Load dark mode from browser local storage
      this.SET_DARK(localStorage.getItem('dark-theme') === 'true');
    }
  }
}
</script>

<style>
.bg-saturate {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: saturate(180%) blur(10px);
}
</style>
