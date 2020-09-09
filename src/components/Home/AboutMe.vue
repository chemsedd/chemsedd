<template>
  <div class="row align-items-center p-5">
    <div class="col-md-7 text-dark text-right">
      <h1 class="display-3 font-weight-bold">
        About me
        <h5 class="font-weight-bold">{programmer}</h5>
      </h1>
      <p>
        Hello, my name is
        <strong>Chems Eddine Senoussi</strong>, I'm a Computer Science graduate with a master's degree in Artificial Intelligence. I've worked on small projects as a frontend and a backend developer. I mainly use Vue.js and Bootstrap 4 (Frontend), and Django (Backend).
        I started using Python in 2017, i worked on academic projects about Machine/Deep learning and other Artificial Intelligence sub-fields.
        For Graphic Design, i have professional experience of 3 years, i worked with different advertizing agencies in my local area.
      </p>
    </div>
    <div class="col-md-5" align="center">
      <img class="rounded-circle w-75 p-2 peach-gradient" src="@/assets/me.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
.center-content {
  display: table;
  margin: auto;
}
</style>