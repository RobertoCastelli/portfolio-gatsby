import React from "react"
import navblogStyle from "./navblog.module.css"
import { Link } from "gatsby"

const Navblog = props => {
  return (
    <div className={navblogStyle.navblogContainer}>
      <Link to="/posts">
        <button
          style={{ display: props.display }}
          className={navblogStyle.navblogPost}
        >
          back
        </button>
      </Link>
      <Link to="/tags">
        <button className={navblogStyle.navblogTags}>tags</button>
      </Link>
    </div>
  )
}

export default Navblog
