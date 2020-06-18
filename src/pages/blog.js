import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import blogStyle from "./blog.module.css"
import Img from "gatsby-image"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "impostor.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <h1># DIARY OF AN IMPOSTOR</h1>
        <a
          href="https://to-myblog.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Img
            className={blogStyle.blogImage}
            fluid={data.file.childImageSharp.fluid}
            alt="blog-img"
          />
        </a>
        <div className="blog-content">
          <i>
            "Impostor syndrome is a psychological pattern in which an individual
            doubts their accomplishments despite external evidence of their
            competence"
          </i>
          <p>
            Since I have a strong passion for programming languages, I recently
            asked myself: why not bring into fruition my avid interest in this
            field to enhance my career?
          </p>
          <p>
            I began putting every possible effort to achieve this goal (and
            still continuing to do so). This blog is a story in continuous
            evolution to keep track of my progress, paths, errors, achievements
            in the hopes of helping other people to share this adventure.
          </p>
          <p>
            Special thanks to Daniele Di Lucido & Jaga Santagostino, my mentor.
          </p>
          <p>
            <i>Roberto</i>
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default Blog
