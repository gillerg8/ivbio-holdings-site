import React from 'react';
import styled from '@emotion/styled';

import Layout from '../layout/GeneralLayout';
import SEO from '../components/seo';
import Card from '../components/Card';
import Quote from '../components/Quote';
import MartyImage from '../images/marty-portrait.jpg';
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

const Builder = () => {
	return (
		<Layout>
			<SEO title='Builder' />
			<Content>
				<SlideObject slideDirection="down">
					<PageHeader>Builder</PageHeader>
					<SubHeader>
						Blending tradition and innovation
					</SubHeader>
				</SlideObject>
				<Quote>
					"Every decision that I make personally and professionally begins with,
					and ends with, a genuine and passionate love for people."
				</Quote>
				<Card
					imageSrc={MartyImage}
					imageAlt='Marty Keiser'
					cardTitle='Marty Keiser'
					cardDescription='Marty Keiser is Founder & CEO of IV BioHoldings, LLC, a startup
					studio focused on producing biotech companies that innovate,
					disrupt and win. Marty is a creative entrepreneur that brings an
					imaginative yet practical approach to the studio; combining a
					decade of proven sales, marketing and Wall Street experience with
					deep relationships across the healthcare, technology and
					investment industries, in order to build transformative biotech
					companies that connect with, uplift and empower human beings
					around the world. Marty currently resides in his hometown of
					Fairfield, CT, centrally located to biotech hubs in Massachusetts
					and New Jersey and just a short train ride to Manhattan.'
				/>
			</Content>
		</Layout>
	);
};

export default Builder;
