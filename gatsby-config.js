module.exports = {
  siteMetadata: {
    title: `Roberto Castelli`,
    description: `Project Manager & Web Developer`,
    author: `Roberto Castelli`,
    siteURL: `www.robertocastelli.dev`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
  ],
}
