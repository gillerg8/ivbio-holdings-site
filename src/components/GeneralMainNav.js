import {Link} from 'gatsby';
import styled from '@emotion/styled';
import React, {useState} from 'react';
import {useTransition, animated} from 'react-spring';
import NavLinkArray from '../data/NavLinkArray';

const Nav = styled.div`
	position: fixed;
	background: rgba(0, 0, 0, 0.9);
	width: 200px;
	height: 100vh;
	right: 0;
`;

const NavLinks = styled.nav`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	height: 80vh;
	text-align: center;
`;

const GeneralNavLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	display: inline-block;
	position: relative;
	font-size: 1.6rem;
	line-height: 3rem;
	:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #fff;
		visibility: hidden;
		-webkit-transform: scaleX(0);
		transform: scaleX(0);
		-webkit-transition: all 0.3s ease-in-out 0s;
		transition: all 0.3s ease-in-out 0s;
	}
	&:hover {
		color: #fff;
	}
	:hover:before {
		visibility: visible;
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}
`;

const GeneralMainNav = () => {
	const [items, set] = useState(NavLinkArray);

	const transitions = useTransition(items, (item) => item.linkName, {
		from: {transform: 'translate3d(500px, 0, 0)'},
		enter: {transform: 'translate3d(0,0,0)'},
		trail: 250
	});

	return (
		<Nav>
			<NavLinks>
				{transitions.map(({item, props, key}) => {
					return (
						<animated.div key={key} style={props}>
							<GeneralNavLink to={item.linkPath}>
								{item.linkName}
							</GeneralNavLink>
						</animated.div>
					);
				})}
			</NavLinks>
		</Nav>
	);
};

export default GeneralMainNav;
