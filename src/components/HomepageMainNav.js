import {Link} from 'gatsby';
import styled from '@emotion/styled';
import React, {useState} from 'react';
import {useTransition, animated} from 'react-spring';
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
	const [items, set] = useState(NavLinkArray);

	const transitions = useTransition(items, (item) => item.linkName, {
		from: {transform: 'translate3d(0,-1000px,0)'},
		enter: {transform: 'translate3d(0,0px,0)'},
		trail: 300
	});
	return (
		<Nav>
			{transitions.map(({item, props, key}) => {
				return (
					<animated.div key={key} style={props}>
						<HomepageNavLink to={item.linkPath}>
							{item.linkName}
						</HomepageNavLink>
					</animated.div>
				);
			})}
		</Nav>
	);
};

export default HomepageMainNav;
