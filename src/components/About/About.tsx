import React from 'react';
import AboutProps from './About.interface';
import classes from './_about.module.scss';

const About = ({ url, alt, mainTitle, description }: AboutProps) => (
	<div className={classes.about}>
		<div className={classes.about__content}>
			<div className={classes.about__content__imageContainer}>
				<img src={url} alt={alt} className={classes.about__content__imageContainer__image} />
			</div>
			<div className={classes.about__content__text}>
				<h2>{mainTitle}</h2>
				<p>{description}</p>
			</div>
		</div>
	</div>
);

export default About;
