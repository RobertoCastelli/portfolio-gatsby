import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Post from "../components/Post"
import Layout from "../components/Layout"
import postStyle from "../components/post.module.css"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              date
              intro
              title
              tags
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
            <li key={node.id} className={postStyle.postItem}>
              <Post
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                intro={node.frontmatter.intro}
                timeToRead={node.timeToRead}
              />
              <ul className={postStyle.tagList}>
                {node.frontmatter.tags.map((tag, i) => {
                  return (
                    <li key={i} className={postStyle.tagItem}>
                      {tag}
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Posts
