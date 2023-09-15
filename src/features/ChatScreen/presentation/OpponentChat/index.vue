<template>
  <div class="wrapper">
    <div class="text">{{ text }}</div>
    <span class="detail2 time">{{ time }}</span>
  </div>
</template>

<script>
export default {
  name: "OpponentChatPresentation",
  props: {
    text: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  width: fit-content;
}

.text {
  background-color: var(--white);
  border-radius: 0 8px 8px 8px;
  padding: 8px 12px;
  max-width: 280px;
}

.time {
  position: absolute;
  bottom: 24px;
  right: -4px;
  transform: translate(50%, 50%);
}
</style>
