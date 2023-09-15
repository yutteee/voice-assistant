<template>
  <OpponentChatPresentation text="Hello" time="12:00" />
</template>

<script>
import OpponentChatPresentation from "./OpponentChat/index.vue";
export default {
  name: "ChatScreenPresentation",
  props: {},
  components: { OpponentChatPresentation },
};
</script>

<style scoped>
.wrapper {
  padding: 16px;
}
</style>
