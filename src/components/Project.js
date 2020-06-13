import React from "react"
import projectStyle from "./project.module.css"

const Project = props => {
  return (
    <div className={projectStyle.projectCard}>
      <h4>{props.title}</h4>
      <div className={projectStyle.projectContext}>
        <p>{props.tech}</p>
      </div>
    </div>
  )
}

export default Project
