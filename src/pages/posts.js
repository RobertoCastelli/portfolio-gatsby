import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Post from "../components/Post"
import Layout from "../components/Layout"
import postStyle from "../components/post.module.css"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              intro
              title
            }
            id
            timeToRead
          }
        }
      }
    }
  `)

  const query = data.allMarkdownRemark.edges
  return (
    <Layout>
      <h1># POSTS</h1>
      <ul className={postStyle.postList}>
        {query.map(({ node }) => {
          return (
            <li className={postStyle.postItem}>
              <Post
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                intro={node.frontmatter.intro}
                timeToRead={node.timeToRead}
              />
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Posts
