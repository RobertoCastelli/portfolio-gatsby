import React from "react"
import Layout from "../components/Layout"
import Project from "../components/Project"
import projectStyle from "../components/project.module.css"
import { graphql, useStaticQuery } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        edges {
          node {
            id
            title
            tech
            link
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1># PROJECTS</h1>
      <div className={projectStyle.projectContainer}>
        {data.allDataJson.edges.map(({ node }) => {
          return <Project title={node.title} tech={node.tech} />
        })}
      </div>
    </Layout>
  )
}

export default Projects
