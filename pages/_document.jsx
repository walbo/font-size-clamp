/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
 * External dependencies
 */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GoogleTagManager, Partytown } from '@builder.io/partytown/react';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="application-name" content="Font-size Clamp" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta
						name="apple-mobile-web-app-title"
						content="Font-size Clamp"
					/>
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta
						name="msapplication-config"
						content="/browserconfig.xml"
					/>
					<meta name="msapplication-TileColor" content="#0066ff" />
					<meta name="msapplication-tap-highlight" content="no" />
					<link
						rel="apple-touch-icon"
						sizes="57x57"
						href="/icons/apple-icon-57x57.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="60x60"
						href="/icons/apple-icon-60x60.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="72x72"
						href="/icons/apple-icon-72x72.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="76x76"
						href="/icons/apple-icon-76x76.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="114x114"
						href="/icons/apple-icon-114x114.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="120x120"
						href="/icons/apple-icon-120x120.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="144x144"
						href="/icons/apple-icon-144x144.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="152x152"
						href="/icons/apple-icon-152x152.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/icons/apple-icon-180x180.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="192x192"
						href="/icons/android-icon-192x192.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/icons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="96x96"
						href="/icons/favicon-96x96.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/icons/favicon-16x16.png"
					/>
					<link rel="manifest" href="/manifest.json" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta
						name="msapplication-TileImage"
						content="/ms-icon-144x144.png"
					/>
					<meta
						name="theme-color"
						media="(prefers-color-scheme: light)"
						content="#ffffff"
					/>
					<meta
						name="theme-color"
						media="(prefers-color-scheme: dark)"
						content="#161b22"
					/>
					<GoogleTagManager containerId="G-HFGCYQVS7W" />
					<Partytown />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
