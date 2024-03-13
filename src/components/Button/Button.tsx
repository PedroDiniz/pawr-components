import React from 'react';
import ButtonProps from './interface';
import classes from './_button.module.scss';

const Button = ({ customStyle = 'primary', size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
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

export default Button;
