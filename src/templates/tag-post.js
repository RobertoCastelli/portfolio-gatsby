import React from "react"
import { graphql, Link } from "gatsby"
import Post from "../components/Post"
import Layout from "../components/Layout"
import postStyle from "../components/post.module.css"

export const data = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date
            tags
            intro
          }
        }
      }
    }
  }
`

const TagPost = ({ data }) => {
  return (
    <Layout>
      <h1># POSTS</h1>
      <ul className={postStyle.postList}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
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
                    <Link to={`/tags/${tag}`}>
                      <li key={i} className={postStyle.tagItem}>
                        {tag}
                      </li>
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

export default TagPost
