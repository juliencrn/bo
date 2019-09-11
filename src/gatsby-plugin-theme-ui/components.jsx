/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

// Customize MDX only components from HTML tag
export default {
  // h1: props => (
  //   <h1 {...props}>
  //     <a href={`#${props.id}`}>{props.children}</a>
  //   </h1>
  // )
  h3: ({ children }) => (
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
}
