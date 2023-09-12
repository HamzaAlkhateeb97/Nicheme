/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const { languages, defaultLanguage } = require('./languages');
module.exports = {
  siteMetadata: {
    title: `Niche Marketing`,
    description: `Kick off your next, great project with us.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://gracious-mclaren.65-108-72-55.plesk.page/graphql`,
        // The base URL of your WordPress site
        baseUrl: `https://gracious-mclaren.65-108-72-55.plesk.page/`,
        // The protocol of your WordPress site (http or https)
        protocol: `https`,
        // Indicates if the site is hosted on WordPress.com
        hostingWPCOM: false,
        // The WordPress API route
        apiRoute: `wp-json`,
        // The routes of the WordPress site to fetch data from
        includedRoutes: [
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/categories",
          "**/taxonomies",
          "**/users",
        ],
        useACF: true,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Relates to "options.failOn" in https://sharp.pixelplumbing.com/api-constructor#parameters
        failOn: `warning`,
      },
    },
    `gatsby-plugin-sass`,
 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        languages,
        defaultLanguage,
        i18nextOptions: {
          // debug: true,
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: 'translation',
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          }
        },
      },
    },
  ],
}
