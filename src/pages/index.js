import React, {useState} from 'react';

import Layout from '../layout/HomepageLayout';
import SEO from '../components/seo';

import styled from '@emotion/styled';
import {useSpring, animated} from 'react-spring';
import HomepageMainNav from '../components/HomepageMainNav';

import Icon from '../images/ivbio-icon.png';

const Container = styled.div`
	display: flex;
	position: relative;
	z-index: 1;
	text-align: center;
	height: 550px;
`;

const BackgroundImage = styled.div`
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

const IndexPage = () => {
	const animation = useSpring({
		opacity: 0.08,
		from: {opacity: 1},
		config: {mass: 1, tension: 280, friction: 200}
	});

	return (
		<Layout>
			<SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
			<Container>
				<animated.h1 style={animation}>
					<BackgroundImage />
				</animated.h1>
				<HomepageMainNav />
			</Container>
		</Layout>
	);
};

export default IndexPage;
