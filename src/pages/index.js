import React from 'react';
import Main from '../components/Main';
import WorkGrid, { WorkGridItem } from '../components/WorkGrid';
import Imprint from '../components/Imprint';
import { Github, LinkedIn } from '../icons';
import Emoji from 'react-emoji-render';
import Title from '../components/Title';
import { get, map } from 'lodash';

const Home = (props) => {
	const projects = get(props, 'data.allMarkdownRemark.edges');

	return (
		<Main>
			<Title>Niels Bik</Title>
			<p>I am a Master Business Informatics student based in Utrecht, The Netherlands. I currently work for ProRail.</p>
			<p>I'm really passionate about building cool products, which is why, in my spare time, I build modern web applications for clients. Take a look at some of my work below.</p>
			<a href="https://www.linkedin.com/in/nielsrowinbik" rel="noopener noreferrer" target="_blank"><LinkedIn />LinkedIn</a>
			<a href="https://github.com/nielsrowinbik" rel="noopener noreferrer" target="_blank"><Github />GitHub</a>
			<WorkGrid>
				{ map(projects, ({ node: project }) => (
					<WorkGridItem
						src={project.frontmatter.thumb}
						to={`/projects/${project.fields.slug}`}
						title={project.frontmatter.title}
					/>
				)) }
			</WorkGrid>
			<Imprint><Emoji text="Made with <3 in Utrecht" /></Imprint>
		</Main>
	);
};

export default Home;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
			filter: { frontmatter: { templateKey: { eq: "project-page" } } },
			sort: { fields: [ frontmatter___date ], order: DESC }
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						banner
						thumb
						title
					}
				}
			}
		}
	}
`;
