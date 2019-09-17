/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import { Box } from 'rebass'

const Container = props => (
  <Box
    sx={{
      maxWidth: 'medium',
      width: ['90%'],
      mx: 'auto',
      boxSizing: 'border-box'
    }}
    {...props}
  />
)

export default Container
