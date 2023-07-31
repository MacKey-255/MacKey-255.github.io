<script>
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default {
  name: "FancyBox",
  props: {
    options: Object,
  },
  methods: {
    click() {
      const node = this.$refs.container.childNodes[0];
      if (node === undefined) {return;}
      node.click();
    }
  },
  mounted() {
    Fancybox.bind(this.$refs.container, '[data-fancybox]', {
      ...(this.options || {}),
    });
  },
  updated() {
    Fancybox.unbind(this.$refs.container);
    Fancybox.close();

    Fancybox.bind(this.$refs.container, '[data-fancybox]', {
      ...(this.options || {}),
    });
  },
  unmounted() {
    Fancybox.destroy();
  },
};
</script>

<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>
