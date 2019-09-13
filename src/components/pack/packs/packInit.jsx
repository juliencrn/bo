/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Box } from 'theme-ui'
import PropTypes from 'prop-types'
import PackTitle from '../packTitle'

const PackInit = ({ frontmatter, matches }) => {
  const { title, color, numero, excerpt } = frontmatter
  return (
    <>
      <PackTitle
        pack={`Pack ${numero}`}
        title={title}
        color={color}
        matches={matches}
      />
      <Box
        sx={{
          width: `100%`,
          position: matches ? 'absolute' : null,
          top: matches ? `50%` : null,
          left: 0
        }}
      >
        <p sx={{ fontSize: [0, 1] }}>{excerpt}</p>
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
  matches: PropTypes.bool.isRequired
}

export default PackInit
