import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        title={`${title} | ${data.site.siteMetadata.title}`}
        defer={false}
      >
        <meta name="author" content={data.site.siteMetadata.author} />
        <meta name="image" property="og:image" content="/dune.jpg"></meta>
        <meta
          name="description"
          property="og:description"
          content={data.site.siteMetadata.description}
        />
      </Helmet>
    </>
  )
}

export default Head
