<template>
  <VoiceInputPresentation
    v-bind:screenStatus="screenStatus"
    @startVoiceInput="startVoiceInput"
    @deleteVoiceInput="deleteVoiceInput"
    @stopVoiceInput="stopVoiceInput"
    @sendVoiceInput="sendVoiceInput"
    @restartVoiceInput="restartVoiceInput"
  />
</template>

<script>
import VoiceInputPresentation from "./presentation/index.vue";

export default {
  name: "VoiceInput",
  props: {},
  components: { VoiceInputPresentation },

  data() {
    return {
      screenStatus: "start", // "start" | "during" | "stop",
      connection: null,
    };
  },

  created() {
    this.connection = new WebSocket("wss://voice-ws.developer.vi-jp-te.info/voice");
    this.connection.onmessage = (e) => {
      console.log(e);
    };
    this.connection.onopen = (e) => {
      console.log(e);
      console.log("connected");
    };
    this.connection.onclose = (e) => {
      console.log(e);
      console.log("disconnected");
    };
    this.connection.onerror = (e) => {
      console.error(e);
      console.log("error");
    };
  },

  methods: {
    async startVoiceInput() {
      this.screenStatus = "during";
      const param = JSON.stringify({ action: "START" });
      this.connection.send(param);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const mediaRecorder = new MediaRecorder(stream);
      const generateChunkTime = 1000;
      mediaRecorder.start(generateChunkTime);

      mediaRecorder.addEventListener("dataavailable", (e) => {
        console.log(e.data);
        // base64 encode
        const reader = new FileReader();
        reader.readAsDataURL(e.data);
        reader.onloadend = () => {
          const base64data = reader.result;
          const param = JSON.stringify({ action: "AUDIO", audio: base64data });
          this.connection.send(param);
        };
      });
    },
    deleteVoiceInput() {
      this.screenStatus = "start";
    },
    stopVoiceInput() {
      this.screenStatus = "stop";
    },
    restartVoiceInput() {
      this.screenStatus = "during";
    },
    sendVoiceInput() {
      this.screenStatus = "start";
    },
  },
};
</script>

<style scoped></style>
