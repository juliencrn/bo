/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Text as BaseText } from 'rebass'

const Text = ({ text, uppercase, line, ...rest }) => {
  const style = {
    m: 0,
    textTransform: uppercase ? 'uppercase' : 'none'
  }

  return (
    <BaseText as={line && `del`} sx={style} {...rest}>
      {text}
    </BaseText>
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
