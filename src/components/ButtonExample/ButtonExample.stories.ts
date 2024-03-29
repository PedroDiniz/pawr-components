import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import buttonExample from './ButtonExample';
import { primary, secondary, large, small } from './buttonExampleData';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const buttonExampleMeta: Meta<typeof buttonExample> = {
	title: 'Example/Button',
	component: buttonExample,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
};

export default buttonExampleMeta;
type Story = StoryObj<typeof buttonExampleMeta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: primary,
};

export const Secondary: Story = {
	args: secondary,
};

export const Large: Story = {
	args: large,
};

export const Small: Story = {
	args: small,
};
