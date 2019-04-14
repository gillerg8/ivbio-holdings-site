import styled from '@emotion/styled';
import React from 'react';
import InteractiveObject from './InteractiveObject';
import {PropTypes} from 'prop-types';

const QuoteContent = styled.blockquote`
	display: flex;
	align-items: center;
	background-color: white;
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 15px;
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
