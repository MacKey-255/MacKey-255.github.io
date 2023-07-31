<template>
  <main class="tab-content flex md:h-screen sm:pl-10 lg:pl-14 xl:pl-16">
    <transition name="fade" mode="out-in">
      <Skills v-if="isActive('skills')"/>
      <Portfolio v-else-if="isActive('projects')"/>
      <Contact v-else-if="isActive('contact')"/>
      <Home v-else/>
    </transition>
  </main>
</template>

<script>
import Home from "@/components/tabs/Home";
import Skills from "@/components/tabs/Skills";
import Portfolio from "@/components/tabs/Portfolio";
import Contact from "@/components/tabs/Contact";
import {mapGetters} from "vuex";

export default {
  name: 'IndexPage',
  components: {Home, Skills, Portfolio, Contact},
  computed: {
    ...mapGetters(["activePage"])
  },
  methods: {
    isActive(pageNumber) {
      return this.activePage === pageNumber;
    },
  },
}
</script>

<style scoped>
main {
  will-change: transform, opacity;
}

.tab-content {
  padding-bottom: 24px; /* Footer separation */
}
</style>
