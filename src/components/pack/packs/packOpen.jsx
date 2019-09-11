/** @jsx jsx */
import React from 'react'
import { Styled, jsx, Flex, Box } from 'theme-ui'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import PackTitle from '../packTitle'

const PackOpen = ({ matches, frontmatter, body }) => {
  const cols = [4 / 12, 5 / 12, 3 / 12].map(el => `${el * 100}%`)
  const colWidth = index => (matches ? cols[index - 1] : `100%`)
  console.log({ cols })
  const { title, color, numero } = frontmatter
  return (
    <Flex
      sx={{
        flexDirection: matches ? `row` : `column`,
        mx: -3
      }}
    >
      <Box
        sx={{
          p: 3,
          pt: [3, 6],
          textAlign: 'left',
          width: colWidth(1)
        }}
      >
        <PackTitle color={color} pack={`pack ${numero}`} title={title} />
      </Box>
      <Box sx={{ p: 3, width: colWidth(2) }}>
        <MDXRenderer>{body}</MDXRenderer>
      </Box>
      <Flex
        sx={{ p: 3, pb: [3, 6] }}
        style={{
          width: colWidth(3),
          alignSelf: 'flex-end',
          justifyContent: 'center'
        }}
      >
        <button>Bouton</button>
      </Flex>
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
