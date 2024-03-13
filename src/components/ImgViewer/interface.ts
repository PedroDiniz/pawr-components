interface ImgViewerProps {
	/**
	 * Image array
	 */
	images: string[];
	/**
	 * currentIndex
	 */
	currentIndex: number;
	/**
	 * title
	 */
	title?: string;
	/**
	 * Status
	 */
	status?: boolean;
	/**
	 * Click handler
	 */
	onClose: () => void;
}

export default ImgViewerProps;
