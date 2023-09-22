<template>
  <button class="send-button" @click="$emit('sendVoiceInput')">
    <Icon icon="material-symbols:send" class="icon" />
  </button>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default { name: "SendButton", props: {}, components: { Icon } };
</script>

<style scoped>
.send-button {
  color: var(--link);
  background-color: var(--white);
  border: solid 1px var(--border);
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 50%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: var(--white-hover);
  }
}
</style>
