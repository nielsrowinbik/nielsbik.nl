import React from 'react';
import { get } from 'lodash';
import Main from '../components/Main';

const BlogPostTemplate = () => (
	<Main>
		<h1>Blog page</h1>
	</Main>
);

const BlogPost = (props) => {
	const project = get(props, 'data.markdownRemark');

	return <BlogPostTemplate {...project} />;
};

export { BlogPost, BlogPostTemplate };
export default BlogPost;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query BlogByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			fields {
				slug
			}
			frontmatter {
				date
				title
			}
		}
	}
`;
