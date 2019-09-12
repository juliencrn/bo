import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, Styled } from 'theme-ui'

import theme from '../gatsby-plugin-theme-ui'
import components from '../gatsby-plugin-theme-ui/components'
import Navigation from './navigation/index'

import 'normalize.css'
import '../utils/font-face.css'

if (process.env.NODE_ENV === 'development') {
  import('tachyons-debug')
}

const Layout = ({ children, menuColor }) => {
  return (
    <ThemeProvider theme={theme} compoments={components}>
      <Styled.root style={{ position: 'relative' }}>
        <Navigation color={menuColor} />
        <main>{children}</main>
      </Styled.root>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  menuColor: PropTypes.string
}

Layout.defaultProps = {
  menuColor: 'red'
}

export default Layout
