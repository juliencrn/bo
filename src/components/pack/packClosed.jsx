/** @jsx jsx */
import React from 'react'
import { Styled, jsx, Flex } from 'theme-ui'
import PropTypes from 'prop-types'

const PackClosed = ({ frontmatter }) => {
  const { title, color } = frontmatter
  return (
    <Flex
      sx={{
        width: `100%`,
        justifyContent: `center`,
        alignItems: `center`
      }}
    >
      <Styled.h1 as="h2" sx={{ color, m: 0, fontSize: [6] }}>
        {title}
      </Styled.h1>
    </Flex>
  )
}

PackClosed.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired
}

export default PackClosed
