import React from 'react';
import styled from '@emotion/styled';

import Layout from '../layout/GeneralLayout';
import SEO from '../components/seo';
import Quote from '../components/Quote';
import PageHeader from '../components/PageHeader';

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
				<PageHeader>We are living in the golden age of innovation</PageHeader>
				<Quote
					quoteText='"I don&#39;t know why we are here, but I&#39;m pretty sure that it is not in
				order to enjoy ourselves."'
				/>
				<p>
					Thanks to an abundance of data and computational power, extraordinary
					scientific breakthroughs are being made in new and unusual places each
					and every day. Much more, many of the great “failures” in the
					healthcare industry now represent a treasure trove of opportunity for
					those who are willing to think differently and embrace new
					technologies.
				</p>
				<p>
					IV BioHoldings is a venture studio focused on the creation of virtual
					biotech startups. By connecting data, technology and capital, we can
					unlock value from intellectual property (IP) that is being overlooked
					or discarded by traditional means of scientific discovery.
				</p>
				<p>
					We believe that innovation in healthcare occurs at the ground level.
					Virtual companies, characterized by low overhead, lean budgets and a
					singular focus, are crucial to making personalized medicine a reality
					for all.
				</p>
				<p>
					By dedicating all of our time and resources towards building value
					around promising IP and collaborating with outside partners across
					healthcare, technology and the investment industries, we can speed
					innovation to market – Saving lives and reducing healthcare costs
					worldwide.
				</p>
			</Content>
		</Layout>
	);
};

export default Vision;
