<template>
  <div>
    <particles />

    <h1 class="m-4 text-center md:text-3xl lg:text-3xl">
      <font-awesome-icon icon="fa-solid fa-house" />
      {{ $t('home') }}
    <lang-switcher />
    </h1>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
