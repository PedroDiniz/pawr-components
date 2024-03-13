import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToAnchor = () => {
	const location = useLocation();
	const lastHash = useRef('');

	useEffect(() => {
		const navbarElement = document.getElementById('nav');

		if (location.hash.length > 0) {
			lastHash.current = location.hash.slice(1);
		}

		if (lastHash.current.length > 0 && document.getElementById(lastHash.current) != null) {
			setTimeout(() => {
				const element = document.getElementById(lastHash.current);
				if (element && navbarElement) {
					const windowHeight = window.innerHeight;
					const elementPosition = element.getBoundingClientRect().top + window.scrollY;
					const offset = elementPosition - windowHeight / 2 + element.offsetHeight / 2 - navbarElement.offsetHeight;

					window.scrollTo({
						top: offset,
						behavior: 'smooth',
					});
				}
			}, 100);
		}
	}, [location]);

	return null;
};

export default useScrollToAnchor;
