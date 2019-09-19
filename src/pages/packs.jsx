/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react'
import { graphql } from 'gatsby'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import useMeasure from 'use-measure'
import { Flex } from 'rebass'
import MediaQuery from 'react-responsive'

import nodeTypes from '../components/pack/packPropsTypes'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { breakpoints } from '../gatsby-plugin-theme-ui'
import Pack from '../components/pack'
import { getState } from '../components/pack/packUtils'

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

const PacksPage = ({ data }) => {
  const packs = data.allMdx.edges
  const count = packs.length
  const nodeRef = useRef()
  const measure = useMeasure(nodeRef)
  const [selected, setPack] = useState(null)

  return (
    <Layout>
      <SEO title="Pack" />
      <MediaQuery minWidth={breakpoints[1]}>
        {isXL => (
          <Flex
            ref={nodeRef}
            sx={{
              flexDirection: isXL ? 'row' : ' column',
              height: '100vh',
              width: '100vw'
            }}
          >
            {packs.map(({ node }) => (
              <Pack
                key={node.fields.slug}
                matches={isXL}
                click={n => setPack(n)}
                count={count}
                measure={measure}
                state={getState(node.frontmatter.numero, selected)}
                {...node}
              />
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
        PropTypes.shape({ node: PropTypes.shape(nodeTypes) })
      ).isRequired
    }).isRequired
  }).isRequired
}

export default PacksPage
