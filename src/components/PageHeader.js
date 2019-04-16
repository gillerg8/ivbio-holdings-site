import React from 'react';
import styled from '@emotion/styled';
import {PropTypes} from 'prop-types';

const PageHeaderContent = styled.h1`
	margin-bottom: 50px;
	transition-duration: 0.4s;
	cursor: default;
	font-family: var(--yantramanav-font);
	color: var(--brown-color);
	font-weight: 300;
`;

const PageHeader = ({children}) => {
	return <PageHeaderContent>{children}</PageHeaderContent>;
};

PageHeader.propTypes = {
	children: PropTypes.string
};

export default PageHeader;
