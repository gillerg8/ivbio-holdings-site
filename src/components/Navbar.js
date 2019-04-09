import {Link} from 'gatsby'
import styled from '@emotion/styled'
import React from 'react'

const SiteHeader = styled.header`
	background: transparent;
	display: flex;
`

const Nav = styled.nav`
	max-width: 860px;
	margin: 0 auto;
	padding: 1rem 1.0875rem;
	font-size: 3.2rem;
	line-height: 4.2rem;
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
	transition-duration: 0.3s;
	&:hover {
		transform: scale(1.4);
	}
`

const Header = () => {
	return (
		<SiteHeader>
			<Nav>
				<NavLink fade to='/vision'>
					Vision
				</NavLink>
				<NavLink fade to='/studio'>
					Studio
				</NavLink>
				<NavLink fade to='/builder'>
					Builder
				</NavLink>
				<NavLink fade to='/blog'>
					Blog
				</NavLink>
			</Nav>
		</SiteHeader>
	)
}

export default Header
