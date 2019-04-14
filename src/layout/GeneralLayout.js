/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import styled from '@emotion/styled';
import Icon from '../images/ivbio-icon.png';

import './layout.css';

const Logo = styled(Link)`
	position: absolute;
	left: 30px;
	top: 15px;
	max-width: 150px;
	height: 150px;
	overflow: hidden;
	align-selft: baseline;
	img {
		width: 100%;
		transition-duration: 0.4s;
		filter: brightness(100%);
	}
	img:hover {
		filter: brightness(130%);
	}
	@media (max-width: 1200px) {
		display: block;
		position: relative;
		left: 0;
		top: 0;
	}
`;

const Content = styled.div`
	margin: 0 auto;
	padding-top: 0;
	padding-bottom: 2.5rem;
`;

const Footer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 3rem;
	background-color: #efefef;
`;

const Layout = ({children}) => (
	<Fragment>
		<Logo to='/'>
			<img src={Icon} alt='IV Bio Icon' />
		</Logo>
		<Content>
			<main>{children}</main>
		</Content>
		<Footer>
			© {new Date().getFullYear()} IV BioHoldings. All Rights Reserved.
		</Footer>
	</Fragment>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;