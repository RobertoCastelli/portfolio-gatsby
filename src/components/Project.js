import React from "react"
import projectStyle from "./project.module.css"

const Project = props => {
  return (
    <div className={projectStyle.projectCard}>
      <img
        className={projectStyle.projectImage}
        src={props.src}
        alt="project-img"
      />
      <div className={projectStyle.projectContext}>
        <h4>{props.title}</h4>
        <p>{props.tech}</p>
      </div>
    </div>
  )
}

export default Project
