<template>
  <div>
    <!-- Modal -->
    <div>
      <logo-modal :title="title" :logoname="logoname" />
    </div>
    <!-- Logos -->
    <div class="row p-4">
      <div class="col-md-6 p-3">
        <logo title="Tech Talks" filename="tech-talks" />
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-6 p-3">
            <logo title="Arduino workshop" filename="arduino" />
          </div>
          <div class="col-md-6 p-3">
            <logo title="Babo phone store" filename="babophone" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 p-3">
            <logo title="Flash delivery" filename="falsh-delivery" />
          </div>
          <div class="col-md-6 p-3">
            <logo title="Startup Camp Biskra" filename="startup-camp" />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-6 p-3">
            <logo title="DMPS app" filename="dmps" />
          </div>
          <div class="col-md-6 p-3">
            <logo title="Galaxynet" filename="galaxynet" />
          </div>
          <div class="col-md-6 p-3">
            <logo title="Ride Proud" filename="ride-proud" />
          </div>
          <div class="col-md-6 p-3">
            <logo title="Real Soft Multimedia" filename="realsoft-multimedia" />
          </div>
        </div>
      </div>
      <div class="col-md-6 p-3">
        <logo title="Om Djebril" filename="om-djebril" />
      </div>
    </div>
  </div>
</template>

<script>
import LogoModal from "@/components/Work/LogoModal.vue";
import Logo from "@/components/Work/Logo.vue";
export default {
  name: "LogosRow",
  components: {
    LogoModal,
    Logo,
  },
  data: function () {
    return {
      title: "Logo title",
      logoname: "arduino",
    };
  },
};
</script>

<style>
</style>