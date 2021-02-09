<template>
  <div id="app">
    <Header />
    <Home />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Home, Header, Contact, Footer },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  color: white;
  text-decoration: none;
}
</style>
