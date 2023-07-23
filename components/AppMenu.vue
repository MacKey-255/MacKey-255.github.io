<template>
  <nav class="navbar dark:text-white">
    <div class="menu md:rounded-lg bg-slate-300/[0.8] dark:bg-slate-600/[0.8]">
      <input class="menu_input" id="btn1" name="menu" type="radio" value="1" :checked="activePage === 1"
             @input="updateActivePage" />
      <div class="menu_contain">
        <label class="menu_label" for="btn1">
          <font-awesome-icon icon="house-chimney" class="fa-icon"></font-awesome-icon>
          <span class="menu_text">
            {{ $t('home') }}
          </span>
        </label>
      </div>

      <input class="menu_input" id="btn2" name="menu" type="radio" value="2" :checked="activePage === 2"
             @input="updateActivePage" />
      <div class="menu_contain">
        <label class="menu_label" for="btn2">
          <font-awesome-icon icon="address-card" class="fa-icon"></font-awesome-icon>
          <span class="menu_text">
            {{ $t('skills') }}
          </span>
        </label>
      </div>

      <input class="menu_input" id="btn3" name="menu" type="radio" value="3" :checked="activePage === 3"
             @input="updateActivePage" />
      <div class="menu_contain">
        <label class="menu_label" for="btn3">
          <font-awesome-icon icon="briefcase" class="fa-icon fag-align"></font-awesome-icon>
          <span class="menu_text">
            {{ $t('projects') }}
          </span>
        </label>
      </div>

      <input class="menu_input" id="btn4" name="menu" type="radio" value="4" :checked="activePage === 4"
             @input="updateActivePage" />
      <div class="menu_contain">
        <label class="menu_label" for="btn4">
          <font-awesome-icon icon="envelope-open" class="fa-icon fag-align"></font-awesome-icon>
          <span class="menu_text">
            {{ $t('contact') }}
          </span>
        </label>
      </div>

      <div class="menu_contain">
        <label class="menu_label">
          <lang-switcher />
          <span class="menu_text">
            {{ $t('language') }}
          </span>
        </label>
      </div>

      <div class="menu_contain">
        <label class="menu_label">
          <dark-mode-switcher />
          <span class="menu_text">
            {{ $t('dark_mode') }}
          </span>
        </label>
      </div>
    </div>
  </nav>
</template>

<script>
/* Ref: https://codepen.io/Anna_Batura/pen/qBbaXBd */
export default {
  name: "AppMenu",
  props: {
    activePage: Number,
  },
  methods: {
    updateActivePage(event) {
      this.$emit('update:activePage', parseInt(event.target.value));
    }
  },
}
</script>

<style scoped>
.navbar {
  margin: auto 2rem;
  font-size: .9rem;
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
}
.menu {
  position: relative;
  padding: 8px;
}
.menu:hover .menu_text {
  display: block;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.fa-icon {
  font-size: 20px;
  position: relative;
  top: 3px;
  opacity: 0.7;
}
.fag-align {
  margin-left: 2px;
}

.menu_text {
  display: none;
  padding-left: 10px;
}

.menu_label {
  height: 40px;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  line-height: 30px;
  text-transform: uppercase;
  overflow: hidden;
  display: flex;
  padding: 6px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.menu_label:hover .fa-icon {
  opacity: 1;
}

.menu_text {
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.menu_input[type=radio] {
  display: none;
}
.menu_input[type=radio]:checked + .menu_contain .menu_label {
  background-color: rgba(255, 255, 255, 0.3);
}
.menu_input[type=radio]:checked + .menu_contain .menu_label .fa-icon,
.menu_input[type=radio]:checked + .menu_contain .menu_label .menu_text {
  opacity: 1;
}
.menu_input[type=radio]:checked + .menu_contain .menu_label {
  opacity: 1;
  -moz-transform: translateY(0) translateX(0) scale(1);
  -ms-transform: translateY(0) translateX(0) scale(1);
  -webkit-transform: translateY(0) translateX(0) scale(1);
  transform: translateY(0) translateX(0) scale(1);
}

@media only screen and (max-device-width: 640px) {
  .navbar {
    margin: 0;
    position: relative;
    transform: none;
  }
  .menu {
    display: flex;
  }
  .menu_contain {
    flex-grow: 1;
  }
  .menu_label {
    width: 36px;
  }
  .menu:hover .menu_text {
    opacity: 0;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  .menu .menu_label:hover {
    width: auto;
  }
  .menu .menu_label:hover .menu_text {
    opacity: 1;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
}
</style>
