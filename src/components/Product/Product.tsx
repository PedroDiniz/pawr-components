import { nanoid } from 'nanoid';
import React from 'react';
import useImageViewer from '../../hooks/useImgViewer';
import ImgViewer from '../ImgViewer/ImgViewer';
import Title from '../Title/Title';
import ProductProps from './interface';
import classes from './_product.module.scss';

const Product = ({ mainTitle, cards }: ProductProps) => {
	const { showFullScreen, viewerData, handleImageClick, handleCloseFullScreen } = useImageViewer();

	return (
		<div className={classes.product}>
			<Title text={mainTitle} />
			<div className={classes.product__container}>
				{cards.map((card, index) => (
					<div key={nanoid()} className={classes.product__container__imgContainer}>
						<img
							onClick={() =>
								handleImageClick(
									cards.map((c) => c.icon),
									index
								)
							}
							src={card?.icon}
							alt={card?.title}
						/>
						<label>{card?.title}</label>
					</div>
				))}
			</div>
			<ImgViewer
				images={cards.map((c) => c.icon)}
				currentIndex={viewerData.currentIndex}
				title={cards[viewerData.currentIndex]?.title}
				status={showFullScreen}
				onClose={handleCloseFullScreen}
			/>
		</div>
	);
};

export default Product;
