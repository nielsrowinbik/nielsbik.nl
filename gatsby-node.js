const { createFilePath } = require('gatsby-source-filesystem');
const { get, trim } = require('lodash');
const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators;

	return graphql(`
		{
			allFile(filter: { name: { ne: ".gitinclude" } }) {
				edges {
					node {
						sourceInstanceName
						childMarkdownRemark {
							id
							fields {
								slug
							}
							frontmatter {
								templateKey
							}
						}
					}
				}
			}
		}
	`).then(handler(createPage));
};

const handler = (createPage) => (result) => {
	if (result.errors) {
		result.errors.forEach(e => console.error(e.toString()));
		return Promise.reject(result.errors);
	}

	const edges = get(result, 'data.allFile.edges');

	edges.forEach((edge, i) => {
		const { node } = edge;
		const { childMarkdownRemark, sourceInstanceName } = node;

		const id = get(childMarkdownRemark, 'id');
		const templateKey = get(childMarkdownRemark, 'frontmatter.templateKey');
		const slug = get(childMarkdownRemark, 'fields.slug');

		createPage({
			path: `/${sourceInstanceName}/${slug}`,
			component: path.resolve(`src/templates/${templateKey}.js`),
			context: { id }
		});
	});
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
	const { createNodeField } = boundActionCreators;

	if (node.internal.type === 'MarkdownRemark') {
		const value = createFilePath({ node, getNode, trailingSlash: false });
		createNodeField({
			name: `slug`,
			node,
			value: trim(value, '/')
		});
	}
};
