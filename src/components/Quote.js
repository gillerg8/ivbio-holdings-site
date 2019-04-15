import styled from '@emotion/styled';
import React from 'react';
import InteractiveObject from './InteractiveObject';
import {PropTypes} from 'prop-types';

const QuoteContent = styled.blockquote`
	display: flex;
	align-items: center;
	color: #fff;
	background-color: var(--black-color);
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 15px;
	font-size: 1.6rem;
	line-height: 2rem;
	margin-bottom: 50px;
`;

const Quote = ({quoteText}) => {
	return (
		<InteractiveObject>
			<QuoteContent>{quoteText}</QuoteContent>
		</InteractiveObject>
	);
};

Quote.propTypes = {
	quoteText: PropTypes.string
};

export default Quote;
