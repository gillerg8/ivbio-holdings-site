import styled from '@emotion/styled';
import React from 'react';
import InteractiveObject from './InteractiveObject';
import {PropTypes} from 'prop-types';

const QuoteContent = styled.blockquote`
	display: flex;
	align-items: center;
	flex-direction: column;
	color: #fff;
	font-family: var(--fira-font);
	font-weight: 300;
	background-color: var(--black-color);
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 15px;
	font-size: 1.6rem;
	line-height: 2rem;
	margin-bottom: 50px;
`;

const Quote = ({children}) => {
	return (
		<InteractiveObject>
			<QuoteContent>{children}</QuoteContent>
		</InteractiveObject>
	);
};

Quote.propTypes = {
	children: PropTypes.node
};

export default Quote;
