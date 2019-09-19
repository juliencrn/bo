/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box } from 'rebass'
import { jsx } from 'theme-ui'
import { useTransition, animated } from 'react-spring'
import PropTypes from 'prop-types'
import stylePropTypes from 'react-style-proptype'

import Burger from './components/burger'
import Menu from './components/menu'

function MenuDesktop({
  setOpen,
  margins,
  shortTitle,
  siteName,
  list,
  open,
  style
}) {
  const transitions = useTransition(open, null, {
    from: { ...style, opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })
  return transitions.map(({ item: isOpen, key, props }) =>
    isOpen ? (
      <animated.div key={key} style={props}>
        <Box sx={margins} onMouseLeave={() => setOpen(false)}>
          <Menu list={list} isXL siteName={siteName} />
        </Box>
      </animated.div>
    ) : (
      <animated.div key={key} style={props}>
        <Box sx={margins}>
          <Burger setOpen={() => setOpen(true)} label={shortTitle} isXL />
        </Box>
      </animated.div>
    )
  )
}

MenuDesktop.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  siteName: PropTypes.string.isRequired,
  shortTitle: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired,
  margins: PropTypes.shape({
    m: PropTypes.arrayOf(PropTypes.number)
  }),
  open: PropTypes.bool.isRequired,
  style: stylePropTypes.isRequired
}

export default MenuDesktop
