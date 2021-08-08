/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 90,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Language Identifier NLP',
        short_name: 'LanguageIdentifierNLP',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/favicon-nlp.png',
      },
    },
  ],
  siteMetadata: {
    title: 'Language Indentifier NLP',
    description: "Identify every language using a custom NLP N-GRAM sequencing.",
    keywords: ["NLP", "language identifier", "what language is this text", "what language", "find this language", "identify language"]
  }
}
