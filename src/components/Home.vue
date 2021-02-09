<template>
  <div id="home">
    <div class="info">
      <h1 class="title">Nelson Alejandro Mosquera <br />Barrera</h1>
      <div class="subtitle">
        <div class="point"></div>
        <h2 class="subtitle-text">Sotware Developer</h2>
        <div class="point"></div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, esse! Quos, a.<br />
        Omnis, quibusdam reprehenderit vero, ipsa a quas vitae corrupti et assumenda<br />
      </p>
      <button>Click me!</button>
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
  background-image: url("../assets/b.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
  height: 100vh;
  color: white;
  font-family: $home-main-font;

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
    }
  }
  .point {
    background-color: $page-main-color;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    font-size: 1rem;
    margin: 0 1rem;
    @media screen and (max-width: $breakpoint-desktop) {
      font-size: 0.5rem;
    }
  }

  button {
    background-color: lightseagreen;
    border: 3px solid $main-font-color;
    color: $main-font-color;
    cursor: pointer;
    font-family: $contact-text-font;
    font-size: 0.8rem;
    margin: 1rem;
    padding: 0.5rem 2rem;
    transition: 0.5s;
    border-radius: 5rem;
    width: 40%;
    &:hover {
      background-color: $secondary-background-color;
      color: lightseagreen;
    }
    @media screen and (min-width: $breakpoint-tablet) and (max-width: $breakpoint-desktop) {
      font-size: 1rem;
    }
    @media screen and (min-width: $breakpoint-desktop) {
      font-size: 1.2rem;
    }
  }
}
</style>
