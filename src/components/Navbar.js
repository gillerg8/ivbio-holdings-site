import { Link } from "gatsby"
import styled from "@emotion/styled"
import { useSpring, animated } from "react-spring"
import PropTypes from "prop-types"
import React, { useState } from "react"

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
`

const Logo = styled(Link)`
  position: absolute;
`

const Nav = styled(animated.nav)`
  max-width: 860px;
  margin: 0 auto;
  padding: 1rem 1.0875rem;
  font-size: 3rem;
  line-height: 3.4rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

function AnimatedNav({ value }) {
  // Raw data data in ...
  // See: http://react-spring.surge.sh/spring#interpolation
  // const props = useSpring({ number: 10, from: { number: 100 } })

  const [props] = useSpring({ width: `${value}%`, from: { width: "0%" } })
  // Animated data out ...
  return <Nav style={props} />
}

function Header({ siteTitle }) {
  const [value] = useState(0)
  return (
    <SiteHeader>
      <Logo to="/">{siteTitle}</Logo>
      <Nav value={value}>
        <NavLink to="/vision">The Vision</NavLink>
        <NavLink to="/studio">The Studio</NavLink>
        <NavLink to="/builder">The Builder</NavLink>
        <NavLink to="/blog">The Blog</NavLink>
      </Nav>
    </SiteHeader>
  )
}

export default Header
