import React from "react"
import navblogStyle from "./navblog.module.css"
import { Link } from "gatsby"

const Navblog = () => {
  return (
    <div className={navblogStyle.navblogContainer}>
      <Link to="/posts">
        <button className={navblogStyle.navblogPost}>posts</button>
      </Link>
      <Link to="/tags">
        <button className={navblogStyle.navblogTags}>tags</button>
      </Link>
    </div>
  )
}

export default Navblog
