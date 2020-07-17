<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <Profile />
      </div>
      <div class="col-md-12" align="center">
        <h1>
          <span class="font-weight-bold">Mr.Chems Eddine</span> Senoussi
        </h1>
        <hr class="w-50" />
      </div>
    </div>
    <div class="row p-5">
      <AboutMe />
    </div>
    <div class="row">
      <MyHobbies />
    </div>
  </div>
</template>

<script>
import Profile from "@/components/Home/Profile";
import AboutMe from "@/components/Home/AboutMe";
import MyHobbies from "@/components/Home/MyHobbies";

export default {
  name: "Home",
  components: {
    Profile,
    AboutMe,
    MyHobbies
  }
};
</script>
