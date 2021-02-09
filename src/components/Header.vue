<template>
  <header class="header-wrapper">
    <nav class="header-wrapper-nav">
      <h1 id="logo" class="logo">Nelson Mosquera</h1>
      <ul class="header-wrapper-ul">
        <li>
          <a @click="activate(1)" :class="{ active: active_el == 1 }">Home</a>
        </li>
        <li>
          <a @click="activate(2)" :class="{ active: active_el == 2 }">Information</a>
        </li>
        <li>
          <a @click="activate(3)" :class="{ active: active_el == 3 }">Contact</a>
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
  },
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  background-color: transparent;
  color: white;
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  border-bottom: 1px solid white;
}
a {
  cursor: pointer;
  &:hover {
    color: orange;
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
  color: orange;
}

.logo {
  flex: 2 1 40rem;
  font-family: $logo-font, sans-serif;
}
</style>
