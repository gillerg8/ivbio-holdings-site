import {Link} from 'gatsby'
import styled from '@emotion/styled'
import React, {useState} from 'react'

const SiteHeader = styled.header`
	background: transparent;
	display: flex;
`

const Logo = styled(Link)`
	position: absolute;
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

const Header = ({siteTitle}) => {
	const [value] = useState(0)
	return (
		<SiteHeader>
			<Logo to='/'>{siteTitle}</Logo>
			<Nav value={value}>
				<NavLink to='/vision'>Vision</NavLink>
				<NavLink to='/studio'>Studio</NavLink>
				<NavLink to='/builder'>Builder</NavLink>
				<NavLink to='/blog'>Blog</NavLink>
			</Nav>
		</SiteHeader>
	)
}

export default Header
