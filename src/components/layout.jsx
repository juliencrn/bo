import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, Styled } from 'theme-ui'

import theme from '../gatsby-plugin-theme-ui'
import components from '../gatsby-plugin-theme-ui/components'

import 'normalize.css'
import '../utils/font-face.css'

if (process.env.NODE_ENV === 'development') {
  import('tachyons-debug')
}

const Layout = ({ children }) => (
  <ThemeProvider theme={theme} compoments={components}>
    <Styled.root>
      <main>{children}</main>
    </Styled.root>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
