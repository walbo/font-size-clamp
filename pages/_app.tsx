/**
 * External dependencies
 */
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';

/**
 * Internal dependencies
 */
import { baseTheme as theme } from '@layout/theme';
import GlobalStyle from '@layout/global-style';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
