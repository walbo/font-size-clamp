/**
 * External dependencies
 */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ChevronDownBackgroundImage = (color: string) => css`
	background-image: url(data:image/svg+xml;utf8,
		${encodeURIComponent(
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 18c-.2 0-.5 0-.7-.1-.2-.1-.4-.2-.7-.4L2.5 9.2c-.4-.3-.5-.8-.5-1.3s.2-1 .5-1.3c.4-.4.9-.6 1.4-.6.5 0 .9.2 1.3.6l6.8 6.8 6.8-6.8c.4-.4.8-.6 1.3-.6s.9.2 1.3.6c.4.4.6.8.6 1.4 0 .5-.2 1-.5 1.3l-8.1 8.1c-.2.2-.4.4-.7.4-.2.1-.5.2-.7.2z" style="fill:${color}"/></svg>`,
	)});
`;

export const UnitSelect = styled.select`
	appearance: none;
	${ChevronDownBackgroundImage('#333')}
	background-color: transparent;
	background-size: 0.6rem;
	background-position: right 0.35rem center;
	background-repeat: no-repeat;
	border: none;
	border-radius: 0.125rem;
	color: var(--foreground);
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
	width: ${({ value }) => (value === 'px' ? '3rem' : '3.75rem')};
	padding-right: 1rem;

	&:hover,
	&:focus {
		background-color: var(--background100);
	}

	@media (prefers-color-scheme: dark) {
		${ChevronDownBackgroundImage('#fff')}
	}
`;
