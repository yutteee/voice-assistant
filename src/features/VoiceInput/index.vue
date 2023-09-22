<template>
  <VoiceInputPresentation
    v-bind:screenStatus="screenStatus"
    @startVoiceInput="startVoiceInput"
    @deleteVoiceInput="deleteVoiceInput"
    @stopVoiceInput="stopVoiceInput"
    @sendVoiceInput="sendVoiceInput"
    @restartVoiceInput="restartVoiceInput"
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
      screenStatus: "start", // "start" | "during" | "stop",
      context: null,
    };
  },

  methods: {
    async startVoiceInput() {
      this.screenStatus = "during";

      // this.context = new window.AudioContext();
    },
    deleteVoiceInput() {
      this.screenStatus = "start";
    },
    stopVoiceInput() {
      this.screenStatus = "stop";
    },
    restartVoiceInput() {
      this.screenStatus = "during";
    },
    sendVoiceInput() {
      this.screenStatus = "start";
    },
  },
};
</script>

<style scoped></style>
