<template>
  <div class="row p-4">
    <div v-for="app in apps" :key="app.id" class="w-100">
      <div class="col-md-12 p-4">
        <Program
          :name="app.name"
          :logo="app.logo"
          :description="app.description"
          :gitrepo="app.gitrepo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Program from "@/components/Work/Program.vue";
import AppsFile from "@/assets/apps/apps.json";

export default {
  components: {
    Program,
  },
  data: function () {
    return {
      apps: AppsFile.apps,
    };
  },
};
</script>

<style>
</style>