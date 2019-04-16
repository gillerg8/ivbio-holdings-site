import React from 'react';
import styled from '@emotion/styled';

const TaglineContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	font-family: var(--benchnine-font);
	font-weight: 400;
	font-size: 2.4rem;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 8rem;
	transition-duration: 0.4s;
	cursor: default;
	:hover {
		transform: skewX(-10deg);
		color: var(--red-color);
	}
`;

const Tagline = () => {
	return <TaglineContent>INNOVATE. DISRUPT. WIN.</TaglineContent>;
};

export default Tagline;
