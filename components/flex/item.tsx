/**
 * External dependencies
 */
import { forwardRef } from 'react';

/**
 * Internal dependencies
 */
import { Item } from './styles/flex-styles';

type FlexItemProps = React.ComponentPropsWithRef<'div'>;

const ForwardedFlexItem = forwardRef<HTMLDivElement, FlexItemProps>(
	function FlexItem(props, ref) {
		return <Item {...props} ref={ref} />;
	},
);

export default ForwardedFlexItem;
