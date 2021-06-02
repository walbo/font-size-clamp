/**
 * Internal dependencies
 */
import { Label as BaseLabel } from './styles/input-control-styles';

export type LabelProps = React.ComponentPropsWithoutRef<'label'>;

const Label: React.FC<LabelProps> = ({ children, htmlFor, ...props }) => {
	if (!children) {
		return null;
	}

	return (
		<BaseLabel htmlFor={htmlFor} {...props}>
			{children}
		</BaseLabel>
	);
};

export default Label;
