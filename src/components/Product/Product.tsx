import React from 'react';
import { nanoid } from 'nanoid';
import classes from './_product.module.scss';
import Title from '../Title/Title';
import ProductProps from './Product.interface';
import ImgViewer from '../ImgViewer/ImgViewer';
import useImageViewer from '../../hooks/useImgViewer';

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
				data-status={showFullScreen}
				onClose={handleCloseFullScreen}
			/>
		</div>
	);
};

export default Product;
