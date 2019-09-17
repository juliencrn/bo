/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import { css } from '@emotion/core'
import { Box } from 'rebass'

const buttonReset = css`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  outline: none;
  background: transparent;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;
  text-align: inherit;

  /* Normalize \`line-height\`. Cannot be changed from \`normal\` in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable \`input\` types in iOS */
  -webkit-appearance: none;
`

const ButtonReset = props => (
  <Box
    as="button"
    type="button"
    sx={{ ...buttonReset, cursor: 'pointer' }}
    {...props}
  />
)

export default ButtonReset
