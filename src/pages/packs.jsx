/** @jsx jsx */
import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Styled, Flex, Box, jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

import PackOpen from '../components/pack/packOpen'
import PackInit from '../components/pack/packInit'
import PackClosed from '../components/pack/packClosed'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { breakpoints } from '../gatsby-plugin-theme-ui'

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
  const [selected, setPack] = useState(null)

  function getWidth(numero) {
    switch (selected) {
      case null:
        return `${100 / count}%`
      case numero:
        return `100%`
      default:
        return `92px`
    }
  }

  return (
    <Layout>
      <SEO title="Pack" />
      <MediaQuery minWidth={breakpoints[1]}>
        {matches => (
          <Flex
            sx={{
              flexDirection: matches ? 'row' : ' column',
              minHeight: '100vh'
            }}
          >
            {packs.map(({ node }) => {
              const { slug } = node.fields
              const { numero, bgColor } = node.frontmatter
              return (
                <Flex
                  key={slug}
                  onClick={() => setPack(numero)}
                  sx={{
                    width: matches ? getWidth(numero) : `100%`,
                    height: !matches ? getWidth(numero) : null,
                    color: 'white',
                    px: 4,
                    flex: selected === numero || selected === null ? 1 : null,
                    backgroundColor: bgColor
                  }}
                >
                  {selected === null && (
                    <PackInit matches={matches} sx={{ flex: 1 }} {...node} />
                  )}

                  {selected === numero && (
                    <PackOpen matches={matches} sx={{ flex: 1 }} {...node} />
                  )}

                  {selected !== numero && selected !== null && (
                    <PackClosed
                      matches={matches}
                      sx={matches ? { width: `92px` } : { height: `92px` }}
                      {...node}
                    />
                  )}
                </Flex>
              )
            })}
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
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              excerpt: PropTypes.string.isRequired,
              color: PropTypes.string.isRequired,
              bgColor: PropTypes.string.isRequired,
              numero: PropTypes.number.isRequired
            }).isRequired,
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired
            }).isRequired,
            body: PropTypes.string.isRequired
          }).isRequired
        })
      ).isRequired
    }).isRequired
  }).isRequired
}

export default PacksPage
