/**
 * External dependencies
 */
import { Global, css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export default function GlobalStyle({ theme }: { theme: Theme }): JSX.Element {
	return (
		<Global
			styles={css`
				*,
				*::after,
				*::before {
					box-sizing: border-box;
				}

				body {
					background-color: ${theme.colors.background};
					color: ${theme.colors.foreground};
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
						Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue',
						sans-serif;
				}

				input::-webkit-outer-spin-button,
				input::-webkit-inner-spin-button {
					-webkit-appearance: none;
					margin: 0;
				}

				input[type='number'] {
					-moz-appearance: textfield;
				}

				svg {
					fill: currentColor;
				}
			`}
		/>
	);
}
