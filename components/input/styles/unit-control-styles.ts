/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const UnitSelect = styled.select`
	appearance: none;
	background: transparent;
	border: none;
	border-radius: 0.125rem;
	color: ${({ theme }) => theme.colors.foreground};
	cursor: pointer;
	display: block;
	font-family: inherit;
	font-size: 0.875rem;
	font-weight: 500;
	height: 1.75rem;
	line-height: 1;
	outline: none;
	position: absolute;
	right: 0.5em;
	text-align-last: center;
	text-transform: uppercase;
	top: 0.375rem;
	text-align: -webkit-center;
	width: ${({ value }) => (value === 'px' ? '2rem' : '2.75rem')};

	&:hover,
	&:focus {
		background-color: ${({ theme }) => theme.colors.background100};
	}
`;
