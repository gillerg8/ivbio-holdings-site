import {Link} from 'gatsby';
import styled from '@emotion/styled';
import React, {Fragment, useState, useEffect} from 'react';
import NavLinkArray from '../data/NavLinkArray';

const NavContainer = styled.div`
	cursor: pointer;
	right: 30px;
	top: 60px;
	position: absolute;
	width: 40px;
	height: 30px;
	&.active {
		z-index: 10;
		height: 40px;
	}
`;

const Hamburger = styled.div`
	position: relative;
	width: 40px;
	height: 4px;
	background-color: #000;
	border-radius: 4px;
	&:before {
		content: '';
		width: 40px;
		height: 4px;
		top: 10px;
		background-color: #000;
		border-radius: 4px;
		position: absolute;
	}
	&:after {
		content: '';
		width: 40px;
		height: 4px;
		top: 20px;
		background-color: #000;
		border-radius: 4px;
		position: absolute;
	}
	transition-duration: 0.4s;
	&.active {
		background-color: #fff;
		transform: rotate(45deg);
		top: 15px;
		&:before {
			content: '';
			background-color: #fff;
			transform: rotate(90deg);
			top: 0;
		}
		&:after {
			display: none;
		}
	}
`;

const MobileNav = styled.nav`
	z-index: 5;
	height: 100vh;
	position: absolute;
	background: #000;
	width: 100%;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const NavLink = styled(Link)`
	font-size: 2.4rem;
	line-height: 3rem;
	display: inline-block;
	color: #fff;
	text-decoration: none;
`;

const HamburgerMainNav = () => {
	const [navState, navToggle] = useState(false);

	return (
		<Fragment>
			<NavContainer
				onClick={() => navToggle(!navState)}
				className={navState ? 'active' : ''}
			>
				<Hamburger className={navState ? 'active' : ''} />
			</NavContainer>
			{navState ? (
				<MobileNav>
					{NavLinkArray.map((link, index) => {
						return (
							<NavLink key={index} to={link.linkPath}>
								{link.linkName}
							</NavLink>
						);
					})}
				</MobileNav>
			) : null}
		</Fragment>
	);
};

export default HamburgerMainNav;
