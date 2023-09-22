<template>
  <button class="delete-button" @click="$emit('deleteVoiceInput')">
    <Icon icon="ph:trash-fill" class="icon" />
  </button>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default { name: "DeleteButton", props: {}, components: { Icon } };
</script>

<style scoped>
.delete-button {
  color: var(--error);
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
