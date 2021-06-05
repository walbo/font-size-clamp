/**
 * External dependencies
 */
import Head from 'next/head';
import { useState, useMemo } from 'react';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import Input from '@components/input';
import Flex, { FlexBlock } from '@components/flex';
import Text from '@components/text';
import Code from '@components/code';
import clampBuilder from '@utils/clamp-builder';

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

export default function Home(): JSX.Element {
	const [config, setConfig] = useState({
		root: '16',
		minWidth: '500',
		maxWidth: '900',
		minFontSize: '1',
		maxFontSize: '3',
	});

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
										suffix="PX"
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
										suffix="PX"
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
										suffix="REM"
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
										suffix="REM"
									/>
								</FlexBlock>
							</SettingsRow>
						</Settings>

						<Code>{clamp ? `font-size: ${clamp};` : ' '}</Code>
					</main>
				</FlexBlock>
			</App>
		</>
	);
}
