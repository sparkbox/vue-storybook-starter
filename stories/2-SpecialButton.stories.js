import SpecialButton from './SpecialButton.vue';

export default {
  title: 'Special Button',
  component: SpecialButton,
  argTypes: {
    isDisabled: { 
      control: {
        type: 'boolean'
      },
      description: 'Disables the button'
    },
  }
};

const Template = (args, { argTypes }) => ({
  components: { SpecialButton },
  props: Object.keys(argTypes),
  template: '<special-button :isDisabled="isDisabled">{{ label }}</special-button>',
});

export const Special = Template.bind({});

Special.args = {
  label: 'Special Button',
  isDisabled: false
};