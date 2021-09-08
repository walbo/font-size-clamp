/**
 * External dependencies
 */
import { useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import copy from 'copy-text-to-clipboard';

const Wrapper = styled.div`
	background: var(--background100);
	max-width: 728px;
	margin: 0 auto;
	border-radius: 4px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Pre = styled.pre`
	font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
		'Courier New', monospace;
	font-size: clamp(0.75rem, 0.125rem + 2vw, 1rem);
	padding: 1rem;
	text-align: left;
	margin: 0;
	overflow: auto;
`;

const SVG = styled.svg`
	height: 20px;
	width: 20px;
	fill: currentColor;
`;

const Button = styled.button`
	align-items: center;
	background: transparent;
	border-radius: 4px;
	border: 0;
	cursor: pointer;
	display: inline-flex;
	height: 32px;
	justify-content: center;
	margin: 0 9px;
	padding: 0;
	width: 32px;
	color: inherit;
	position: relative;
`;

const Tooltip = styled.span`
	position: absolute;
	background-color: #333;
	color: #fff;
	padding: 0.5em;
	bottom: calc(100% + 4px);
	border-radius: 4px;

	&::after {
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		border-top: 6px solid #333;
		content: '';
		height: 0;
		left: 50%;
		position: absolute;
		top: 100%;
		transform: translate(-50%, 0);
		width: 0;
	}
`;

function Code({ code }: { code: string }): JSX.Element {
	const ref = useRef(null);
	const [showCopySuccess, setCopySuccess] = useState(false);

	useEffect(() => {
		let timer1: ReturnType<typeof setTimeout>;

		if (showCopySuccess) {
			timer1 = setTimeout(() => setCopySuccess(false), 2000);
		}

		return () => {
			clearTimeout(timer1);
		};
	}, [showCopySuccess]);

	function handleOnClick() {
		const selection = window.getSelection();

		if (selection && ref.current) {
			selection.selectAllChildren(ref.current);
		}
	}

	function handleCopy() {
		copy(code);
		setCopySuccess(true);
	}

	return (
		<Wrapper>
			<Pre onClick={handleOnClick} ref={ref}>
				{code}
			</Pre>
			<Button type="button" onClick={handleCopy} aria-label="Copy">
				{showCopySuccess && <Tooltip>Copied!</Tooltip>}
				<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					{showCopySuccess && (
						<path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z" />
					)}
					{!showCopySuccess && (
						<path d="M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 18H6c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h1v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V4h1c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1z" />
					)}
				</SVG>
			</Button>
		</Wrapper>
	);
}

export default Code;
