import React from 'react';
import classes from './_title.module.scss';
import TitleProps from './Title.interface';

const Title = ({ text, ready, color }: TitleProps) => (
	<h1 style={{ color }} className={classes.title} data-ready={ready?.toString()}>
		{text}
	</h1>
);

export default Title;
