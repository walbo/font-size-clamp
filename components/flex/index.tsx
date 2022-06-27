/**
 * External dependencies
 */
import { forwardRef } from 'react';
import type { ReactNode, ElementType } from 'react';

/**
 * Internal dependencies
 */
import { Flex as BaseFlex } from './styles/flex-styles';

export type FlexProps = {
	as?: ElementType;
	gap?: number;
	isReversed?: boolean;
	align?: 'center' | 'top' | 'bottom';
	justify?: 'left' | 'right' | 'space-between' | 'center';
	children: ReactNode;
};

export { default as FlexBlock } from './block';
export { default as FlexItem } from './item';

const ForwardedFlexComponent = forwardRef<HTMLDivElement, FlexProps>(
	function FlexComponent(
		{
			align = 'center',
			gap = 2,
			justify = 'space-between',
			isReversed = false,
			...props
		},
		ref,
	) {
		return (
			<BaseFlex
				{...props}
				align={align}
				ref={ref}
				gap={gap}
				justify={justify}
				isReversed={isReversed}
			/>
		);
	},
);

export default ForwardedFlexComponent;
