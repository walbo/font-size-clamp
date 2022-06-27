/**
 * External dependencies
 */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { FunctionComponent, ReactNode } from 'react';

/**
 * Internal dependencies
 */
import Flex, { FlexItem } from '../../flex';
import Text from '../../text';
import type { FlexProps } from '../../flex';

export type RootProps = FlexProps & {
	isFocused?: boolean;
};

const rootFocusedStyles = ({ isFocused }: RootProps) => {
	if (!isFocused) {
		return '';
	}

	return css({ zIndex: 1 });
};

export const Root = styled(Flex)<RootProps>(
	({ theme }) => ({
		position: 'relative',
		borderRadius: theme.borderRadius.small,
		alignItems: 'flex-start',
		flexDirection: 'column',
		paddingTop: 0,
	}),
	rootFocusedStyles,
);

export const Container = styled.div`
	align-items: center;
	background-color: var(--background);
	border-radius: inherit;
	color: var(--foreground);
	display: flex;
	flex: 1;
	position: relative;
	width: 100%;
`;

export const Input = styled.input`
	background-color: var(--background);
	border: none;
	box-shadow: none !important;
	color: var(--foreground);
	display: block;
	font-family: inherit;
	font-size: 1rem;
	height: 2.5rem;
	line-height: 1;
	margin: 0;
	outline: none;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	width: 100%;
`;

const BaseLabel = styled(Text)`
	box-sizing: border-box;
	color: currentColor;
	display: block;
	margin: 0;
	max-width: 100%;
	z-index: 1;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding-top: 0;
	padding-bottom: 0.5rem;
`;

export const Label: FunctionComponent<{
	htmlFor?: string;
	children: ReactNode;
}> = (props) => <BaseLabel variant="label" {...props} as="label" />;

export const LabelWrapper = styled(FlexItem)`
	max-width: calc(100% - 10px);
`;

export const BackdropUI = styled.div<{
	isFocused: boolean;
}>(
	{
		borderRadius: 'inherit',
		margin: 0,
		padding: 0,
		pointerEvents: 'none',
		position: 'absolute',
		paddingLeft: 2,
	},
	({ isFocused }) => {
		const borderColor = isFocused ? 'var(--primary)' : 'var(--border)';

		return css({
			borderColor,
			borderStyle: 'solid',
			borderWidth: isFocused ? 2 : 1,
			right: isFocused ? -1 : 0,
			left: isFocused ? -1 : 0,
			top: isFocused ? -1 : 0,
			bottom: isFocused ? -1 : 0,
		});
	},
);

export const Suffix = styled.span`
	box-sizing: border-box;
	display: block;
	font-size: 0.85rem;
	font-weight: 500;
	padding: 0 1em 0 0;
`;
