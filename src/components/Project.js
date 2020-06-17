import React from "react"
import projectStyle from "./project.module.css"
import Img from "gatsby-image"

const Project = props => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div className={projectStyle.projectCard}>
        <div className={projectStyle.projectContext}>
          <div className={projectStyle.projectTitle}>{props.title}</div>
        </div>
        <div className={projectStyle.projectImage}>
          <Img fluid={props.fluid} alt="project-img" />
        </div>
        <div className={projectStyle.projectTag}>{props.tech}</div>
      </div>
    </a>
  )
}

export default Project
