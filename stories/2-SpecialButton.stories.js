import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import SpecialButton from './SpecialButton.vue';

export default {
  title: 'Special Button',
  component: SpecialButton,
  decorators: [withA11y, withKnobs],
  parameters: {
    jest: ['SpecialButton.spec.js'],
  }
};

export const Text = () => ({
  components: { SpecialButton },
  props: {
    isDisabled: {
      default: boolean('Disabled', false)
    },
    text: {
      default: text('Text', 'A special button')
    }
  },
  template: '<special-button :isDisabled="isDisabled">{{ text }}</special-button>',
});