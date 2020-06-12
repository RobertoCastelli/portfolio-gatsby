import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import navbarStyle from "./navbar.module.css"

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
    <div className={navbarStyle.navContainer}>
      <ul className={navbarStyle.navList}>
        <Link to="/">
          <li className={navbarStyle.navItem}>home</li>
        </Link>
        <Link to="/blog">
          <li className={navbarStyle.navItem}>blog</li>
        </Link>
        <Link to="/featuring">
          <li className={navbarStyle.navItem}>featuring</li>
        </Link>
        <Link to="/projects">
          <li className={navbarStyle.navItem}>projects</li>
        </Link>
      </ul>
      <img
        className={navbarStyle.navBrand}
        src="https://via.placeholder.com/100"
        alt="logo"
      ></img>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.description}</p>
    </div>
  )
}

export default Navbar
