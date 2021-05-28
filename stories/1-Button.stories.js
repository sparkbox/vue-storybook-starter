import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import MyButton from './MyButton';

export default {
  title: 'Button',
  component: MyButton,
  decorators: [withA11y]
};

export const Text = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action('clicked') },
});

export const Emoji = () => ({
  components: { MyButton },
  template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
  methods: { action: action('clicked') },
});
