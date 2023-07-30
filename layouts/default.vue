<template>
  <div :class="darkClass">
    <particles :is-dark-mode="isDarkMode"/>
    <AppMenu/>

    <div class="container px-4 sm:mx-auto">
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

/* Ref: https://stackoverflow.com/questions/3247358/how-do-i-wrap-text-with-no-whitespace-inside-a-td#answer-5108367 */
.wrap-word {
  white-space: -moz-pre-wrap !important; /* Mozilla, since 1999 */
  white-space: -webkit-pre-wrap; /* Chrome & Safari */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  word-break: break-all;
  white-space: normal;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s ease-in-out;
}
</style>
