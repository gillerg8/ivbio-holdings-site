import React from 'react'

import Layout from '../layout/Layout'
import SEO from '../components/Seo'

import styled from '@emotion/styled'
import Navbar from '../components/Navbar.js'

const Container = styled.div`
	text-align: center;
`

const OuterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 250px;
	@media (max-width: 767px) {
		margin-top: 20px;
	}
`

const IndexPage = () => (
	<Layout>
		<SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
		<OuterContainer>
			<Container>
				<Navbar />
			</Container>
		</OuterContainer>
	</Layout>
)

export default IndexPage
