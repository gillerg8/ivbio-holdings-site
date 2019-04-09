import React from "react"
import styled from "@emotion/styled"
import Navbar from "./Navbar.js"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const LandingBio = () => (
  <OuterContainer>
    <Container>
      <Navbar />
    </Container>
  </OuterContainer>
)

export default LandingBio
