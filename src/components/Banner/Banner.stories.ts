import type { Meta, StoryObj } from '@storybook/react';
import Banner from './Banner';
import bannerData from './bannerData';

const bannerMeta: Meta<typeof Banner> = {
	title: 'BannerComponent',
	component: Banner,
	tags: ['autodocs'],
};

export default bannerMeta;
type Story = StoryObj<typeof bannerMeta>;

export const Default: Story = {
	args: {
		...bannerData,
	},
};
