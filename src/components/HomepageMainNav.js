import styled from '@emotion/styled';
import React from 'react';
import NavLinks from './Navlinks';

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

const HomepageMainNav = () => {
	return (
		<Nav>
			<NavLinks navType={'homepageNav'} />
		</Nav>
	);
};

export default HomepageMainNav;
