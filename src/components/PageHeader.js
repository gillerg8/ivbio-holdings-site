import React from 'react';
import styled from '@emotion/styled';
import {PropTypes} from 'prop-types';

const PageHeaderContent = styled.h1`
	margin-bottom: 50px;
	transition-duration: 0.4s;
	cursor: default;
	color: var(--highlight-color);
	font-family: var(--primary-font);
`;

const PageHeader = ({children}) => {
	return <PageHeaderContent>{children}</PageHeaderContent>;
};

PageHeader.propTypes = {
	children: PropTypes.string
};

export default PageHeader;
