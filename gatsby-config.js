module.exports = {
  siteMetadata: {
    title: `HackForms`,
    description: `HackSlash's very own forms management system!`,
    author: `@hackslash-nitp`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hackforms`,
        short_name: `hackforms`,
        start_url: `/`,
        background_color: `#013254`,
        theme_color: `#013254`,
        display: `minimal-ui`,
        icon: `src/images/club-logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
