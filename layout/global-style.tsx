/**
 * External dependencies
 */
import { Global, css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export default function GlobalStyle({ theme }: { theme: Theme }): JSX.Element {
	return (
		<Global
			styles={css`
				:root {
					--background: #fff;
					--background100: #f2f4f7;
					--foreground: #333;
					--foreground100: #c8cacc;
					--border: #d8d8da;
					--primary: #06f;

					@media (prefers-color-scheme: dark) {
						--background: #161b22;
						--background100: #222830;
						--foreground: #fff;
						--foreground100: #595d65;
						--border: #595d65;
						--primary: #1e6eea;
					}
				}

				*,
				*::after,
				*::before {
					box-sizing: border-box;
				}

				body {
					background-color: var(--background);
					color: var(--foreground);
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
