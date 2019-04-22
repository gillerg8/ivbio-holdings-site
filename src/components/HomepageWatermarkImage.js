import React from 'react';
import styled from '@emotion/styled';
import {useSpring, animated} from 'react-spring';

import Icon from '../images/ivbio-icon.png';

const Image = styled.div`
	background: url('${Icon}');
	background-size: cover; 
	background-repeat: no-repeat;
	background-position: center center;   
	position: absolute;
	z-index: -1;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	max-width: 700px;
	max-height: 700px;
	margin: 20px auto 0;
`;

const HomepageWatermarkImage = () => {
	const animation = useSpring({
		opacity: 0.08,
		zIndex: -1,
		from: {opacity: 0.75},
		config: {mass: 1, tension: 280, friction: 200}
	});

	return (
		<animated.div style={animation}>
			<Image />
		</animated.div>
	);
};

export default HomepageWatermarkImage;
