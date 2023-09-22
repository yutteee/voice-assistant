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
    <PreviewVoiceInput
      v-if="screenStatus === 'end'"
      @deleteVoiceInput="$emit('deleteVoiceInput')"
      @playVoiceInput="$emit('playVoiceInput')"
      @sendVoiceInput="$emit('sendVoiceInput')"
    />
  </div>
</template>

<script>
import VoiceInputStartPresentation from "./VoiceInputStart/index.vue";
import DuringVoiceInput from "./DuringVoiceInput/index.vue";
import PreviewVoiceInput from "./PreviewVoiceInput/index.vue";

export default {
  name: "VoiceInputPresentation",
  props: {
    screenStatus: String, // "start" | "during" | "end"
  },
  components: { VoiceInputStartPresentation, DuringVoiceInput, PreviewVoiceInput },
};
</script>

<style scoped>
.wrapper {
  padding: 16px;
}
</style>
