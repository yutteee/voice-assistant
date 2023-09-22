<template>
  <div class="container">
    <span class="detail1">~~~~~~~</span>
    <div class="buttons">
      <button class="delete-button">
        <Icon icon="ph:trash-fill" class="icon" />
      </button>
      <button class="stop-button">
        <Icon icon="material-symbols:stop" class="icon" />
      </button>
      <button class="send-button">
        <Icon icon="material-symbols:send" class="icon" />
      </button>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default { name: "DuringVoiceInput", props: {}, components: { Icon } };
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

button {
  background-color: var(--white);
  border-radius: 50%;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  &:hover {
    cursor: pointer;
    background-color: var(--white-hover);
  }
}

.delete-button {
  color: var(--error);
  border: solid 1px var(--border);
  width: 40px;
  height: 40px;
  font-size: 20px;
}

.stop-button {
  color: var(--primary);
  border: solid 1px var(--primary);
  width: 80px;
  height: 80px;
  font-size: 36px;
}

.send-button {
  color: var(--link);
  border: solid 1px var(--border);
  width: 40px;
  height: 40px;
  font-size: 20px;
}
</style>
