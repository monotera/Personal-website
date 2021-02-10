<template>
  <header class="header-wrapper">
    <nav class="header-wrapper-nav">
      <h1 id="logo" class="logo">Nelson Mosquera</h1>
      <ul class="header-wrapper-ul">
        <li>
          <a
            @click="activate(1), scrollAnimation('#home')"
            :class="[
              dark_mode ? 'dark_mode' : 'ligth_mode',
              { 'active-dark': active_el == 1 && dark_mode },
              { 'active-light': active_el == 1 && !dark_mode },
            ]"
            >Home</a
          >
        </li>
        <li>
          <a
            @click="activate(2), scrollAnimation('#info')"
            :class="[
              dark_mode ? 'dark_mode' : 'ligth_mode',
              { 'active-dark': active_el == 2 && dark_mode },
              { 'active-light': active_el == 2 && !dark_mode },
            ]"
            >Information</a
          >
        </li>
        <li>
          <a
            @click="activate(3), scrollAnimation('#contact-component')"
            :class="[
              dark_mode ? 'dark_mode' : 'ligth_mode',
              { 'active-dark': active_el == 3 && dark_mode },
              { 'active-light': active_el == 3 && !dark_mode },
            ]"
            >Contact</a
          >
        </li>
        <li><Toggle class="toggle" /></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Toggle from "./Toggle";
import "@mdi/font/css/materialdesignicons.css";

export default {
  components: { Toggle },
  data() {
    return {
      active_el: 1,
    };
  },
  methods: {
    activate(el) {
      this.active_el = el;
    },
    scrollAnimation(section) {
      document.querySelector(section).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  computed: {
    dark_mode: function () {
      return this.$store.getters.getDark_mode;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  background-color: black;
  color: white;
  position: sticky;
  top: 0;
  z-index: 3;
  width: 100%;
  @media screen and (min-width: $breakpoint-desktop) {
    font-size: 1.1rem;
  }
}
.ligth_mode {
  cursor: pointer;
  &:hover {
    color: $main-links-color;
  }
}
.dark_mode {
  cursor: pointer;
  &:hover {
    color: $main-links-dark-color;
  }
}

.header-wrapper-nav {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  min-height: 10vh;
  padding: 2rem;
  width: 90%;
  @media screen and (max-width: $breakpoint-desktop) {
    text-align: center;
    padding: 2rem 0;
  }
}

.header-wrapper-ul {
  align-items: center;
  display: flex;
  flex: 1 1 40rem;
  justify-content: space-around;
  list-style: none;
  font-family: $nav-font;
}

.active-dark {
  color: $main-links-dark-color;
}
.active-light {
  color: $main-links-color;
}
.logo {
  flex: 2 1 40rem;
  font-family: $logo-font, sans-serif;
  @media screen and (max-width: $breakpoint-desktop) {
    margin-bottom: 1rem;
  }
}
</style>
