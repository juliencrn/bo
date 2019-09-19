/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { graphql } from 'gatsby'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Flex } from 'rebass'
import MediaQuery from 'react-responsive'
import uniqid from 'uniqid'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { breakpoints } from '../gatsby-plugin-theme-ui'
import { packPT } from '../utils/propTypes'
import PackInit from '../components/pack/packInit'

export default function PacksPage({ data }) {
  const packs = data.allMdx.edges
  return (
    <Layout>
      <SEO title="Pack" />
      <MediaQuery minWidth={breakpoints[1]}>
        {isXL => (
          <Flex
            sx={{
              flexDirection: isXL ? 'row' : ' column',
              height: '100vh',
              width: '100%'
            }}
          >
            {packs.map(({ node }) => (
              <PackInit key={uniqid(node.fields.slug)} isXL={isXL} {...node} />
            ))}
          </Flex>
        )}
      </MediaQuery>
    </Layout>
  )
}

PacksPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({ node: PropTypes.shape(packPT) })
      ).isRequired
    }).isRequired
  }).isRequired
}

export const query = graphql`
  query getPacks {
    allMdx(
      filter: { fields: { slug: { regex: "//packs//" } } }
      sort: { order: ASC, fields: frontmatter___numero }
    ) {
      edges {
        node {
          frontmatter {
            title
            excerpt
            color
            bgColor
            numero
          }
          fields {
            slug
          }
          body
        }
      }
    }
  }
`
