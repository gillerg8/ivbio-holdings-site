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

const Studio = () => {
	return (
		<Layout>
			<SEO title='Studio' />
			<Content>
				<SlideObject slideDirection='down'>
					<PageHeader>Studio</PageHeader>
					<SubHeader>
						A company that <em>creates</em> companies
					</SubHeader>
					<Quote>
						<p>
							IV BioHoldings is a startup studio that produces transformative
							biotech companies; cross-contaminating ideas and experience from a
							vast network across the healthcare, technology and investment
							industries in order to create companies that innovate, disrupt and
							win. Each venture creation is born at the intersection of data,
							technology and science and is differentiated by an intelligent
							approach to R&amp;D and a unique marketing strategy that deeply
							connects with, uplifts and empowers the patient's that it serves.
						</p>
						<p>
							Our impact is maximized in the earliest stage of growth &mdash;
							doing the heavy lifting required to speed <em>effective</em> and{' '}
							<em>affordable</em> innovation to market.
						</p>
					</Quote>
				</SlideObject>
			</Content>
		</Layout>
	);
};

export default Studio;
