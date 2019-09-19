/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Box, Text } from 'rebass'

import PackTitle from '../packTitle'

const PackInit = ({ frontmatter, isXL }) => {
  const { title, color, numero, excerpt } = frontmatter
  return (
    <>
      <PackTitle
        pack={`Pack ${numero}`}
        title={title}
        color={color}
        isXL={isXL}
      />
      <Box
        sx={{
          width: `100%`,
          position: isXL ? 'absolute' : null,
          top: isXL ? `50%` : null,
          left: 0
        }}
      >
        <Text sx={{ fontSize: [0, 1] }}>{excerpt}</Text>
      </Box>
    </>
  )
}

PackInit.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  isXL: PropTypes.bool.isRequired
}

export default PackInit
