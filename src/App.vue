<template>
  <div id="app">
    <Header/>
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home";
import Header from "./components/Header"
export default {
  name: "App",
  components: { Home , Header},

};
</script>

<style lang='scss' >
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
