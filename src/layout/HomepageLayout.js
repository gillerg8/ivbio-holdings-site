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
import Logo from '../images/ivbio-logo.png';
import Tagline from '../components/Tagline';
import Footer from '../components/Footer';

import './layout.css';

const MainLogo = styled(Link)`
	text-decoration: none;
	display: block;
	width: 300px;
	margin: 0 auto 20px;
	img {
		margin-bottom: 5px;
		transition-duration: 0.4s;
		filter: brightness(100%);
	}
	img:hover {
		filter: brightness(130%);
	}
	@media (max-width: 480px) {
		margin: 0 auto;
	}
`;

const Content = styled.div`
	margin: 0 auto;
	padding-top: 0;
	padding-bottom: 10rem;
`;

const Layout = ({children}) => (
	<Fragment>
		<MainLogo to='/'>
			<img src={Logo} alt='IV Bio Logo' />
		</MainLogo>
		<Content>
			<main>{children}</main>
		</Content>
		<Tagline />
		<Footer />
	</Fragment>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
