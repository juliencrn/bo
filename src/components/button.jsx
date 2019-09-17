/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import { Button as ButtonBase } from 'rebass'

const Button = props => (
  <ButtonBase
    {...props}
    sx={{
      textTransform: 'uppercase',
      borderRadius: 0,
      py: 4,
      px: 4,
      fontSize: 3
    }}
  />
)

export default Button
