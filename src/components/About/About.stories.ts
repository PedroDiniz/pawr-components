import type { Meta, StoryObj } from '@storybook/react';
import About from './About';
import aboutData from './aboutData';

const aboutMeta: Meta<typeof About> = {
	title: 'AboutComponent',
	component: About,
	tags: ['autodocs'],
};

export default aboutMeta;
type Story = StoryObj<typeof aboutMeta>;

export const Default: Story = {
	args: {
		...aboutData,
	},
};
