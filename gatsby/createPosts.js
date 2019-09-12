const path = require(`path`)

/**
 * Create Posts
 */
module.exports = async ({ actions, graphql, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            fileAbsolutePath
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Filter posts only
  const postsRegex = RegExp(/(blog)\/.*\.md$/)
  const posts = result.data.allMdx.edges.filter(({ node }) =>
    postsRegex.test(node.fileAbsolutePath)
  )

  // We'll call `createPage` for each result
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.jsx`),
      // We can use the values in this context in
      context: { id: node.id, layout: 'post' }
    })
  })
}
