<template>
  <div id="home" :class="[dark_mode ? 'dark-mode' : 'light-mode']">
    <div class="info">
      <h1 :class="[dark_mode ? 'des-dark-mode' : 'des-light-mode']" class="title">
        Nelson Alejandro Mosquera <br />Barrera
      </h1>
      <div class="subtitle">
        <div
          class="point"
          :class="[dark_mode ? 'point-dark-mode' : 'point-light-mode']"
        ></div>
        <h2
          :class="[dark_mode ? 'des-dark-mode' : 'des-light-mode']"
          class="subtitle-text"
        >
          Software Developer
        </h2>
        <div
          class="point"
          :class="[dark_mode ? 'point-dark-mode' : 'point-light-mode']"
        ></div>
      </div>
      <p :class="[dark_mode ? 'des-dark-mode' : 'des-light-mode']">
        Welcome to my personal website! <br />
        With this page my goal is to show you a bit of my life and my personal projects.
        <br />
        If you like what you see you can scroll to the contact section and contact me!
        <br />
      </p>
      <button :class="[dark_mode ? 'btn-dark-mode' : 'btn-light-mode']" class="home-btn">
        Click me!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "Light",
    };
  },
  computed: {
    dark_mode: function () {
      return this.$store.getters.getDark_mode;
    },
  },
};
</script>

<style lang="scss" scoped>
//General styling
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  font-family: $home-main-font;
}

//Dark and light mode styles
.light-mode {
  background-image: url("../assets/background-light.jpg");
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4);
}
.dark-mode {
  background-image: url("../assets/background-dark.jpeg");
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
}
.point-light-mode {
  background-color: $page-main-color;
}
.point-dark-mode {
  background-color: $page-main-color-dark;
}
.des-light-mode {
  color: $page-main-color;
}
.des-dark-mode {
  color: $page-main-color-dark;
}
.btn-light-mode {
  background-color: $main-btn-color;
  border: 3px solid $page-main-color;
  color: $main-font-color;
  &:hover {
    background-color: $page-main-color;
    color: $main-btn-color;
  }
}
.btn-dark-mode {
  background-color: $main-btn-color-dark;
  border: 3px solid $main-btn-border-color;
  color: $main-btn-border-color;
  &:hover {
    background-color: $main-btn-border-color;
    color: $main-btn-color-dark;
  }
}

// Component style
.subtitle {
  display: flex;
  justify-content: center;
  align-items: center;
}
.info {
  color: $page-main-color;
  text-align: center;
}
.title {
  font-size: 4rem;
  @media screen and (max-width: $breakpoint-desktop) {
    font-size: 2rem;
  }
}
.subtitle-text {
  font-size: 2.5rem;

  @media screen and (max-width: $breakpoint-desktop) {
    font-size: 1rem;
  }
}
p {
  font-size: 1rem;
  margin-top: 1rem;
  @media screen and (max-width: $breakpoint-desktop) {
    font-size: 0.7rem;
    padding: 1rem;
    margin-top: 0;
  }
}
.point {
  width: 1em;
  height: 1em;
  border-radius: 50%;
  font-size: 1rem;
  margin: 0 1rem;
  @media screen and (max-width: $breakpoint-desktop) {
    font-size: 0.5rem;
  }
}

.home-btn {
  cursor: pointer;
  font-family: $contact-text-font;
  font-size: 0.8rem;
  margin: 1rem;
  padding: 0.5rem 2rem;
  transition: 0.5s;
  border-radius: 5rem;
  width: 40%;
  @media screen and (min-width: $breakpoint-tablet) and (max-width: $breakpoint-desktop) {
    font-size: 1rem;
  }
  @media screen and (min-width: $breakpoint-desktop) {
    font-size: 1.2rem;
  }
}
</style>
