import VoiceInputPresentation from "./presentation/index.vue";

export default {
  title: "features/VoiceInput",
  component: VoiceInputPresentation,
  tags: ["autodocs"],
  argTypes: {
    isDuringVoiceInput: {
      control: {
        type: "String",
      },
    },
  },
};

export const BeforeVoiceInput = {
  args: {
    screenStatus: "start",
  },
};

export const DuringVoiceInput = {
  args: {
    screenStatus: "during",
  },
};

export const AfterVoiceInput = {
  args: {
    screenStatus: "stop",
  },
};
