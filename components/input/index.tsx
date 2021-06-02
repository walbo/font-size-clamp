/**
 * External dependencies
 */
import { useState, forwardRef } from 'react';

/**
 * Internal dependencies
 */
import InputBase from './input-base';
import InputField from './input-field';

type InputControlProps = Omit<
	React.ComponentPropsWithRef<'input'>,
	'onChange'
> & {
	label: string;
	suffix?: React.ReactNode;
	onChange: (value: string) => void;
};

const ForwardedInputControl = forwardRef<HTMLInputElement, InputControlProps>(
	function InputControl({ id, label, suffix, value, ...props }, ref) {
		const [isFocused, setIsFocused] = useState(false);

		return (
			<InputBase
				gap={3}
				id={id}
				isFocused={isFocused}
				justify="left"
				label={label}
				suffix={suffix}
			>
				<InputField
					{...props}
					id={id}
					ref={ref}
					setIsFocused={setIsFocused}
					value={value}
				/>
			</InputBase>
		);
	},
);

export default ForwardedInputControl;
