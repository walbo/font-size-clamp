/**
 * External dependencies
 */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

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

export const Container = styled.div(({ theme }) => ({
	backgroundColor: 'var(--background)',
	color: 'var(--foreground)',
	alignItems: 'center',
	borderRadius: 'inherit',
	display: 'flex',
	flex: 1,
	position: 'relative',
	width: '100%',
}));

export const Input = styled.input(({ theme }) => ({
	backgroundColor: 'var(--background)',
	border: 'none',
	boxShadow: 'none !important',
	color: 'var(--foreground)',
	display: 'block',
	margin: 0,
	outline: 'none',
	paddingLeft: '0.75rem',
	paddingRight: '0.75rem',
	width: '100%',
	lineHeight: 1,
	fontSize: '1rem',
	height: '2.5rem',
	fontFamily: 'inherit',
}));

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

export const Label: React.FC<{ htmlFor?: string }> = (props) => (
	<BaseLabel variant="label" {...props} as="label" />
);

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
	({ isFocused, theme }) => {
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
