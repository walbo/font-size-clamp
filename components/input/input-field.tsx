/**
 * External dependencies
 */
import { forwardRef } from 'react';
import type { ComponentPropsWithRef, ChangeEvent } from 'react';

/**
 * Internal dependencies
 */
import { Input } from './styles/input-control-styles';

type InputFieldProps = Omit<ComponentPropsWithRef<'input'>, 'onChange'> & {
	setIsFocused: (isFocused: boolean) => void;
	onChange?: (value: string) => void;
	unit: string;
};

const ForwardedInputField = forwardRef<HTMLInputElement, InputFieldProps>(
	function InputField(
		{ onChange = () => null, setIsFocused, unit, ...props },
		ref,
	) {
		const handleOnBlur = () => {
			setIsFocused(false);
		};

		const handleOnFocus = () => {
			setIsFocused(true);
		};

		const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
			const nextValue = event.target.value;
			onChange(`${nextValue}${unit}`);
		};

		return (
			<Input
				{...props}
				onBlur={handleOnBlur}
				onChange={handleOnChange}
				onFocus={handleOnFocus}
				ref={ref}
			/>
		);
	},
);

export default ForwardedInputField;
