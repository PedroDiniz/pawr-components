import { StoryFn } from '@storybook/react';
import withGlobalStyle from './globalStyle'; // Import your decorator

const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [(story: StoryFn) => withGlobalStyle(story)], // Apply withGlobalStyle first
};

export default preview;
