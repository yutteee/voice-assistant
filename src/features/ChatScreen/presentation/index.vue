<template>
  <div>
    <opponent-chat-presentation text="Hello" time="12:00" />
    <my-chat-presentation text="Hi" time="12:01" />
  </div>
</template>

<script>
import OpponentChatPresentation from "./OpponentChat/index.vue";
import MyChatPresentation from "./MyChat/index.vue";

export default {
  name: "ChatScreenPresentation",
  props: {},
  components: { OpponentChatPresentation, MyChatPresentation },
};
</script>

<style scoped>
.wrapper {
  padding: 16px;
}
</style>
