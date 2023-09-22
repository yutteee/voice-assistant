import VoiceInputPresentation from "./presentation/index.vue";

export default {
  title: "features/VoiceInput",
  component: VoiceInputPresentation,
  tags: ["autodocs"],
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { VoiceInputPresentation },
    template: "<voice-input-presentation />",
  }),
  argTypes: {},
};

export const Default = {
  args: {},
};
