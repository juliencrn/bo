/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Box } from 'rebass'

const Section = props => {
  const { bg, color, fullScreen, padding } = props
  return (
    <Box
      sx={{
        backgroundColor: bg,
        color,
        minHeight: fullScreen ? '100vh' : 'inherit',
        height: 'auto',
        width: '100%',
        py: padding ? [5, 5, 6] : 'inherit'
      }}
      {...props}
    />
  )
}

Section.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  fullScreen: PropTypes.bool,
  padding: PropTypes.bool
}

Section.defaultProps = {
  bg: 'background',
  color: 'font',
  fullScreen: false,
  padding: true
}

export default Section
