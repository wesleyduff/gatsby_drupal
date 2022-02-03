module.exports = {
  siteMetadata: {
      title: `site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-sitemap",
      {
          resolve: 'gatsby-source-drupal',
          options: {
              baseUrl: 'http://drupal.lgd.lndo.site/',
              apiBase: 'jsonapi', // endpoint of Drupal server
          },
      }
  ]
};