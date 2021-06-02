/**
 * External dependencies
 */
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { useEffect, useState } from 'react';

/**
 * Internal dependencies
 */
import { lightTheme as theme } from '@layout/theme';
import GlobalStyle from '@layout/global-style';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle theme={theme} />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
