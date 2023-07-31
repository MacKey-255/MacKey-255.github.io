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
import AppMenu from "@/components/layout/AppMenu";
import AppFooter from "@/components/layout/AppFooter";
import Particles from "@/components/layout/Particles";
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: "default",
  components: {AppMenu, AppFooter, Particles},
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
      // Fix problem with Chrome and saturate background
      if(!!window.chrome) {
        console.log('Chrome')
      }
    }
  }
}
</script>

<style>
/* Scrollbar */
* {
  scrollbar-width: thin;
  scrollbar-color: #3b82f6 #737373;
}

*::-webkit-scrollbar {
  width: 3px;
}

*::-webkit-scrollbar-track {
  background: #737373;
  border-radius: 5px;
}

*::-webkit-scrollbar-thumb {
  background-color: #3b82f6;
  border-radius: 14px;
  border: 3px solid #3b82f6;
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

/* Transitions */
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s ease-in-out;
}

/* Tooltips */
.tooltip {
  visibility: hidden;
  position: absolute;
}

.has-tooltip:hover .tooltip {
  visibility: visible;
  z-index: 50;
}
</style>
