/**
 * External dependencies
 */
import { forwardRef } from 'react';
import type { ComponentPropsWithRef } from 'react';

/**
 * Internal dependencies
 */
import { Block } from './styles/flex-styles';

type FlexBlockProps = ComponentPropsWithRef<'div'>;

const ForwardedFlexBlock = forwardRef<HTMLDivElement, FlexBlockProps>(
	function FlexBlock(props, ref) {
		return <Block {...props} ref={ref} />;
	},
);

export default ForwardedFlexBlock;
