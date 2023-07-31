<template>
  <div :class="{'bg-saturate-chrome': isChrome, 'bg-saturate': !isChrome}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BgSaturate",
  data() {
    return {
      isChrome: false,
    };
  },
  mounted() {
    this.isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  },
}
</script>

<style scoped>
.bg-saturate {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: saturate(180%) blur(10px);
  -webkit-backdrop-filter: saturate(180%) blur(10px);
  z-index: -1;
}

.bg-saturate-chrome {
  /*background-color: rgba(243, 244, 246, 0.8);*/
  background-color: rgba(229, 231, 235, 0.8);
}

.dark .bg-saturate-chrome {
  /*background-color: rgba(51, 65, 85, 0.8);*/
  background-color: rgba(30, 41, 59, 0.8);
}
</style>
