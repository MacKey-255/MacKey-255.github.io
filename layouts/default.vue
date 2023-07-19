<template>
  <div class="container mx-auto" :class="darkClass">
    <particles :is-dark-mode="isDarkMode" />
    <AppMenu :activePage.sync="activePage" />

    <div class="content">
      <NuxtChild :activePage="activePage" />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: "default",
  data() {
    return {
      activePage: 1,
      showModal: false,
      openPortfolio: false,
      details: {},
    };
  },
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
    if(process.client) {
      // Load dark mode from browser local storage
      this.SET_DARK(localStorage.getItem('dark-theme') === 'true');
    }
  }
}
</script>

<style scoped>

</style>
