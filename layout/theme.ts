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
	}
}

export const baseTheme: Theme = {
	borderRadius: {
		small: '0.25rem',
	},
};
