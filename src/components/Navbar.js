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
    <nav className={navbarStyle.navContainer}>
      <ul className={navbarStyle.navList}>
        <Link to="/">
          <Img
            className={navbarStyle.navBrand}
            fluid={data.file.childImageSharp.fluid}
            alt="logo"
          ></Img>
        </Link>
        <Link
          className={navbarStyle.navItem}
          activeClassName={navbarStyle.activeNavItem}
          to="/"
        >
          <li>about me</li>
        </Link>
        <Link
          className={navbarStyle.navItem}
          activeClassName={navbarStyle.activeNavItem}
          to="/projects"
        >
          <li>projects</li>
        </Link>
        <Link
          className={navbarStyle.navItem}
          activeClassName={navbarStyle.activeNavItem}
          to="/blog"
        >
          <li>blog</li>
        </Link>
      </ul>

      <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.description}</p>
    </nav>
  )
}

export default Navbar
