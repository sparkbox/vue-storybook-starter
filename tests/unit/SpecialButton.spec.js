import { shallowMount } from '@vue/test-utils';
import SpecialButton from '../../stories/SpecialButton';

describe('SpecialButton', () => {
  const wrapper = shallowMount(SpecialButton);

  it('has the special button class', () => {
    expect(wrapper.find('.special-button').exists()).toBe(true)
  })
});