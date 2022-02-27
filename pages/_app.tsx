/**
 * External dependencies
 */
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import Script from 'next/script';

/**
 * Internal dependencies
 */
import { baseTheme as theme } from '@layout/theme';
import GlobalStyle from '@layout/global-style';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			{process.env.NEXT_PUBLIC_ANALYTICS_ID && (
				<>
					<Script
						id="gtag"
						strategy="lazyOnload"
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
					/>
					<Script id="gtag-setup" strategy="lazyOnload">
						{`
							window.dataLayer = window.dataLayer || [];
							function gtag() {
								dataLayer.push(arguments);
							}
							gtag('js', new Date());
							gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
						`}
					</Script>
				</>
			)}
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
