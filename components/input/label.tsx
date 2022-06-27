/**
 * External dependencies
 */
import type {
	ComponentPropsWithoutRef,
	ReactNode,
	FunctionComponent,
} from 'react';

/**
 * Internal dependencies
 */
import { Label as BaseLabel } from './styles/input-control-styles';

export type LabelProps = ComponentPropsWithoutRef<'label'> & {
	children: ReactNode;
};

const Label: FunctionComponent<LabelProps> = ({
	children,
	htmlFor,
	...props
}) => {
	return (
		<BaseLabel htmlFor={htmlFor} {...props}>
			{children}
		</BaseLabel>
	);
};

export default Label;
