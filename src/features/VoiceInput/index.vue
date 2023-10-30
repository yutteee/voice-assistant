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
      timeChunkCut: 100,
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

  mounted() {
    this.connection.onmessage = function (event) {
      const data = JSON.parse(event.data);
      console.log(data);
    };
  },

  methods: {
    async startVoiceInput() {
      this.screenStatus = "during";
      const param = JSON.stringify({ action: "START" });
      this.connection.send(param);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64Audio = reader.result.split(",")[1];
          const data = JSON.stringify({
            action: "AUDIO",
            audio: base64Audio,
          });
          this.connection.send(data);
        };
        reader.readAsDataURL(e.data);
      };

      const generateChunkTime = 1000;
      mediaRecorder.start(generateChunkTime);
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
