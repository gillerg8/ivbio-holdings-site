import {Link} from 'gatsby';
import styled from '@emotion/styled';
import React, {Fragment} from 'react';
import {PropTypes} from 'prop-types';
import NavLinkArray from '../data/NavLinkArray';

const GeneralNavLink = styled(Link)`
	color: black;
	text-decoration: none;
	display: inline-block;
	position: relative;
	transition-duration: 0.3s;
	&:hover {
		transform: scale(1.4);
	}
`;

const NavLinks = ({navType}) => {
	return (
		<Fragment>
			{navType === 'generalNav'
				? NavLinkArray.map((navLink, index) => {
						return (
							<GeneralNavLink key={index} to={navLink.linkPath}>
								{navLink.linkName}
							</GeneralNavLink>
						);
				  })
				: null}
		</Fragment>
	);
};

NavLinks.propTypes = {
	navType: PropTypes.string
};

export default NavLinks;
