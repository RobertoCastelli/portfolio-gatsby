import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.description}</p>
      <ul>
        <Link to="/">
          <li>home</li>
        </Link>
        <Link to="/blog">
          <li>blog</li>
        </Link>
        <Link to="/featuring">
          <li>featuring</li>
        </Link>
        <Link to="/projects">
          <li>projects</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
