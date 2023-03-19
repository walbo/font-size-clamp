import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const Ad = styled.div`
	display: none;

	@media (min-width: 792px) {
		display: block;
		max-width: 728px;
		margin: 4rem auto 0;
		height: 90px;
	}
`;

export default function Banner(): JSX.Element {
	const banner = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const atOptions = {
			key: '69752f4c32a9f62f5945289b7052d54e',
			format: 'iframe',
			height: 90,
			width: 728,
			params: {},
		};

		if (!banner?.current?.firstChild) {
			const conf = document.createElement('script');
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = `https://slippersphoto.com/${atOptions.key}/invoke.js`;
			conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

			if (banner.current) {
				banner.current.append(conf);
				banner.current.append(script);
			}
		}
	}, []);

	return <Ad ref={banner} />;
}
