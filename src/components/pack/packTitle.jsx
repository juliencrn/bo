/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Heading, Text } from 'rebass'

const PackTitle = ({ title, pack, color, vertical, isXL }) => {
  const communStyle = {
    m: 0,
    lineHeight: 1,
    color
  }

  if (vertical) {
    const verticalStyle = {
      transform: isXL ? 'rotate(180deg)' : null,
      writingMode: isXL ? 'vertical-lr' : null,
      minWidth: `100%`,
      minHeight: `100%`,
      textAlign: 'center'
    }
    return (
      <Heading
        sx={{
          ...communStyle,
          ...verticalStyle,
          fontSize: [4, 5, 6]
        }}
      >
        {title}
      </Heading>
    )
  }

  return (
    <>
      <Text
        sx={{ ...communStyle, textTransform: `uppercase`, fontSize: [2, 3, 4] }}
      >
        {pack}
      </Text>
      <Heading
        sx={{
          ...communStyle,
          fontSize: [4, 5, 6]
        }}
      >
        {title}
      </Heading>
    </>
  )
}

PackTitle.propTypes = {
  title: PropTypes.string.isRequired,
  pack: PropTypes.string,
  color: PropTypes.string.isRequired,
  vertical: PropTypes.bool,
  isXL: PropTypes.bool.isRequired
}

PackTitle.defaultProps = {
  vertical: false,
  pack: ''
}

export default PackTitle
