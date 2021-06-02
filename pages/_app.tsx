/**
 * External dependencies
 */
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { useEffect, useState } from 'react';

/**
 * Internal dependencies
 */
import { lightTheme, darkTheme } from '@layout/theme';
import GlobalStyle from '@layout/global-style';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const [isDark, setDark] = useState(false);
	const theme = isDark ? darkTheme : lightTheme;

	useEffect(() => {
		setDark(
			window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches,
		);

		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (e) => {
				setDark(e.matches);
			});
	}, []);

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle theme={theme} />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
