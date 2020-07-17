<template>
  <div class="container">
    <div class="row align-items-center text-center">
      <div class="col-md-12 p-4">
        <h1 class="display-3 font-weight-bold">My work</h1>
      </div>
    </div>
    <div class="row pr-4 pl-4 pb-4 pt-2">
      <div class="col-md-6" align="center">
        <router-link to="/work/graphicdesign">
          <GraphicDesignCard />
        </router-link>
      </div>
      <div class="col-md-6" align="center">
        <router-link to="/work/programming">
          <ProgrammingCard />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import GraphicDesignCard from "@/components/Work/GraphicDesignCard";
import ProgrammingCard from "@/components/Work/ProgrammingCard";

export default {
  name: "Work",
  components: {
    GraphicDesignCard,
    ProgrammingCard
  }
};
</script>

<style scoped>
</style>