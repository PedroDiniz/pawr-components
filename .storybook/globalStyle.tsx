import React from 'react';
import { StoryFn } from '@storybook/react';
import GlobalStyle from '../src/globalStyle/globalStyle'; // Import your GlobalStyle component

const withGlobalStyle = (Story: StoryFn) => {
	return (
		<GlobalStyle>
			<Story />
		</GlobalStyle>
	);
};

export default withGlobalStyle;
