/**
 * External dependencies
 */
import '@emotion/react';
import { Theme } from '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		borderRadius: {
			small: string;
		};
		colors: {
			background: string;
			background100: string;
			foreground: string;
			border: string;
			primary: string;
		};
	}
}

const baseTheme = {
	borderRadius: {
		small: '0.25rem',
	},
};

export const lightTheme: Theme = {
	...baseTheme,
	colors: {
		background: '#fff',
		background100: '#f2f4f7',
		foreground: '#333',
		border: '#d8d8da',
		primary: '#06f',
	},
};

export const darkTheme: Theme = {
	...baseTheme,
	colors: {
		background: '#161b22',
		background100: '#222830',
		foreground: '#fff',
		border: '#595d65',
		primary: '#1e6eea',
	},
};
