<template>
  <div class="modal fade" id="logomodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="myModalLabel">{{title}}</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <v-zoomer class="zoomer" align="center">
                  <img :src="logo" alt="Logo image" align="center" />
                </v-zoomer>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-success btn-sm">Save image</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    logoname: {
      required: true
    }
  },
  computed: {
    logo: function() {
      return require(`@/assets/logos/${this.logoname}.jpg`);
    }
  }
};
</script>

<style scoped>
img {
  width: 56%;
}

.zoomer {
  width: 100%;
  height: 100%;
}
</style>