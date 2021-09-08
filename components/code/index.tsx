/**
 * External dependencies
 */
import { useRef } from 'react';
import styled from '@emotion/styled';

const Pre = styled.pre`
	background: ${({ theme }) => theme.colors.background100};
	font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
		'Courier New', monospace;
	font-size: clamp(0.75rem, 0.125rem + 2vw, 1rem);
	max-width: 728px;
	margin: 0 auto;
	padding: 1rem;
	border-radius: 4px;
	text-align: center;
	overflow: auto;
`;

function Code({
	children,
}: React.ComponentPropsWithoutRef<'span'>): JSX.Element {
	const ref = useRef(null);

	function handleOnClick() {
		const selection = window.getSelection();

		if (selection && ref.current) {
			selection.selectAllChildren(ref.current);
		}
	}

	return (
		<Pre onClick={handleOnClick}>
			<span ref={ref}>{children}</span>
		</Pre>
	);
}

export default Code;
