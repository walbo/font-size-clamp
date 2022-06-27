/**
 * External dependencies
 */
import { forwardRef } from 'react';
import type { ComponentPropsWithRef } from 'react';

/**
 * Internal dependencies
 */
import { Item } from './styles/flex-styles';

type FlexItemProps = ComponentPropsWithRef<'div'>;

const ForwardedFlexItem = forwardRef<HTMLDivElement, FlexItemProps>(
	function FlexItem(props, ref) {
		return <Item {...props} ref={ref} />;
	},
);

export default ForwardedFlexItem;
