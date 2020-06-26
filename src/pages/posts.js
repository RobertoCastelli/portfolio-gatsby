import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Post from "../components/Post"
import Layout from "../components/Layout"
import postStyle from "../components/post.module.css"
import Navblog from "../components/Navblog"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
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
      <Navblog display={"none"} />
      <ul className={postStyle.postList}>
        {query.map(({ node }) => {
          return (
            <li key={node.id} className={postStyle.postItem}>
              <Link to={`/posts/${node.fields.slug}`}>
                <Post
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  intro={node.frontmatter.intro}
                  timeToRead={node.timeToRead}
                />
              </Link>
              <ul className={postStyle.tagList}>
                {node.frontmatter.tags.map((tag, id) => {
                  return (
                    <Link key={id} to={`/tags/${tag}`}>
                      <li className={postStyle.tagItem}>{tag}</li>
                    </Link>
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
