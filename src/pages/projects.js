import React from "react"
import Layout from "../components/Layout"
import Project from "../components/Project"
import projectStyle from "../components/project.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Head from "../components/Head"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson(sort: { order: ASC, fields: tech }) {
        totalCount
        edges {
          node {
            id
            tech
            title
            link
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
      <Head title={"Projects"} />
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
              link={node.link}
              fluid={node.src.childImageSharp.fluid}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Projects
