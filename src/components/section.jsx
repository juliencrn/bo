/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

const Section = props => {
  const { bg, color, fullScreen } = props
  return (
    <div
      sx={{
        backgroundColor: bg,
        color,
        minHeight: fullScreen ? '100vh' : 'inherit',
        height: 'auto',
        width: '100%',
        py: [5, 5, 6]
      }}
      {...props}
    />
  )
}

Section.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  fullScreen: PropTypes.bool
}

Section.defaultProps = {
  bg: 'background',
  color: 'font',
  fullScreen: false
}

export default Section
