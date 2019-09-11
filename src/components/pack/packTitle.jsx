/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

const PackTitle = ({ title, pack, color, vertical, matches }) => {
  const style = {
    m: 0,
    lineHeight: 1,
    color
  }
  const verticalStyle = vertical
    ? {
        transform: matches ? 'rotate(180deg)' : null,
        writingMode: matches ? 'vertical-lr' : null,
        minWidth: `100%`,
        minHeight: `100%`,
        textAlign: 'center'
      }
    : {}
  return (
    <>
      {!vertical && (
        <p sx={{ ...style, textTransform: `uppercase`, fontSize: [2, 3, 4] }}>
          {pack}
        </p>
      )}
      <h2
        sx={{
          ...style,
          ...verticalStyle,
          fontSize: [4, 5, 6],
          fontFamily: 'heading'
        }}
      >
        {title}
      </h2>
    </>
  )
}

PackTitle.propTypes = {
  title: PropTypes.string.isRequired,
  pack: PropTypes.string,
  color: PropTypes.string.isRequired,
  vertical: PropTypes.bool,
  matches: PropTypes.bool.isRequired
}

PackTitle.defaultProps = {
  vertical: false,
  pack: ''
}

export default PackTitle
