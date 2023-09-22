<template>
  <VoiceInputPresentation
    @startVoiceInput="startVoiceInput"
    v-bind:isDuringVoiceInput="isDuringVoiceInput"
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
      isDuringVoiceInput: false,
    };
  },

  methods: {
    startVoiceInput() {
      this.isDuringVoiceInput = true;
    },
  },
};
</script>

<style scoped></style>
