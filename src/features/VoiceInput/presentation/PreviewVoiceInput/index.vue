<template>
  <div class="container">
    <span class="detail1">~~~~~~~</span>
    <div class="buttons">
      <DeleteButton @deleteVoiceInput="$emit('deleteVoiceInput')" />
      <button class="play-button" @click="$emit('playVoiceInput')">
        <Icon icon="mdi:play" class="icon" />
      </button>
      <SendButton @sendVoiceInput="$emit('sendVoiceInput')" />
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
import DeleteButton from "../buttons/DeleteButton/index.vue";
import SendButton from "../buttons/SendButton/index.vue";

export default {
  name: "PreviewVoiceInput",
  props: {},
  components: {
    Icon,
    DeleteButton,
    SendButton,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
}

.play-button {
  color: var(--primary);
  background-color: var(--white);
  border: solid 1px var(--primary);
  width: 80px;
  height: 80px;
  font-size: 36px;
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
