/** @jsx jsx */

// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import { childrenPT } from '../utils/propTypes'

const ComponentH3 = ({ children }) => (
  <h3
    sx={{
      mt: [3, 4],
      mb: 2,
      textTransform: 'uppercase',
      fontSize: [2, 3, 4],
      fontFamily: 'body'
    }}
  >
    {children}
  </h3>
)

ComponentH3.propTypes = {
  children: childrenPT.isRequired
}

// Customize MDX only components from HTML tag
export default {
  // h1: props => (
  //   <h1 {...props}>
  //     <a href={`#${props.id}`}>{props.children}</a>
  //   </h1>
  // )
  h3: ComponentH3
}
