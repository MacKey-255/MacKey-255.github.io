<template>
  <div ref="particlesDiv" class="particles" :style="'background: ' + backgroundColor"></div>
</template>

<script>
export default {
  name: "particles",
  props: {
    isDarkMode: Boolean,
  },
  data() {
    return {
      particles: null,
    }
  },
  computed: {
    backgroundColor() {
      return this.isDarkMode ? '#222' : '#f2f2f2';
    },
    particlesOptions() {
      const color = this.isDarkMode ? '#fff' : '#000';
      return {color: {value: color}, line_linked: {color: color}};
    }
  },
  methods: {
    async createParticles() {
      if (!process.client) {
        return;
      }

      /* pJS elements */
      const particlesDiv = this.$refs.particlesDiv,
        pJS_canvas_class = 'particles-js-canvas-el';
      if (particlesDiv === null || particlesDiv === undefined) {
        return;
      }

      /* remove canvas if exists into the pJS target tag */
      const exist_canvas = particlesDiv.getElementsByClassName(pJS_canvas_class);
      if (exist_canvas.length) {
        while (exist_canvas.length > 0) {
          particlesDiv.removeChild(exist_canvas[0]);
        }
      }

      /* create canvas element */
      const canvas_el = document.createElement('canvas');
      canvas_el.className = pJS_canvas_class;

      /* set size canvas */
      canvas_el.style.width = "100%";
      canvas_el.style.height = "calc(100% - 6px)";

      /* append canvas */
      const canvas = particlesDiv.appendChild(canvas_el);

      /* launch particle.js */
      if (canvas != null) {
        const particlesJS = await import('@/plugins/particles.client');
        if (this.particles != null) {  /* destroy last particles */
          this.particles.fn.vendors.destroyJS();
        }
        this.particles = particlesJS.default(particlesDiv, {particles: this.particlesOptions}, true);
      }
    }
  },
  async mounted() {
    /* Create particles by first time */
    await this.createParticles();
  },
  async beforeUpdate() {
    if (this.particles !== null){ /* Only create particles if it exist before */
      await this.createParticles();
    }
  }
}
</script>

<style scoped>
.particles {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}

.count-particles {
  background: #000022;
  position: absolute;
  top: 48px;
  left: 0;
  width: 80px;
  color: #13E8E9;
  font-size: .8em;
  text-align: left;
  text-indent: 4px;
  line-height: 14px;
  padding-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
}

.js-count-particles {
  font-size: 1.1em;
}

#stats, .count-particles {
  -webkit-user-select: none;
}

#stats {
  border-radius: 3px 3px 0 0;
  overflow: hidden;
}

.count-particles {
  border-radius: 0 0 3px 3px;
}
</style>
