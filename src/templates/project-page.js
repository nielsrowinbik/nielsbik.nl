import React from 'react';
import { get } from 'lodash';
import Title from '../components/Title';
import Main from '../components/Main';

const ProjectPageTemplate = ({ frontmatter: project }) => (
	<Main>
		<Title>{ project.title }</Title>
		<p>
			<i>More information about this project will be made available later.</i>
		</p>
	</Main>
);

const ProjectPage = (props) => {
	const project = get(props, 'data.markdownRemark');

	return <ProjectPageTemplate {...project} />;
};

export { ProjectPage, ProjectPageTemplate };
export default ProjectPage;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query ProjectByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
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
`;
