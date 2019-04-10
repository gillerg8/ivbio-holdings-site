import React from 'react';
import styled from '@emotion/styled';

import Layout from '../layout/Layout';
import SEO from '../components/seo';
import MartyImage from '../images/marty-portrait.jpg';

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

const Card = styled.div`
	display: flex;
	align-items: center;
	background-color: white;
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 15px;
	@media (max-width: 767px) {
		flex-direction: column;
	}
`;

const CardImageContainer = styled.div`
	display: block;
`;

const CardImage = styled.img`
	max-width: 100%;
	margin: 0;
`;

const CardFooter = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0 15px;
	@media (max-width: 767px) {
		padding: 15px 0;
	}
`;

const CardTitle = styled.div`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 10px;
`;
const CardDescription = styled.div`
	font-size: 14px;
	color: #4e4e4e;
	margin-bottom: 10px;
`;

const Builder = () => {
	return (
		<Layout>
			<SEO title='Builder' />
			<Content>
				<Header>Blending tradition and innovation</Header>
				<Quote>
					"Every decision that I make personally and professionally begins with,
					and ends with, a genuine and passionate love for people."
				</Quote>
				<Card>
					<CardImageContainer>
						<CardImage src={MartyImage} alt='Marty Keiser' />
					</CardImageContainer>
					<CardFooter>
						<CardTitle>Marty Keiser</CardTitle>
						<CardDescription>
							Marty Keiser is Founder & CEO of IV BioHoldings, LLC, a startup
							studio focused on producing biotech companies that innovate,
							disrupt and win. Marty is a creative entrepreneur that brings an
							imaginative yet practical approach to the studio; combining a
							decade of proven sales, marketing and Wall Street experience with
							deep relationships across the healthcare, technology and
							investment industries, in order to build transformative biotech
							companies that connect with, uplift and empower human beings
							around the world. Marty currently resides in his hometown of
							Fairfield, CT, centrally located to biotech hubs in Massachusetts
							and New Jersey and just a short train ride to Manhattan.
						</CardDescription>
					</CardFooter>
				</Card>
			</Content>
		</Layout>
	);
};

export default Builder;
