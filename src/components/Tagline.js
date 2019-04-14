import React from 'react';
import styled from '@emotion/styled';

const TaglineContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	font-family: var(--secondary-font);
	font-size: 1.8rem;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 8rem;
	transition-duration: 0.4s;
	cursor: default;
	:hover {
		transform: skewX(-10deg);
		color: var(--highlight-color);
	}
`;

const Tagline = () => {
	return <TaglineContent>Innovate. Disrupt. Win.</TaglineContent>;
};

export default Tagline;
