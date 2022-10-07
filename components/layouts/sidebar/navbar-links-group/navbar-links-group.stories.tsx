import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LinksGroup, LinksGroupProps } from './navbar-links-group';
import { mockNavbarLinksGroupProps } from './navbar-links-group.mocks';

export default {
  title: 'sidebar/navbar-links-group',
  component: LinksGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LinksGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinksGroup> = (args) => <LinksGroup {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNavbarLinksGroupProps.base,
} as LinksGroupProps;
