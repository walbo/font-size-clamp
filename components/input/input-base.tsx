/**
 * External dependencies
 */
import { forwardRef } from 'react';

/**
 * Internal dependencies
 */
import Backdrop from './backdrop';
import Label from './label';
import {
	Container,
	Root,
	Suffix,
	LabelWrapper,
} from './styles/input-control-styles';
import type { RootProps } from './styles/input-control-styles';

type InputBaseProps = RootProps & {
	isFocused: boolean;
	id?: string;
	label: string;
	suffix?: React.ReactNode;
	children?: React.ReactNode;
};

const ForwardedInputBase = forwardRef<HTMLDivElement, InputBaseProps>(
	function InputBase(
		{ children, id, isFocused = false, label, suffix, ...props },
		ref,
	) {
		return (
			<Root {...props} isFocused={isFocused} ref={ref}>
				<LabelWrapper>
					<Label htmlFor={id}>{label}</Label>
				</LabelWrapper>
				<Container>
					{children}
					{suffix && <Suffix>{suffix}</Suffix>}
					<Backdrop aria-hidden="true" isFocused={isFocused} />
				</Container>
			</Root>
		);
	},
);

export default ForwardedInputBase;
