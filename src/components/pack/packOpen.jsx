/** @jsx jsx */
import React from 'react'
import { Styled, jsx, Flex, Box } from 'theme-ui'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const PackOpen = ({ matches, frontmatter, body }) => {
  const { title, color, numero } = frontmatter
  return (
    <Flex
      sx={{
        width: `100%`,
        justifyContent: `center`,
        alignItems: `center`,
        flexDirection: matches ? `row` : `column`
      }}
    >
      <Box sx={{ textAlign: 'left', width: !matches ? `100%` : `30%` }}>
        <p sx={{ textTransform: `uppercase`, color, my: 0 }}>
          {`pack ${numero}`}
        </p>
        <Styled.h1 as="h2" sx={{ color, m: 0, fontSize: [6] }}>
          {title}
        </Styled.h1>
      </Box>
      <Box sx={{ width: !matches ? `100%` : `50%` }}>
        <MDXRenderer>{body}</MDXRenderer>
      </Box>
      <Box sx={{ width: !matches ? `100%` : `20%` }}>
        <button>Bouton</button>
      </Box>
    </Flex>
  )
}

PackOpen.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  matches: PropTypes.bool.isRequired,
  body: PropTypes.string.isRequired
}

export default PackOpen
