const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'Niels Bik',
		siteUrl: 'https://nielsbik.nl'
	},
	plugins: [
		'gatsby-plugin-preact',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-transformer-remark',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-catch-links',
		'gatsby-plugin-lodash',
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: path.resolve(__dirname, 'src/cms/cms.js')
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: path.resolve(__dirname, 'src/pages/blog'),
				name: 'blog'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: path.resolve(__dirname, 'src/pages/projects'),
				name: 'projects'
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-56950266-3',
				head: false,
				anonymize: true,
				respectDNT: true
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Niels Bik',
				short_name: 'Niels Bik',
				start_url: '/',
				background_color: '#ffffff',
				theme_color: '#ffffff',
				display: 'standalone'/*,
				icon: 'src/icon.png'*/
			}
		}
	]
};
