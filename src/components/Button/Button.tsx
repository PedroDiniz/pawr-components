import React from 'react';
import classes from './_button.module.scss';
import ButtonProps from './Button.interface';

export const Button = ({ customStyle = 'primary', size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
	return (
		<button
			data-customstyle={customStyle}
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
