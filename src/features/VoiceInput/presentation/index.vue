<template>
  <div>
    <VoiceInputStartPresentation />
    <DuringVoiceInput />
  </div>
</template>

<script>
import VoiceInputStartPresentation from "./VoiceInputStart/index.vue";
import DuringVoiceInput from "./DuringVoiceInput/index.vue";

export default {
  name: "VoiceInputPresentation",
  props: {},
  components: { VoiceInputStartPresentation, DuringVoiceInput },
};
</script>

<style scoped>
.wrapper {
  padding: 16px;
}
</style>
