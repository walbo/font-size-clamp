/**
 * External dependencies
 */
import { memo } from 'react';
import type { FunctionComponent } from 'react';

/**
 * Internal dependencies
 */
import { BackdropUI } from './styles/input-control-styles';

type BackdropProps = {
	isFocused?: boolean;
};

const Backdrop: FunctionComponent<BackdropProps> = ({ isFocused = false }) => {
	return <BackdropUI aria-hidden="true" isFocused={isFocused} />;
};

const MemoizedBackdrop = memo(Backdrop);

export default MemoizedBackdrop;
