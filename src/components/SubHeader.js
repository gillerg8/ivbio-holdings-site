import React from 'react';
import styled from '@emotion/styled';
import {PropTypes} from 'prop-types';

const SubHeaderContent = styled.h2`
	margin-bottom: 50px;
	cursor: default;
	font-family: var(--yantramanav-font);
	font-weight: 300;
`;

const SubHeader = ({children}) => {
	return <SubHeaderContent>{children}</SubHeaderContent>;
};

SubHeader.propTypes = {
	children: PropTypes.node
};

export default SubHeader;
