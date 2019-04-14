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

const Studio = () => {
	return (
		<Layout>
			<SEO title='Studio' />
			<Content>
				<PageHeader>A startup that create startups</PageHeader>
				<Quote
					quoteText='"Venture creation is the perfect manifestation of art and science. By
						cross-contaminating ideas and experience across the healthcare,
						technology and investment industries, we can create transformative
						companies that innovate, disrupt and win."'
				/>
				<p>
					Marty Keiser is an accomplished thought-leader in the field of public
					and private investing. Throughout his decade-long career on Wall
					Street, Marty has advised some of the largest wealth management teams
					in America, identifying and explaining investment trends and
					opportunities all in an effort to maximize returns and minimize risk
					for individual investors.
				</p>
				<p>
					After graduating magna cum laude from Coastal Carolina University with
					a B.S. in Marketing, Marty began his career in 2008 at Legg Mason
					Global Asset Management with a front row seat to the financial crisis.
					In 2011, he became the youngest person in firm history promoted to
					Sales Director in a major metropolitan market (Southern California).
					Marty quickly shattered sales records and was honored to attend the
					NYSE closing bell ceremony based on his sales achievements during two
					separate Initial Public Offerings (IPO’s).
				</p>
				<p>
					In 2015, Marty was recruited by Lord Abbett & Co and proudly served as
					Regional Manager for the Greater Orange County market. During his
					final year at Lord Abbett, Marty was responsible for raising $780
					Million in investor capital across various investment strategies and
					ranked 3rd industrywide within his respective market.
				</p>
				<p>
					After several years as an early-stage biotech investor, Marty made a
					life-changing decision to step away from the asset management industry
					to take advantage of what he believes to be the early innings of a
					healthcare technology renaissance. Marty now serves as CEO of IV
					BioHoldings, LLC, an investment holding company focused exclusively on
					seeding and developing virtual life sciences startups.
				</p>
			</Content>
		</Layout>
	);
};

export default Studio;
