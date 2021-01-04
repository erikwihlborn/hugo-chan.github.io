module.exports = {
  siteMetadata: {
    title: "Hugo Chan",
    description: "Hugo Chan's website",
    author: "Hugo Chan",
    keywords: ["Hugo Chan", "UChicago", "Hong Kong", "HK"],
    viewport: "width=device-width, initial-scale=1.0"
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`
      }
    }
  ],
}