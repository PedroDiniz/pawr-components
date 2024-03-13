import React, { ButtonHTMLAttributes } from 'react';
import classes from './_button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Is this the principal call to action on the page?
	 */
	customStyle?: 'primary' | 'secondary';
	/**
	 * What background color to use
	 */
	backgroundColor?: string;
	/**
	 * How large should the button be?
	 */
	size?: 'small' | 'medium' | 'large';
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ customStyle = 'primary', size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
	return (
		<button
			data-customStyle={customStyle}
			data-size={size}
			type="button"
			className={classes.storybookButton}
			style={{ backgroundColor }}
			{...props}
		>
			{label}
		</button>
	);
};
