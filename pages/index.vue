<template>
  <div :class="isDarkMode ? 'dark' : 'light'">
    <particles :is-dark-mode="isDarkMode" />

    <h1 class="m-4 text-center dark:text-white md:text-3xl lg:text-3xl">
      <font-awesome-icon icon="fa-solid fa-house" />
      {{ $t('home') }}
      <lang-switcher />
      <dark-mode-switcher />
    </h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters(['isDarkMode'])
  },
}
</script>
