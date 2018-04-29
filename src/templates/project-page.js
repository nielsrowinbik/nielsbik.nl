import React from 'react';
import { get } from 'lodash';
import Main from '../components/Main';

const ProjectPageTemplate = () => (
	<Main>
		<h1>Project page</h1>
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
