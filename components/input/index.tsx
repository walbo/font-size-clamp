/**
 * External dependencies
 */
import { useState, forwardRef } from 'react';

/**
 * Internal dependencies
 */
import InputBase from './input-base';
import InputField from './input-field';
import UnitSelectControl from './unit-select-control';
import { parseUnit } from '@utils/units';

type InputControlProps = Omit<
	React.ComponentPropsWithRef<'input'>,
	'onChange'
> & {
	value: string;
	label: string;
	onChange: (value: string) => void;
};

const ForwardedInputControl = forwardRef<HTMLInputElement, InputControlProps>(
	function InputControl({ id, label, value, onChange, ...props }, ref) {
		const [num, unit, step] = parseUnit(value);
		const [isFocused, setIsFocused] = useState(false);

		const inputSuffix = (
			<UnitSelectControl
				onChange={(newUnit) => onChange(`${num}${newUnit}`)}
				value={unit}
			/>
		);

		return (
			<InputBase
				gap={3}
				id={id}
				isFocused={isFocused}
				justify="left"
				label={label}
				suffix={inputSuffix}
			>
				<InputField
					{...props}
					onChange={onChange}
					id={id}
					ref={ref}
					setIsFocused={setIsFocused}
					value={num}
					unit={unit}
					step={step}
				/>
			</InputBase>
		);
	},
);

export default ForwardedInputControl;
