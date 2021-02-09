<template>
  <div id="home">
    <div class="info">
      <p class="title">Nelson Alejandro Mosquera <br />Barrera</p>
      <div class="subtitle">
        <div class="point"></div>
        <p class="subtitle-text">Sotware Developer</p>
        <div class="point"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.2), transparent),
    url("../assets/background.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
  font-family: $home-main-font;
  .subtitle {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .info {
    text-align: center;
  }
  .title {
    font-size: 3rem;
    @media screen and (max-width: $breakpoint-desktop) {
      font-size: 2rem;
    }
  }
  .subtitle-text {
    font-size: 2rem;
    @media screen and (max-width: $breakpoint-desktop) {
      font-size: 1rem;
    }
  }
  .point {
    background-color: white;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    font-size: 1rem;
    margin: 0 1rem;
    @media screen and (max-width: $breakpoint-desktop) {
      font-size: 0.5rem;
    }
  }
}
</style>
