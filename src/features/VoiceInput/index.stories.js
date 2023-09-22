import VoiceInputPresentation from "./presentation/index.vue";

export default {
  title: "features/VoiceInput",
  component: VoiceInputPresentation,
  tags: ["autodocs"],
  argTypes: {
    isDuringVoiceInput: {
      control: {
        type: "boolean",
      },
    },
  },
};

export const BeforeVoiceInput = {
  args: {
    isDuringVoiceInput: false,
  },
};

export const DuringVoiceInput = {
  args: {
    isDuringVoiceInput: true,
  },
};
