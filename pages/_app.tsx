/**
 * External dependencies
 */
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import Script from 'next/script';

/**
 * Internal dependencies
 */
import { lightTheme as theme } from '@layout/theme';
import GlobalStyle from '@layout/global-style';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Script
				id="gtag"
				strategy="lazyOnload"
				src="https://www.googletagmanager.com/gtag/js?id=G-HFGCYQVS7W"
			/>
			<Script id="gtag-setup" strategy="lazyOnload">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag() {
						dataLayer.push(arguments);
					}
					gtag('js', new Date());
					gtag('config', 'G-HFGCYQVS7W');
				`}
			</Script>
			<ThemeProvider theme={theme}>
				<GlobalStyle theme={theme} />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
