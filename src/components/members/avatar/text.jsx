/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import { lineHeights } from '../../../gatsby-plugin-theme-ui'

const Text = ({ text, uppercase, line, ...rest }) => {
  const style = {
    m: 0,
    textTransform: uppercase ? 'uppercase' : 'none',
    lineHeight: lineHeights.body,
    fontSize: [1]
  }

  if (line) {
    return (
      <del sx={style} {...rest}>
        {text}
      </del>
    )
  }

  return (
    <p sx={style} {...rest}>
      {text}
    </p>
  )
}

Text.propTypes = {
  text: PropTypes.string,
  uppercase: PropTypes.bool,
  line: PropTypes.bool
}

Text.defaultProps = {
  text: '',
  uppercase: false,
  line: false
}

export default Text
