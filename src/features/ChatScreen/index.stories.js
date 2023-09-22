import ChatScreenPresentation from './presentation/index.vue'

export default {
  title: 'features/ChatScreen',
  component: ChatScreenPresentation,
  tags: ['autodocs'],
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ChatScreenPresentation },
    template: '<chat-screenPresentation />',
  }),
  argTypes: {},
};

export const Default = {
  args: {},
};