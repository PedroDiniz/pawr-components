export default interface TitleProps {
	/**
	 * Title
	 */
	text?: string;
	/**
	 * Component ready for use?
	 */
	ready?: boolean;
	/**
	 * Font color for the title
	 */
	color?: string;
	onClick?: () => void;
}
