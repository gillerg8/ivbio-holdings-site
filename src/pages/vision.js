import React from 'react';
import styled from '@emotion/styled';

import Layout from '../layout/GeneralLayout';
import SEO from '../components/seo';
import Quote from '../components/Quote';
import PageHeader from '../components/PageHeader';
import SubHeader from '../components/SubHeader';
import SlideObject from '../components/SlideObject';

const Content = styled.div`
	margin: 0 auto;
	max-width: 860px;
	padding: 3rem 1.0875rem 1.45rem;
	@media (max-width: 1200px) {
		padding: 1rem 1.0875rem 1.45rem;
	}
`;

const Vision = () => {
	return (
		<Layout>
			<SEO title='Vision' />
			<Content>
				<SlideObject slideDirection="down">
					<PageHeader>Vision</PageHeader>
					<SubHeader>
						In the golden age of innovation, anything is possible
					</SubHeader>
				</SlideObject>
				<Quote>
					IV BioHoldings was founded on the belief that the next wave of medical breakthroughs will not originate at large healthcare organizations, but will instead spawn from creative entrepreneurs who seamlessly connect data, technology and capital. We believe that an integrated and flexible approach can lead to the rapid discovery and commercialization of scientific truths &mdash; speeding <em>effective</em> and <em>affordable</em> innovation to patients worldwide.
				</Quote>
			</Content>
		</Layout>
	);
};

export default Vision;
