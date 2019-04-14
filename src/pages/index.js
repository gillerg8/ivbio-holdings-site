import React from 'react';

import Layout from '../layout/HomepageLayout';
import SEO from '../components/seo';

import styled from '@emotion/styled';
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
    opacity: .08;
    width: 100%;
	height: 100%;
    max-width: 700px;
	max-height: 700px;
	margin: 20px auto 0;
`;

const IndexPage = () => (
	<Layout>
		<SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
		<Container>
			<BackgroundImage />
			<HomepageMainNav />
		</Container>
	</Layout>
);

export default IndexPage;
