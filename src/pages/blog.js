import React from 'react';
import {Link, graphql} from 'gatsby';
import {css} from '@emotion/core';
import styled from '@emotion/styled';

import Layout from '../layout/GeneralLayout';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';
import SlideObject from '../components/SlideObject';
import {PropTypes} from 'prop-types';

const Content = styled.div`
	margin: 0 auto;
	max-width: 860px;
	padding: 3rem 1.0875rem 1.45rem;
	@media (max-width: 1200px) {
		padding: 1rem 1.0875rem 1.45rem;
	}
`;

const ArticleDate = styled.h5`
	display: inline;
	color: #bbb;
	margin-bottom: 10px;
`;

const MarkerHeader = styled.h3`
	display: inline;
	border-radius: 1em 0 1em 0;
	margin-bottom: 10px;
	background-image: linear-gradient(
		-100deg,
		rgba(255, 250, 150, 0.15),
		rgba(255, 250, 150, 0.8) 100%,
		rgba(255, 250, 150, 0.25)
	);
`;

const ReadingTime = styled.h5`
	display: inline;
	color: #bbb;
	margin-bottom: 10px;
`;

const IndexPage = ({data}) => {
	return (
		<Layout>
			<SEO title='Blog' />
			<Content>
				<SlideObject slideDirection='down'>
					<PageHeader>Blog</PageHeader>
					{data.allMarkdownRemark.edges.map(({node}) => (
						<div key={node.id}>
							<Link
								to={node.frontmatter.path}
								css={css`
									text-decoration: none;
									color: inherit;
								`}
							>
								<MarkerHeader>{node.frontmatter.title} </MarkerHeader>
								<div>
									<ArticleDate>{node.frontmatter.date}</ArticleDate>
									<ReadingTime> - {node.fields.readingTime.text}</ReadingTime>
								</div>
								<p>{node.excerpt}</p>
							</Link>
						</div>
					))}
				</SlideObject>
			</Content>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.array
};

export default IndexPage;

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
						path
					}
					fields {
						slug
						readingTime {
							text
						}
					}
					excerpt
				}
			}
		}
	}
`;
