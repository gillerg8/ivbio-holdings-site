import React from 'react';
import styled from '@emotion/styled';

const FooterContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 3.4rem;
	background-color: #efefef;
`;

const Footer = () => {
	return (
		<FooterContent>
			© {new Date().getFullYear()} IV BioHoldings. All Rights Reserved.
		</FooterContent>
	);
};

export default Footer;
