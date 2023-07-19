<template>
  <footer>
    <p class="dark:text-white">© {{ new Date().getFullYear() }} Michel Suárez (MacKey-255).</p>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 24px;
  z-index: 5;
}
footer p {
  width: 320px;
  margin: 0 auto;
  text-align: center;
  /*border-radius: 15px 15px 0 0;*/
  /*background: linear-gradient(135deg, #9a0dfe, #637dfb);*/
  /*box-shadow: 0 2px 12px 0 rgba(91, 41, 191, 0.5);*/
}
</style>
