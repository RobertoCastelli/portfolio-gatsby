module.exports = {
  siteMetadata: {
    title: `Roberto Castelli`,
    description: `Hi, my name is Roberto and I'm a Project Manager. Since I was a youngster I had a passion for programming languages. Recently I decided to bring into fruition my avid interest in this field to enhance my career, putting every possible effort to achieve this goal and pursue this path`,
    author: `Roberto Castelli`,
    siteURL: `robertocastelli.dev`,
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 300,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
