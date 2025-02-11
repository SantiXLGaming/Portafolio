import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

const modules = import.meta.glob('../components/**/*.vue', { eager: true });

describe('Component Tests', () => {
  for (const path in modules) {
    const Component = modules[path].default;
    if (!Component) continue;

    it(`renders component ${path}`, () => {
      const wrapper = mount(Component);
      expect(wrapper.exists()).toBe(true);
    });
  }
});
