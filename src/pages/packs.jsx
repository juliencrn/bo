/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react'
import { graphql } from 'gatsby'
import { Flex, jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import useMeasure from 'use-measure'

import nodeTypes from '../components/pack/packPropsTypes'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { breakpoints } from '../gatsby-plugin-theme-ui'
import Pack, { INIT, SELECTED, UNSELECT } from '../components/pack'

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
  // Data
  const packs = data.allMdx.edges
  const count = packs.length
  const nodeRef = useRef()
  const measure = useMeasure(nodeRef)

  // Utilities
  const pxToNumber = n => Number(n.replace('px', ''))
  const isDesktop = () => measure.width > pxToNumber(breakpoints[1])

  // State
  const [selected, setPack] = useState(null)
  const [matches, setMatches] = useState(isDesktop)
  const [lastMeasure, setMeasure] = useState(measure)

  // On window resize
  if (lastMeasure !== measure) {
    setMeasure(measure)
    if (isDesktop() !== matches) {
      setMatches(isDesktop())
    }
    setPack(null)
  }

  function getState(numero) {
    switch (selected) {
      case null:
        return INIT
      case numero:
        return SELECTED
      default:
        return UNSELECT
    }
  }

  return (
    <Layout>
      <SEO title="Pack" />
      <Flex
        ref={nodeRef}
        sx={{
          flexDirection: matches ? 'row' : ' column',
          height: '100vh',
          width: '100vw'
        }}
      >
        {packs.map(({ node }) => (
          <Pack
            key={node.fields.slug}
            matches={matches}
            click={n => setPack(n)}
            count={count}
            measure={measure}
            state={getState(node.frontmatter.numero)}
            {...node}
          />
        ))}
      </Flex>
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
