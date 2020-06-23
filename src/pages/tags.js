import React from "react"
import Layout from "../components/Layout"
import tagsStyle from "./tags.module.css"
import Navblog from "../components/Navblog"
import { graphql, useStaticQuery, Link } from "gatsby"

const Tags = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          totalCount
          fieldValue
        }
      }
    }
  `)

  const query = data.allMarkdownRemark.group
  return (
    <Layout>
      <h1># TAGS</h1>
      <Navblog />
      <div className={tagsStyle.tagsContainer}>
        <ul className={tagsStyle.tagsList}>
          {query.map(tag => {
            return (
              <Link to={`/tags/${tag.fieldValue}`}>
                <li className={tagsStyle.tagsItem}>
                  {tag.fieldValue}
                  <span className={tagsStyle.tagsBadge}>{tag.totalCount}</span>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}
export default Tags
