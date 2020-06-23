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
          fields {
            slug
          }
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

const TagPost = ({ data, location }) => {
  // pop the URL target
  let urls = location.pathname
  urls = urls.split("/").pop()

  return (
    <Layout>
      <h1>
        # POSTS <i>({urls})</i>
      </h1>
      <ul className={postStyle.postList}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
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
