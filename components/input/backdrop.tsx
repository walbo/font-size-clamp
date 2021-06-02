/**
 * External dependencies
 */
import { memo } from 'react';

/**
 * Internal dependencies
 */
import { BackdropUI } from './styles/input-control-styles';

type BackdropProps = {
	isFocused?: boolean;
};

const Backdrop: React.FC<BackdropProps> = ({ isFocused = false }) => {
	return <BackdropUI aria-hidden="true" isFocused={isFocused} />;
};

const MemoizedBackdrop = memo(Backdrop);

export default MemoizedBackdrop;
