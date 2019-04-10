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

const Vision = () => {
	return (
		<Layout>
			<SEO title='Vision' />
			<Content>
				<Header>We are living in the golden age of innovation</Header>
				<Quote>
					"I don't know why we are here, but I'm pretty sure that it is not in
					order to enjoy ourselves."
				</Quote>
			</Content>
		</Layout>
	);
};

export default Vision;
