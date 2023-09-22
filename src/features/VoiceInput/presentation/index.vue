<template>
  <div>
    <VoiceInputStartPresentation
      v-if="!isDuringVoiceInput"
      @startVoiceInput="$emit('startVoiceInput')"
    />
    <DuringVoiceInput v-if="isDuringVoiceInput" />
  </div>
</template>

<script>
import VoiceInputStartPresentation from "./VoiceInputStart/index.vue";
import DuringVoiceInput from "./DuringVoiceInput/index.vue";

export default {
  name: "VoiceInputPresentation",
  props: {
    isDuringVoiceInput: Boolean,
  },
  components: { VoiceInputStartPresentation, DuringVoiceInput },
};
</script>

<style scoped>
.wrapper {
  padding: 16px;
}
</style>
