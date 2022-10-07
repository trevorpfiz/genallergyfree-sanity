import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavbarNested, { NavbarNestedProps } from './navbar-nested';
import { mockNavbarNestedProps } from './navbar-nested.mocks';

export default {
  title: 'sidebar/navbar-nested',
  component: NavbarNested,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NavbarNested>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavbarNested> = (args) => <NavbarNested {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNavbarNestedProps.base,
} as NavbarNestedProps;
