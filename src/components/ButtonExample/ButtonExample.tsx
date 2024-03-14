import React from 'react';
import ButtonExampleProps from './interface';
import classes from './_buttonExample.module.scss';

const ButtonExample = ({
	customStyle = 'primary',
	size = 'medium',
	backgroundColor,
	label,
	...props
}: ButtonExampleProps) => {
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

export default ButtonExample;
