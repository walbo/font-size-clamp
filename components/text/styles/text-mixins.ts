/**
 * External dependencies
 */
import { css, SerializedStyles } from '@emotion/react';

/**
 * Internal dependencies
 */
import type { TextProps } from '..';

const label = `
	font-size: clamp(0.725rem, 0.125rem + 1.92vw, 0.965rem);
	font-weight: 500;
	line-height: 1;
`;

const variant = (variantName = 'body') => {
	switch (variantName) {
		case 'label':
			return label;

		case 'title':
			return `
				font-size: clamp(1.25rem, 0.625rem + 2vw, 1.5rem);
				font-weight: 700;
				line-height: 1.2;
			`;

		case 'body':
			return `
				font-size: clamp(0.825rem, 0.3875rem + 1.4vw, 1rem);
				line-height: 1.6;
			`;
	}
};

const margin = (selector: string, value?: number) => {
	if (value) {
		return `margin-${selector}: ${value}rem;`;
	}
};

export const text = (props: TextProps): SerializedStyles =>
	css(
		variant(props.variant),
		margin('bottom', props.mb),
		margin('top', props.mt),
	);
