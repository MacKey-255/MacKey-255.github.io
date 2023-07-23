<template>
  <h1 class="m-4 text-center dark:text-white md:text-3xl lg:text-3xl">
    <font-awesome-icon :icon="icon"/>
    {{ $t(title) }}
  </h1>
</template>
<script>
export default {
  name: "PageHeader",
  props: ["icon", "title"],
};
</script>
