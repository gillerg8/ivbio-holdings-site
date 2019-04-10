import React from 'react';
import styled from '@emotion/styled';

import Layout from '../layout/Layout';
import SEO from '../components/seo';

const Content = styled.div`
	margin: 0 auto;
	max-width: 860px;
	padding: 3rem 1.0875rem 1.45rem;
`;

const Header = styled.h1`
	margin-bottom: 50px;
`;

const Quote = styled.blockquote`
	display: flex;
	align-items: center;
	background-color: white;
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 15px;
	margin-bottom: 50px;
`;

const Studio = () => {
	return (
		<Layout>
			<SEO title='Studio' />
			<Content>
				<Header>A startup that create startups</Header>
				<Quote>
					"Venture creation is the perfect manifestation of art and science. By
					cross-contaminating ideas and experience across the healthcare,
					technology and investment industries, we can create transformative
					companies that innovate, disrupt and win."
				</Quote>
			</Content>
		</Layout>
	);
};

export default Studio;
