/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

const Section = props => {
  const { bg, color } = props
  return (
    <div
      sx={{
        backgroundColor: bg,
        color,
        minHeight: '100vh',
        height: '100%',
        width: '100%',
        py: [5, 5, 6]
      }}
      {...props}
    />
  )
}

Section.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string
}

Section.defaultProps = {
  bg: 'blue',
  color: 'white'
}

export default Section
