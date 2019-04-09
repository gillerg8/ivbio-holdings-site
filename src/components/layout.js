/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import styled from '@emotion/styled'
import Icon from '../images/ivbio-icon.png'

import './layout.css'

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
	}
	&:hover img {
		transform: scale(1.3);
	}
	@media (max-width: 1200px) {
		display: block;
		position: relative;
		left: 0;
		top: 0;
	}
`

const Content = styled.div`
	margin: 0 auto;
	max-width: 860px;
	padding: 0 1.0875rem 1rem;
	padding-top: 0;
`

const Footer = styled.footer`
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 1rem;
	background-color: #efefef;
	text-align: center;
`

const Layout = ({children}) => (
	<Fragment>
		<Logo to='/'>
			<img src={Icon} alt='IV Bio Icon' />
		</Logo>
		<Content>
			<main>{children}</main>
			<Footer>
				© {new Date().getFullYear()} IV BioHoldings. All Rights Reserved.
			</Footer>
		</Content>
	</Fragment>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired
}

export default Layout
