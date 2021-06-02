/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { text } from './styles/text-mixins';

export type TextProps = {
	variant?: 'label' | 'title';
	mb?: number;
	mt?: number;
};

const Text = styled.p<TextProps>(
	() => ({
		margin: 0,
	}),
	text,
);

export default Text;
