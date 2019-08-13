/** @jsx jsx */
import React from 'react'
import { Styled, jsx, Flex, Box } from 'theme-ui'
import PropTypes from 'prop-types'

const PackInit = ({ frontmatter }) => {
  const { title, color, numero, excerpt } = frontmatter
  return (
    <Flex
      sx={{
        width: `100%`,
        justifyContent: `center`,
        alignItems: `center`,
        flexDirection: `column`
      }}
    >
      <Box sx={{ textAlign: 'left', width: `100%` }}>
        <p sx={{ textTransform: `uppercase`, color, my: 0 }}>
          {`pack ${numero}`}
        </p>
        <Styled.h1 as="h2" sx={{ color, m: 0, fontSize: [6] }}>
          {title}
        </Styled.h1>
      </Box>
      <Box sx={{ width: `100%` }}>
        <p>{excerpt}</p>
      </Box>
    </Flex>
  )
}

PackInit.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired
}

export default PackInit
