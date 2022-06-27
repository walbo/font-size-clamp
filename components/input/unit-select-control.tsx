/**
 * External dependencies
 */
import type { ChangeEvent } from 'react';

/**
 * Internal dependencies
 */
import { UnitSelect } from './styles/unit-control-styles';
import { UNITS } from '@utils/units';

function UnitSelectControl({
	onChange,
	value = 'px',
}: {
	onChange: (unitValue: string) => void;
	value: string | undefined;
}): JSX.Element {
	const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const { value: unitValue } = event.target;
		onChange(unitValue);
	};

	return (
		<UnitSelect
			onChange={handleOnChange}
			value={value}
			aria-label="Select unit"
		>
			{UNITS.map((option) => (
				<option value={option.value} key={option.value}>
					{option.label}
				</option>
			))}
		</UnitSelect>
	);
}

export default UnitSelectControl;
