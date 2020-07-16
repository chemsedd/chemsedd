<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="display-2">My work</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <GraphicDesign />
      </div>
      <div class="col-md-6">
        <Programming />
      </div>
    </div>
  </div>
</template>

<script>
import GraphicDesign from "./Work/GraphicDesign";
import Programming from "./Work/Programming";

export default {
  name: "Work",
  components: {
    GraphicDesign,
    Programming
  }
};
</script>

<style>
</style>