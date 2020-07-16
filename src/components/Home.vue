<template>
  <div class="container">
    <Profile />
    <AboutMe />
  </div>
</template>

<script>
import Profile from "./AboutMe/Profile";
import AboutMe from "./AboutMe/AboutMe";

export default {
  name: "Home",
  components: {
    Profile,
    AboutMe
  }
};
</script>

<style>
</style>