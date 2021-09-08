/**
 * External dependencies
 */
import Head from 'next/head';
import { useState, useMemo, useEffect } from 'react';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import Input from '@components/input';
import Flex, { FlexBlock } from '@components/flex';
import Text from '@components/text';
import Code from '@components/code';
import clampBuilder from '@utils/clamp-builder';
import { hasSameKeys } from '@utils/objects';

const App = styled.div`
	align-items: center;
	display: flex;
	min-height: 100vh;
	padding: 2rem 2rem 4rem;
	text-align: center;
	width: 100%;
`;

const SettingsRow = styled(Flex)`
	margin-bottom: 1.25rem;
`;

const Settings = styled.div`
	max-width: 728px;
	margin: clamp(3rem, 0.5rem + 8vw, 4rem) auto;
`;

const localStorageKey = 'clampFontSizeConfig';
const initalConfig = {
	root: '16',
	minWidth: '500px',
	maxWidth: '900px',
	minFontSize: '16px',
	maxFontSize: '48px',
};

export default function Home(): JSX.Element {
	const [config, setConfig] = useState(initalConfig);

	useEffect(() => {
		const savedConfig = localStorage.getItem(localStorageKey);

		if (savedConfig !== null) {
			try {
				const parsedConfig = JSON.parse(savedConfig);

				if (hasSameKeys(parsedConfig, initalConfig)) {
					setConfig(JSON.parse(savedConfig));
				}
			} catch {
				// Skip if json parse failed.
			}
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(localStorageKey, JSON.stringify(config));
	}, [config]);

	function handleChange(prop: string, value: string) {
		setConfig((conf) => ({
			...conf,
			[prop]: value,
		}));
	}

	const clamp = useMemo(() => clampBuilder(config), [config]);

	return (
		<>
			<Head>
				<title>Font-size clamp() generator</title>
				<meta
					name="description"
					content="Generate linearly scale font-size with clamp()"
				/>
			</Head>

			<App>
				<FlexBlock>
					<header>
						<Text variant="title" as="h1">
							Font-size Clamp Generator
						</Text>
						<Text mt={0.5}>
							Generate linearly scale font-size with clamp()
						</Text>
					</header>
					<main>
						<Settings>
							<SettingsRow gap={6}>
								<FlexBlock>
									<Input
										id="min-width"
										label="Minimum viewport width"
										value={config.minWidth}
										type="number"
										onChange={(value) =>
											handleChange('minWidth', value)
										}
									/>
								</FlexBlock>
								<FlexBlock>
									<Input
										id="max-width"
										label="Maximum viewport width"
										value={config.maxWidth}
										type="number"
										onChange={(value) =>
											handleChange('maxWidth', value)
										}
									/>
								</FlexBlock>
							</SettingsRow>
							<SettingsRow gap={6}>
								<FlexBlock>
									<Input
										id="min-font-size"
										label="Minimum font size"
										type="number"
										value={config.minFontSize}
										onChange={(value) =>
											handleChange('minFontSize', value)
										}
									/>
								</FlexBlock>
								<FlexBlock>
									<Input
										id="max-font-size"
										label="Maximum font size"
										value={config.maxFontSize}
										type="number"
										onChange={(value) =>
											handleChange('maxFontSize', value)
										}
									/>
								</FlexBlock>
							</SettingsRow>
						</Settings>

						<Code code={clamp ? `font-size: ${clamp};` : ' '} />
					</main>
				</FlexBlock>
			</App>
		</>
	);
}
