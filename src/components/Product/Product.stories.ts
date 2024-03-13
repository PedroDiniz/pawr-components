import type { Meta, StoryObj } from '@storybook/react';
import Product from './Product';
import productData from './productData';

const productMeta: Meta<typeof Product> = {
	title: 'ProductComponent',
	component: Product,

	tags: ['autodocs'],
};

export default productMeta;
type Story = StoryObj<typeof productMeta>;

export const Default: Story = {
	args: productData,
};
