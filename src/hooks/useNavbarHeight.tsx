import { useState, useEffect } from 'react';

const useNavbarHeight = () => {
	const [navbarHeight, setNavbarHeight] = useState(0);

	useEffect(() => {
		const updateNavbarHeight = () => {
			const navbarElement = document.getElementById('nav');
			if (navbarElement) {
				setNavbarHeight(navbarElement.offsetHeight);
			}
		};
		updateNavbarHeight();
		window.addEventListener('resize', updateNavbarHeight);
		return () => {
			window.removeEventListener('resize', updateNavbarHeight);
		};
	}, []);
	return navbarHeight;
};

export default useNavbarHeight;
