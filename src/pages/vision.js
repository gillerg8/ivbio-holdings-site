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

const Vision = () => {
	return (
		<Layout>
			<SEO title='Vision' />
			<Content>
				<Header>We are living in the golden age of innovation</Header>
				<Quote
					quoteText='"I don&#39;t know why we are here, but I&#39;m pretty sure that it is not in
				order to enjoy ourselves."'
				/>
			</Content>
		</Layout>
	);
};

export default Vision;
