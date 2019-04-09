import React from 'react'
import styled from '@emotion/styled'
import Navbar from './Navbar.js'

const Container = styled.div`
	text-align: center;
`

const OuterContainer = styled.div`
	position: absolute;
	left: 50%;
	top: 40%;
	transform: translate(-50%, -50%);
`

const LandingBio = () => (
	<OuterContainer>
		<Container>
			<Navbar />
		</Container>
	</OuterContainer>
)

export default LandingBio
