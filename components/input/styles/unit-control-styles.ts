/**
 * External dependencies
 */
import styled from '@emotion/styled';

export const UnitSelect = styled.select`
	appearance: none;
	background: transparent;
	border-bottom-left-radius: 0;
	border-radius: 0.125rem;
	border: none;
	color: #333;
	cursor: pointer;
	display: block;
	font-family: inherit;
	font-size: 14px;
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
		background-color: #f2f4f7;
	}
`;
