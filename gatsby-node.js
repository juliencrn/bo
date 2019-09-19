const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // We only want to operate on `Mdx` nodes.
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({ name: 'slug', node, value: `${value}` })
  }
}

const createMembers = require('./gatsby/createMembers')
const createPacks = require('./gatsby/createPacks')

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createMembers({ graphql, actions, reporter })
  await createPacks({ graphql, actions, reporter })
}
