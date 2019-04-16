import {Link} from 'gatsby';
import styled from '@emotion/styled';
import React from 'react';
import NavLinkArray from '../data/NavLinkArray';

const Nav = styled.nav`
	max-width: 860px;
	margin: 0 auto;
	font-size: 3.2rem;
	line-height: 4.2rem;
	font-weight: bold;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
`;

const HomepageNavLink = styled(Link)`
	color: black;
	text-decoration: none;
	display: inline-block;
	position: relative;
	transition-duration: 0.3s;
	&:hover {
		transform: scale(1.4);
		color: var(--red-color);
	}
`;

const HomepageMainNav = () => {
	return (
		<Nav>
			{NavLinkArray.map((navLink, index) => {
				return (
					<HomepageNavLink key={index} to={navLink.linkPath}>
						{navLink.linkName}
					</HomepageNavLink>
				);
			})}
		</Nav>
	);
};

export default HomepageMainNav;
