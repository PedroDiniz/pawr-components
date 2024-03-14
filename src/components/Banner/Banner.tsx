import React, { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import classes from './_banner.module.scss';
import { img1 } from '../../../assets/img/mediaData';
import { img2 } from '../../../assets/img/mediaData';
import { img3 } from '../../../assets/img/mediaData';
import { video } from '../../../assets/img/mediaData';
import BannerProps from './interface';

const DEFAULT_ANIMATION_TIME = 4000;

const Banner = ({ mediaContent = [] }: BannerProps) => {
	const media = mediaContent.length ? mediaContent : [img1, img2, img3, video];
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [timeStarted, setTimeStarted] = useState<number>(0);
	const [duration, setDuration] = useState<number>(DEFAULT_ANIMATION_TIME);
	const [paused, setPaused] = useState<boolean>(false);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const isVideoElement = (assetUrl: string) => {
		if (assetUrl) {
			const extension = assetUrl?.split('.')?.pop()?.toLowerCase();
			if (extension) return ['mp4', 'webm', 'ogg'].includes(extension);
		}
	};

	const prev = () => {
		const newIndex = currentIndex - 1 < 0 ? media.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const next = () => {
		const newIndex = currentIndex + 1 >= media.length ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const clear = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = null;
	};

	const auto = (ms: number) => {
		clear();
		const currentTime = Date.now();
		setTimeStarted(currentTime);
		timeoutRef.current = setTimeout(() => next(), ms);
		setPaused(false);
	};
	const pause = () => {
		setPaused(true);
		const currentTime = Date.now();
		const passed = currentTime - timeStarted;
		setDuration((p) => p - passed);
		clear();
	};
	const resume = () => {
		if (paused) {
			clear();
			auto(duration);
		}
	};

	useEffect(() => {
		auto(DEFAULT_ANIMATION_TIME);
		setDuration(DEFAULT_ANIMATION_TIME);
	}, [currentIndex]);

	const handleMedia = () => {
		const filteredMedia = media?.[currentIndex];
		if (!filteredMedia) {
			return null;
		}
		return (
			<div className={classes.slide__elements} key={nanoid()}>
				{isVideoElement(filteredMedia) ? (
					<video src={filteredMedia} playsInline muted autoPlay loop />
				) : (
					<img src={filteredMedia} alt={`Slide ${currentIndex}`} />
				)}
			</div>
		);
	};

	const handleThumb = () => {
		const animationTimeNow = (duration / DEFAULT_ANIMATION_TIME) * 100;
		return (
			<div className={classes.bar}>
				{media?.map((_, index) => (
					<span key={nanoid()} className={classes.bar__container}>
						<span
							data-paused={index === currentIndex ? paused.toString() : null}
							data-active={index === currentIndex ? 'true' : null}
							style={{
								animationDuration: `${duration}ms`,
								transform: `translateX(${index === currentIndex ? -animationTimeNow : 0}%)`,
							}}
							className={classes.bar__container__item}
						/>
					</span>
				))}
			</div>
		);
	};

	return (
		<div className={`${paused ? classes.paused : ''}`}>
			<div className={classes.slide} onMouseEnter={pause} onMouseLeave={resume}>
				{handleMedia()}
				<div className={classes.slide__controls}>
					<button onClick={prev}>prev</button>
					<button onClick={next}>next</button>
					{handleThumb()}
				</div>
			</div>
		</div>
	);
};

export default Banner;
