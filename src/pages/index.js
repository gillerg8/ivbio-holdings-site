import React from 'react';

import Layout from '../layout/HomepageLayout';
import SEO from '../components/seo';

import styled from '@emotion/styled';
import HomepageMainNav from '../components/HomepageMainNav';
import HomepageWatermarkImage from '../components/HomepageWatermarkImage';

const Container = styled.div`
	display: flex;
	position: relative;
	z-index: 1;
	text-align: center;
	height: 550px;
`;

const IndexPage = () => {
	return (
		<Layout>
			<SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
			<Container>
				<HomepageWatermarkImage />
				<HomepageMainNav />
			</Container>
		</Layout>
	);
};

export default IndexPage;
