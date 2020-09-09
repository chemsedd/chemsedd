<template>
  <div>
    <a data-toggle="modal" data-target="#logomodal">
      <div class="view overlay shadow">
        <img :src="path" class="img-fluid z-depth-2 rounded hoverable" alt="Responsive image" />
        <div class="mask flex-center waves-effect waves-light rgba-red-strong">
          <h2 class="white-text font-weight-bold text-center">{{title}}</h2>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Logo",
  components: {},
  props: {
    title: {
      type: String,
      default: "Logo concept",
      required: true,
    },
    filename: {
      type: String,
      default: "https://picsum.photos/1080",
      required: true,
    },
  },
  computed: {
    path: function () {
      return require(`@/assets/logos/${this.filename}.jpg`);
    },
  },
  methods: {},
};
</script>

<style>
</style>