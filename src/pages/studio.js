import React from 'react';
import styled from '@emotion/styled';

import Layout from '../layout/GeneralLayout';
import SEO from '../components/seo';
import Quote from '../components/Quote';

const Content = styled.div`
	margin: 0 auto;
	max-width: 860px;
	padding: 3rem 1.0875rem 1.45rem;
	@media (max-width: 1200px) {
		padding: 1rem 1.0875rem 1.45rem;
	}
`;

const Header = styled.h1`
	margin-bottom: 50px;
`;

const Studio = () => {
	return (
		<Layout>
			<SEO title='Studio' />
			<Content>
				<Header>A startup that create startups</Header>
				<Quote
					quoteText='"Venture creation is the perfect manifestation of art and science. By
						cross-contaminating ideas and experience across the healthcare,
						technology and investment industries, we can create transformative
						companies that innovate, disrupt and win."'
				/>
			</Content>
		</Layout>
	);
};

export default Studio;
