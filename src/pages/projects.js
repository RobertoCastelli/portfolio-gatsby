import React from "react"
import Layout from "../components/Layout"
import Project from "../components/Project"
import projectStyle from "../components/project.module.css"
import { graphql, useStaticQuery } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        totalCount
        edges {
          node {
            id
            img
            tech
            title
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1># PROJECTS</h1>
      <p>{data.allDataJson.totalCount}</p>
      <div className={projectStyle.projectContainer}>
        {data.allDataJson.edges.map(({ node }) => {
          return (
            <Project
              key={node.id}
              title={node.title}
              tech={node.tech}
              src={node.img}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Projects
