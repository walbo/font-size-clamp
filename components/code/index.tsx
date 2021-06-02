/**
 * External dependencies
 */
import styled from '@emotion/styled';

export default styled.pre`
	background: ${({ theme }) => theme.colors.background100};
	font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
		'Courier New', monospace;
	font-size: clamp(0.75rem, 0.4375rem + 1vw, 1rem);
	max-width: 728px;
	margin: 0 auto;
	padding: 1rem;
	border-radius: 4px;
	text-align: center;
	overflow: auto;
`;
