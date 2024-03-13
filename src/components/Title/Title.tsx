import React from 'react';
import TitleProps from './interface';
import classes from './_title.module.scss';

const Title = ({ text, ready, color }: TitleProps) => (
	<h1 style={{ color }} className={classes.title} data-ready={ready?.toString()}>
		{text}
	</h1>
);

export default Title;
