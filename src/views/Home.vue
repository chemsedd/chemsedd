<template>
  <div class="container">
    <div class="row p-5">
      <AboutMe />
    </div>
    <div class="row"></div>
  </div>
</template>

<script>
import AboutMe from "@/components/Home/AboutMe";

export default {
  name: "Home",
  components: {
    AboutMe,
  },
};
</script>
