/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Flex, Box } from 'rebass'

import PackTitle from '../packTitle'
import Button from '../../button'

const PackOpen = ({ isXL, frontmatter, body }) => {
  const cols = [4 / 12, 5 / 12, 3 / 12].map(el => `${el * 100}%`)
  const colWidth = index => (isXL ? cols[index - 1] : `100%`)
  const { title, color, numero } = frontmatter
  return (
    <Flex
      sx={{
        flexDirection: isXL ? `row` : `column`,
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
        <PackTitle
          color={color}
          pack={`pack ${numero}`}
          title={title}
          isXL={isXL}
        />
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
        <Button>Bouton</Button>
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
  isXL: PropTypes.bool.isRequired,
  body: PropTypes.string.isRequired
}

export default PackOpen
