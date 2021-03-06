import React from "react"
import Layout from "../components/Layout"
import Navblog from "../components/Navblog"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  return (
    <div>
      <Layout>
        <Navblog />
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </Layout>
    </div>
  )
}

export default BlogPost

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`
