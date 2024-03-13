import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';
import titleData from './titleData';

const titleMeta: Meta<typeof Title> = {
	title: 'TitleComponent',
	component: Title,
	parameters: {
		ready: true,
		text: 'loren',
	},
	argTypes: {
		color: { control: 'color' },
	},
	tags: ['autodocs'],
};

export default titleMeta;
type Story = StoryObj<typeof titleMeta>;

export const Default: Story = {
	args: titleData,
};
