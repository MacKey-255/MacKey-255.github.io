<template>
  <div class="mx-auto">
    <page-header icon="house" title="home" />
    <div class="text-center">
      <img
        :src="require('@/assets/images/profile.jpg')"
        class="mx-auto mb-4 w-32 rounded-lg"
        alt="Avatar" />
      <h5 class="mb-2 text-xl dark:text-white font-medium leading-tight">Michel Suárez</h5>
      <p class="text-neutral-500 dark:text-neutral-400">Full Stack web developer</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>
