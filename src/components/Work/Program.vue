<template>
  <div class="card shadow-sm">
    <div class="card flex-row flex-wrap">
      <div class="card-header">
        <img :src="logopath" style="width:200px" alt="Smart Green logo" />
      </div>
      <div class="card-block p-4">
        <h1 class="card-title font-weight-bold">{{name}}</h1>
        <p class="card-text">{{description}}</p>
        <a :href="gitrepohref" target="_blank" class="btn btn-primary">Github repo</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Program",
  props: {
    name: {},
    logo: {},
    description: {},
    gitrepo: {},
  },
  computed: {
    logopath: function () {
      return require(`@/assets/apps/${this.logo}.jpg`);
    },
    gitrepohref: function () {
      return `https://github.com/chemsedd/${this.gitrepo}`;
    },
  },
};
</script>

<style>
</style>