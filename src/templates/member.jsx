/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { jsx } from 'theme-ui'

import Layout from '../components/layout'
import MemberSingle from '../sections/member.single'
import MemberArrow from '../components/members/arrow'

export default function PostTemplate({ data, pageContext }) {
  // Get the current post from posts list
  const member = data.allMdx.edges.filter(
    ({ node }) => node.id === pageContext.id
  )[0]

  const { previous, next, node } = member
  return (
    <Layout>
      <div sx={{ position: 'relative' }} />
      {previous && <MemberArrow slug={previous.fields.slug} />}
      <MemberSingle {...node} />
      {next && <MemberArrow slug={next.fields.slug} next />}
    </Layout>
  )
}

PostTemplate.propTypes = {
  pageContext: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired
          }),
          next: PropTypes.object,
          previous: PropTypes.object
        })
      )
    })
  })
}

PostTemplate.defaultProps = {
  data: {
    allMdx: {
      edges: [
        {
          node: {},
          next: null,
          previous: null
        }
      ]
    }
  }
}

export const pageQuery = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "//members//" } }) {
      edges {
        previous {
          id
          fields {
            slug
          }
        }
        next {
          id
          fields {
            slug
          }
        }
        node {
          id
          body
          frontmatter {
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
        }
      }
    }
  }
`
