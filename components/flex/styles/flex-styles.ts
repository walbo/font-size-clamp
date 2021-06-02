/**
 * External dependencies
 */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type FlexProps = {
	as?: React.ElementType;
	gap?: number;
	isReversed?: boolean;
	align: 'center' | 'top' | 'bottom';
	justify: 'left' | 'right' | 'space-between' | 'center';
};

const alignStyle = ({ align }: FlexProps) => {
	const aligns = {
		top: 'flex-start',
		bottom: 'flex-end',
		center: 'center',
	};

	return css({
		alignItems: aligns[align],
	});
};

const justifyStyle = ({ justify, isReversed }: FlexProps) => {
	const justifies = {
		left: 'flex-start',
		right: 'flex-end',
		'space-between': 'space-between',
		center: 'center',
	};
	let value = justifies[justify];

	if (isReversed && justifies[justify]) {
		value = justify === 'left' ? justifies.right : justifies.left;
	}

	return css({
		justifyContent: value,
	});
};

const gapStyle = ({ gap, isReversed }: FlexProps) => {
	const base = 4;
	const value = typeof gap === 'number' ? base * gap : base;
	const dir = isReversed ? 'left' : 'right';

	const margin = `margin-${dir}`;

	return css`
		> * {
			${margin}: ${value}px;
			&:last-child {
				${margin}: 0;
			}
		}
	`;
};

const reversedStyles = ({ isReversed }: FlexProps) => {
	if (!isReversed) {
		return '';
	}

	return css`
		flex-direction: row-reverse;
	`;
};

export const Flex = styled.div<FlexProps>(
	{
		display: 'flex',
		width: '100%',
	},
	alignStyle,
	justifyStyle,
	gapStyle,
	reversedStyles,
);

export const Item = styled.div`
	box-sizing: border-box;
	min-width: 0;
	max-width: 100%;
`;

export const Block = styled(Item)`
	flex: 1;
`;
