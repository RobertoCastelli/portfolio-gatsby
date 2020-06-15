import React from "react"
import projectStyle from "./project.module.css"
import Img from "gatsby-image"

const Project = props => {
  return (
    <div className={projectStyle.projectCard}>
      <div>
        <Img
          className={projectStyle.projectImage}
          fluid={props.fluid}
          alt="project-img"
        />
      </div>
      <div className={projectStyle.projectContext}>
        <dv className={projectStyle.projectTitle}>{props.title}</dv>
        <div className={projectStyle.projectTag}>{props.tech}</div>
      </div>
    </div>
  )
}

export default Project
