import { ComponentMeta, ComponentStory } from '@storybook/react';
import UserButton, { UserButtonProps } from './user-button';
import { mockUserButtonProps } from './user-button.mocks';

export default {
  title: 'buttons/user',
  component: UserButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UserButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserButton> = (args) => <UserButton {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockUserButtonProps.base,
} as UserButtonProps;
