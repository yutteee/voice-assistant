<template>
  <VoiceInputPresentation
    v-bind:screenStatus="screenStatus"
    @startVoiceInput="startVoiceInput"
    @deleteVoiceInput="deleteVoiceInput"
    @stopVoiceInput="stopVoiceInput"
    @sendVoiceInput="sendVoiceInput"
  />
</template>

<script>
import VoiceInputPresentation from "./presentation/index.vue";

export default {
  name: "VoiceInput",
  props: {},
  components: { VoiceInputPresentation },

  data() {
    return {
      screenStatus: "start", // "start" | "during" | "end"
    };
  },

  methods: {
    startVoiceInput() {
      this.screenStatus = "during";
    },
    deleteVoiceInput() {
      this.screenStatus = "start";
    },
    stopVoiceInput() {
      this.screenStatus = "end";
    },
    sendVoiceInput() {
      this.screenStatus = "start";
    },
  },
};
</script>

<style scoped></style>
