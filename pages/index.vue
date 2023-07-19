<template>
  <main class="tab-content">
    <Home v-if="isActive(1)" />
    <About v-else-if="isActive(2)" />
    <Portfolio v-else-if="isActive(3)" />
    <Contact v-else-if="isActive(4)" />
    <div v-else>Nothing</div>
  </main>
</template>

<script>
import Home from "@/components/tabs/Home";
import About from "@/components/tabs/About";
import Portfolio from "@/components/tabs/Portfolio";
import Contact from "@/components/tabs/Contact";

export default {
  name: 'IndexPage',
  props: {
    activePage: Number,
  },
  components: { Home, About, Portfolio, Contact },
  methods: {
    isActive(pageNumber) {
      return this.activePage === pageNumber;
    },
  },
}
</script>

<style scoped>
main {
  display: flex;
  overflow: hidden;
  min-height: calc(100vh - 24px);
}
@media only screen and (max-device-width: 640px) {
  main { /* Assign space for navbar */
    min-height: calc(100vh - 84px);
  }
}
</style>
