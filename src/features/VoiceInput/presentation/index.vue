<template>
  <div>
    <VoiceInputStartPresentation
      v-if="screenStatus === 'start'"
      @startVoiceInput="$emit('startVoiceInput')"
    />
    <DuringVoiceInput
      v-if="screenStatus === 'during'"
      @deleteVoiceInput="$emit('deleteVoiceInput')"
      @stopVoiceInput="$emit('stopVoiceInput')"
      @sendVoiceInput="$emit('sendVoiceInput')"
    />
    <div v-if="screenStatus === 'end'">end</div>
  </div>
</template>

<script>
import VoiceInputStartPresentation from "./VoiceInputStart/index.vue";
import DuringVoiceInput from "./DuringVoiceInput/index.vue";

export default {
  name: "VoiceInputPresentation",
  props: {
    screenStatus: String, // "start" | "during" | "end"
  },
  components: { VoiceInputStartPresentation, DuringVoiceInput },
};
</script>

<style scoped>
.wrapper {
  padding: 16px;
}
</style>
