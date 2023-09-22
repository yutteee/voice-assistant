<template>
  <div>
    <VoiceInputStartPresentation />
  </div>
</template>

<script>
import VoiceInputStartPresentation from "./VoiceInputStart/index.vue";

export default {
  name: "VoiceInputPresentation",
  props: {},
  components: { VoiceInputStartPresentation },
};
</script>

<style scoped>
.wrapper {
  padding: 16px;
}
</style>
