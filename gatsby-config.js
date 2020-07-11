module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        name: `Bull Pizza`,
        short_name: `Bull Pizza`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a41833`,
        display: `standalone`,
        icon: `src/images/bullpizza-logo-large-png.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `ac31a58b4dabdd8f9e386a126f0c39`,
        preview: false,
        disableLiveReload: false,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
      linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },

  ],
}
