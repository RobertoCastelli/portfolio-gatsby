const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    // Create slug from Node JS basename
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // Create node field --> Assign slug
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const templates = {
    tagTemplate: path.resolve("src/templates/tag-post.js"),
  }
  const response = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        group(field: frontmatter___tags) {
          fieldValue
        }
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const tags = response.data.allMarkdownRemark.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue}`,
      component: templates.tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
