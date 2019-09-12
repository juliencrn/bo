/** @jsx jsx */
import React from 'react'
import { graphql } from 'gatsby'
import { Container, jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AvatarList from '../components/members/avatar/avatarList'
import BigIntro from '../components/members/bigIntro'

const MembersPage = ({ data }) => {
  // Merge images into members list
  const members = data.members.edges.map(({ node }) => {
    const image = data.images.nodes.filter(({ absolutePath }) => {
      const stringToArr = absolutePath.split('/')
      const rest = stringToArr.splice(stringToArr.length - 2, 2)
      const filename = `/${rest.join('/')}`
      return filename === node.frontmatter.avatar
    })

    return {
      ...node,
      frontmatter: {
        ...node.frontmatter,
        avatar: image[0]
      }
    }
  })

  return (
    <Layout>
      <SEO title="L'équipe" />
      <div
        sx={{
          backgroundColor: 'blue',
          color: 'white',
          minHeight: '100vh',
          height: '100%',
          width: '100%',
          py: [5, 5, 6]
        }}
      >
        <Container>
           <BigIntro />
          <AvatarList members={members} />
        </Container>
      </div>
    </Layout>
  )
}

MembersPage.propTypes = {
  data: PropTypes.shape({
    images: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object)
    }),
    members: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object)
    })
  })
}

MembersPage.defaultProps = {
  data: {
    images: {
      nodes: []
    },
    members: {
      edges: []
    }
  }
}

export default MembersPage

export const query = graphql`
  query getMembers {
    members: allMdx(filter: { fields: { slug: { regex: "//members//" } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            avatar
            title
            firstname
            lastname
            mail
            profession
            professionCool
            bgColor
            color
            socialLinks {
              label
              link
            }
            skills {
              label
              link
            }
          }
          body
        }
      }
    }
    images: allFile(filter: { absolutePath: { regex: "//uploads//" } }) {
      nodes {
        absolutePath
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
