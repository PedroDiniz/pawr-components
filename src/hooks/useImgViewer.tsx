import { useState } from 'react';

const useImageViewer = () => {
	const [showFullScreen, setShowFullScreen] = useState(false);
	const [viewerData, setViewerData] = useState({ images: [''], currentIndex: 0 });

	const handleImageClick = (images: string[], currentIndex: number) => {
		setViewerData({ images, currentIndex });
		setShowFullScreen(true);
	};

	const handleCloseFullScreen = () => {
		setViewerData({ images: [], currentIndex: 0 });
		setShowFullScreen(false);
	};

	return {
		showFullScreen,
		viewerData,
		handleImageClick,
		handleCloseFullScreen,
	};
};

export default useImageViewer;
