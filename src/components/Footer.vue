<template>
  <footer>
    <div class="footer-mainSection">
      <div class="footer-leftSection">
        <p class="footer-title">@NelsonMosquera</p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining a copy of
          this software and associated documentation files (the "Software"), to deal in
          the Software without restriction, including without limitation the rights to
          use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
          the Software.
        </p>
      </div>
      <div class="footer-middleSection">
        <p class="footer-title">CONTACT</p>
        <p>
          PHONE: +57 300-572-4127 <br />
          EMAIL: nelson.a.mosquera@gmail.com <br />WHATSAPP:
          <a
            class="footer-whatsAppLink"
            href="https://api.whatsapp.com/send?phone=+57%20300%20848%201578&text=Hello%20I%20would%20like%20to%20contact%20you"
          >
            click here
          </a>
        </p>
      </div>
      <div class="footer-rightSection">
        <p class="footer-title">Follow me!</p>
        <div class="footer-icons">
          <a
            :class="[dark_mode ? 'dark-mode' : 'light-mode']"
            href="https://www.linkedin.com/in/nelson-mosquera-2414aa170/"
            ><i class="fab fa-linkedin-in fa-lg"></i
          ></a>
          <a
            :class="[dark_mode ? 'dark-mode' : 'light-mode']"
            href="https://www.instagram.com/monotera_/"
          >
            <i class="fab fa-instagram fa-lg"></i>
          </a>
          <a
            :class="[dark_mode ? 'dark-mode' : 'light-mode']"
            href="https://github.com/monotera"
          >
            <i class="fab fa-github fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
    <p class="footer-copyRight">
      2020 <br />Personal web page by
      <a class="footer-copyRightLink" href="https://github.com/monotera"
        >Nelson Mosquera</a
      >
    </p>
  </footer>
</template>
<script>
export default {
  computed: {
    dark_mode: function () {
      return this.$store.getters.getDark_mode;
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  margin-bottom: 0.5rem;
  text-align: center;
  @media screen and (min-width: $breakpoint-desktop) {
    text-align: start;
  }
}
footer {
  color: $main-font-color;
  background: $main-background-color;
  display: inline-block;
  font-family: $footer-main-font;
  margin: 0;
  padding: 3rem 0;
  width: 100%;
  .footer-mainSection {
    @media screen and (min-width: $breakpoint-desktop) {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      align-items: flex-start;
    }
  }
  .footer-title {
    font-family: $footer-title-font;
  }
  .footer-copyRight {
    font-family: $footer-copyRigth-font;
    padding: 0.8rem;
    @media screen and (min-width: $breakpoint-desktop) {
      text-align: center;
    }
  }
  .footer-leftSection,
  .footer-middleSection,
  .footer-rightSection,
  .copy,
  .footer-icons {
    align-items: center;
    margin: 0.5rem;
    padding: 0.8rem;
    @media screen and (min-width: $breakpoint-desktop) {
      align-items: flex-start;
    }
  }
  .footer-leftSection {
    @media screen and (min-width: $breakpoint-desktop) {
      width: 20%;
    }
  }
  .footer-rightSection {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: $breakpoint-desktop) {
      width: 20%;
      align-items: center;
    }
  }
  .footer-icons {
    display: flex;
    height: 0;
    justify-content: space-evenly;
    width: 100%;
    @media screen and (min-width: $breakpoint-tablet) and (max-width: $breakpoint-desktop) {
      width: 40%;
    }
  }
  .footer-copyRightLink,
  .footer-whatsAppLink {
    &:hover {
      color: $main-links-color;
      border-bottom: 1px solid;
    }
  }
  i {
    @media screen and (min-width: $breakpoint-desktop) {
      font-size: 2vw;
      padding: 0 2rem;
    }
    @media screen and (min-width: $breakpoint-desktopLarge) {
      font-size: 1vw;
    }
  }
  .light-mode {
    &:hover {
      color: $main-links-color;
    }
  }
  .dark-mode {
    &:hover {
      color: $main-links-dark-color;
    }
  }
}
</style>
