<template>
  <header class="header-wrapper">
    <nav class="header-wrapper-nav">
      <h1 id="logo" class="logo">Nelson Mosquera</h1>
      <ul class="header-wrapper-ul">
        <li>
          <a
            @click="activate(1), scrollAnimation('#home')"
            :class="{ active: active_el == 1 }"
            >Home</a
          >
        </li>
        <li>
          <a
            @click="activate(2), scrollAnimation('#info')"
            :class="{ active: active_el == 2 }"
            >Information</a
          >
        </li>
        <li>
          <a
            @click="activate(3), scrollAnimation('#contact-component')"
            :class="{ active: active_el == 3 }"
            >Contact</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
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
a {
  cursor: pointer;
  &:hover {
    color: $main-links-color;
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

.active {
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
