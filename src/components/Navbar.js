import React from "react"
import navbarStyle from "./navbar.module.css"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
          description
        }
      }
      file(relativePath: { eq: "logo.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={navbarStyle.navContainer}>
      <ul className={navbarStyle.navList}>
        <Link to="/">
          <Img
            className={navbarStyle.navBrand}
            fluid={data.file.childImageSharp.fluid}
            alt="logo"
          ></Img>
        </Link>
        <Link to="/">
          <li className={navbarStyle.navItem}>home</li>
        </Link>
        <Link to="/projects">
          <li className={navbarStyle.navItem}>projects</li>
        </Link>
        <Link to="/blog">
          <li className={navbarStyle.navItem}>blog</li>
        </Link>
      </ul>

      <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.description}</p>
    </div>
  )
}

export default Navbar
