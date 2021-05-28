Vue Storybook Starter
=====================
A Vue Storybook Starter project that is setup with the a11y, Jest, Controls, Percy, and StoryShots addons.

## Project setup
1. Run `npm install` to download dependencies.
2. Run `npm run test` to run Jest and StoryShots.
    * We need to do this before running storybook in order to generate the `.jest-test-results.json` file, which is used by the Jest Storybook Addon.
3. Run `npm run storybook` to run Storybook locally. You should see a new browser tab open with Storybook running.
4. Run `npm run snapshot` to generate Percy snapshots. You will need a Percy account with a project and your `PERCY_TOKEN` for authentication.

## Storybook Addons
- [a11y](https://github.com/storybookjs/storybook/tree/next/addons/a11y)
- [Jest](https://github.com/storybookjs/storybook/tree/master/addons/jest)
- [Controls](https://github.com/storybookjs/storybook/tree/next/addons/controls)
- [Percy](https://github.com/percy/percy-storybook)
- [StoryShots](https://github.com/storybookjs/storybook/tree/next/addons/storyshots/storyshots-core)
