const { createFilePath } = require('gatsby-source-filesystem');
const { trim } = require('lodash');

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
	const types = ['AanbodJson', 'MarkdownRemark'];
	const { createNodeField } = boundActionCreators;

	if (types.includes(node.internal.type)) {
		const value = createFilePath({ node, getNode, trailingSlash: false });
		createNodeField({
			name: `slug`,
			node,
			value: trim(value, '/')
		});
	}
};
