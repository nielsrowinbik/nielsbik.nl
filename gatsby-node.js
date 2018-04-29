const { createFilePath } = require('gatsby-source-filesystem');
const { trim } = require('lodash');

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
