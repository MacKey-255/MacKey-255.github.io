<template>
  <footer>
    <p class="dark:text-white">© {{ new Date().getFullYear() }} Michel Suárez (MacKey-255).</p>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: calc(50% - 132px);
  z-index: 5;
}
</style>
