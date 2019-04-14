import styled from '@emotion/styled';
import React from 'react';
import InteractiveObject from './InteractiveObject';
import {PropTypes} from 'prop-types';

const CardContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: white;
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 15px;
	@media (max-width: 767px) {
		flex-direction: column;
	}
`;

const CardImageContainer = styled.div`
	display: block;
`;

const CardImage = styled.img`
	max-width: 100%;
	margin: 0;
`;

const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0 15px;
	@media (max-width: 767px) {
		padding: 15px 0;
	}
`;

const CardTitle = styled.div`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 10px;
`;
const CardDescription = styled.div`
	font-size: 14px;
	color: #4e4e4e;
	margin-bottom: 10px;
`;

const Card = ({imageSrc, imageAlt, cardTitle, cardDescription}) => {
	return (
		<InteractiveObject>
			<CardContainer>
				<CardImageContainer>
					<CardImage src={imageSrc} alt={imageAlt} />
				</CardImageContainer>
				<CardContent>
					<CardTitle>{cardTitle}</CardTitle>
					<CardDescription>{cardDescription}</CardDescription>
				</CardContent>
			</CardContainer>
		</InteractiveObject>
	);
};

Card.propTypes = {
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	cardTitle: PropTypes.string,
	cardDescription: PropTypes.string
};

export default Card;
