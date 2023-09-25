import { io } from "socket.io-client";

class SocketClient {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
    console.log(`Connecting socket...`);
  }

  startVoiceInput() {
    this.socket.emit("START");
    console.log("start voice input");
  }

  sendVoiceInputData(audio) {
    this.socket.emit("AUDIO", audio);
  }

  recognizeVoiceInput(callback) {
    this.socket.on("RECOGNIZE", function (text, is_final) {
      return callback(text, is_final);
    });
  }

  restartVoiceInput() {
    this.socket.emit("RESTART");
    console.log("restart voice input");
  }

  disconnect() {
    this.socket.disconnect();
  }
}

export default new SocketClient();
