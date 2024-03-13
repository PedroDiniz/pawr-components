// ImgViewer.js
import React, { useEffect, useState } from 'react';
import classes from './_imgViewer.module.scss';
import ImgViewerProps from './ImgViewer.interface';

const ImgViewer = ({ images, currentIndex, title, status, onClose }: ImgViewerProps) => {
	const [internalIndex, setInternalIndex] = useState(0);

	const handleImageClick = (event: React.MouseEvent | React.KeyboardEvent) => {
		event.stopPropagation();
	};

	const handlePrevClick = (event: React.MouseEvent | KeyboardEvent) => {
		if (event) {
			event.stopPropagation();
		}
		setInternalIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	const handleNextClick = (event: React.MouseEvent | KeyboardEvent) => {
		if (event) {
			event.stopPropagation();
		}
		setInternalIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	useEffect(() => {
		setInternalIndex(currentIndex);
	}, [currentIndex]);

	useEffect(() => {
		const handleKeyup = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose();
			} else if (event.key === 'ArrowRight') {
				handleNextClick(event);
			} else if (event.key === 'ArrowLeft') {
				handlePrevClick(event);
			}
		};

		if (status) {
			window.addEventListener('keyup', handleKeyup);
		}

		return () => {
			window.removeEventListener('keyup', handleKeyup);
		};
	}, [status, onClose]);

	return (
		<div style={{ visibility: status ? 'visible' : 'hidden' }} className={classes.viewer} onClick={onClose}>
			{status && (
				<div className={classes.viewer__close}>
					<p onClick={onClose}>X</p>
				</div>
			)}
			<div className={classes.viewer__content}>
				<button className={classes.viewer__content__navButtonPrev} onClick={handlePrevClick}>
					&lt;
				</button>
				{images && images.length && <img src={images[internalIndex]} alt={title} onClick={handleImageClick} />}
				<button className={classes.viewer__content__navButtonNext} onClick={handleNextClick}>
					&gt;
				</button>
			</div>
		</div>
	);
};

export default ImgViewer;
