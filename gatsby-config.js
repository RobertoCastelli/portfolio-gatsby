module.exports = {
  siteMetadata: {
    title: `Roberto Castelli's portfolio`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
