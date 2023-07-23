<template>
  <main class="tab-content flex items-center md:h-screen">
    <div class="mx-auto">
      <Home v-if="isActive(1)"/>
      <Skills v-else-if="isActive(2)"/>
      <Portfolio v-else-if="isActive(3)"/>
      <Contact v-else-if="isActive(4)"/>
      <div v-else>Nothing</div>
    </div>
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
.tab-content {
  padding-bottom: 24px; /* Footer separation */
}
</style>
