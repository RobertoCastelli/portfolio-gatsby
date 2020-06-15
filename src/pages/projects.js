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
            tech
            title
            src {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1># PROJECTS</h1>
      <p className={projectStyle.projectTotalCount}>
        total projects: n° {data.allDataJson.totalCount}
      </p>
      <div className={projectStyle.projectContainer}>
        {data.allDataJson.edges.map(({ node }) => {
          return (
            <Project
              key={node.id}
              title={node.title}
              tech={node.tech}
              fluid={node.src.childImageSharp.fluid}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Projects
