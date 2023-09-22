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
    <StopVoiceInput
      v-if="screenStatus === 'stop'"
      @deleteVoiceInput="$emit('deleteVoiceInput')"
      @restartVoiceInput="$emit('restartVoiceInput')"
      @sendVoiceInput="$emit('sendVoiceInput')"
    />
  </div>
</template>

<script>
import VoiceInputStartPresentation from "./VoiceInputStart/index.vue";
import DuringVoiceInput from "./DuringVoiceInput/index.vue";
import StopVoiceInput from "./StopVoiceInput/index.vue";

export default {
  name: "VoiceInputPresentation",
  props: {
    screenStatus: String, // "start" | "during" | "end"
  },
  components: { VoiceInputStartPresentation, DuringVoiceInput, StopVoiceInput },
};
</script>

<style scoped>
.wrapper {
  padding: 16px;
}
</style>
