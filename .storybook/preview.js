import { addDecorator } from '@storybook/vue'; // <- or your view layer
import { withTests } from '@storybook/addon-jest';

import results from '../.jest-test-results.json';

addDecorator(
  withTests({
    results,
  })
);

export const parameters = {
  controls: { expanded: true }
}