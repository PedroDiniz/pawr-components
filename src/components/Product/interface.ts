interface ProductCardProps {
	/**
	 * The cart title for the ProductCard component.
	 */
	title: string;
	/**
	 * The cart icon url for the ProductCard component.
	 */
	icon: string;
	/**
	 * The ready state for the ProductCard component.
	 */
	ready: 'true' | 'false';
}
interface ProductProps {
	/**
	 * The main title for the Product component.
	 */
	mainTitle: string;
	/**
	 * The card data for the Product component.
	 */
	cards: ProductCardProps[];
}

export default ProductProps;
