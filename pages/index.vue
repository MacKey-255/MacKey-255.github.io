<template>
  <main class="tab-content flex items-center md:h-screen">
    <div class="mx-auto">
      <Home :activePage.sync="actualActivePage" v-if="isActive(1)" />
      <Skills v-else-if="isActive(2)" />
      <Portfolio v-else-if="isActive(3)" />
      <Contact v-else-if="isActive(4)" />
      <div v-else>Nothing</div>
    </div>
  </main>
</template>

<script>
import Home from "@/components/tabs/Home";
import Skills from "@/components/tabs/Skills";
import Portfolio from "@/components/tabs/Portfolio";
import Contact from "@/components/tabs/Contact";

export default {
  name: 'IndexPage',
  props: {
    activePage: Number,
  },
  data() {
    return {
      actualActivePage: this.activePage,
    }
  },
  watch: {
    actualActivePage: function (newVal) {
      this.updateActivePage(newVal);
      return newVal;
    },
    activePage: function (newVal) {
      this.actualActivePage = newVal;
      return newVal;
    },
  },
  components: { Home, Skills, Portfolio, Contact },
  methods: {
    isActive(pageNumber) {
      return this.actualActivePage === pageNumber;
    },
    updateActivePage(value) {
      this.$emit('update:activePage', value);
    }
  },
}
</script>

<style scoped>
.tab-content {
  padding-bottom: 24px; /* Footer separation */
}
</style>
