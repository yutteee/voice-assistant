<template>
  <div id="app">
    <VoiceInput />
  </div>
</template>

<script>
import "normalize.css";
import "./global.css";
import VoiceInput from "./features/VoiceInput/index.vue";

export default {
  name: "App",
  components: { VoiceInput },
};
</script>
