const config = require('./config');

module.exports = {
	plugins: [
		{
			resolve: 'gatsby-theme-academic',
			options: {
				contentPath: 'content',
				googleAnalyticTrackingId: config.googleAnalyticTrackingId,
				defaultLanguage: 'en',
				pages: config.pages,
				tagColors: config.tagColors,
				author: config.author,
				icon: './static/favicon.png',
			},
		},
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				remarkPlugins: [require("remark-math")],
			},
		},
	],
	siteMetadata: config,
	pathPrefix: config.pathPrefix,
};