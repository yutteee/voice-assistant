<template>
  <div class="container">
    <span class="detail1">Tap the button to record.</span>
    <button class="button">
      <Icon icon="material-symbols:mic" class="icon" />
    </button>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default { name: "VoiceInputStartPresentation", props: {}, components: { Icon } };
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.button {
  background-color: var(--primary);
  color: var(--white);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: #1ee7f6;
  }
}

.icon {
  font-size: 36px;
}
</style>
