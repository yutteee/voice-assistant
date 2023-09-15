<template>
  <div id="app">
    <div>hoge</div>
  </div>
</template>

<script>
import "normalize.css";

export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir Hiragino-kaku-gothic-proN, sans-serif;
  color: var(--text);
  background-color: var(--background);
  font-size: 16px;
  min-height: 100vh;
  width: 100%;
}

:root {
  --primary: #5cdce6;
  --background: #e7fafb;
  --link: #4ab0b8;
  --white: #ffffff;
  --error: #f13d3d;
  --border: #b3bdbe;
  --text: #354041;
  --sub-text: #929898;
}

h1 {
  font-size: 24px;
  font-weight: bold;
}

h2 {
  font-size: 20px;
  font-weight: bold;
}

h3 {
  font-size: 18px;
  font-weight: bold;
}

a {
  color: var(--link);
}

span .detail1 {
  font-size: 14px;
  color: var(--sub-text);
}

span .detail2 {
  font-size: 12px;
  color: var(--sub-text);
}
</style>
