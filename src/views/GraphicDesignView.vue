<template>
  <div class="container">
    <div class="row pt-3">
      <div class="col-md-12 text-center">
        <h1 class="display-1 font-weight-bold">Logos</h1>
        <hr class="w-25" />
      </div>
    </div>
    <logos-row />
  </div>
</template>

<script>
import LogosRow from "@/components/Work/LogosRow.vue";

export default {
  name: "GraphicDesignView",
  components: {
    LogosRow
  }
};
</script>

<style>
</style>