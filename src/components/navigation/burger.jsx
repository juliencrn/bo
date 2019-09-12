/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import SiteName from '../sitename'
import Item from './menuItem'
import { buttonReset } from './buttonReset'

const Burger = ({ onClick, open }) => {
  return open ? (
    <p sx={{ m: 0 }}>
      <Item link="/">
        <SiteName />
      </Item>
    </p>
  ) : (
    <button css={buttonReset} type="button" onClick={() => onClick()}>
      <Item>BO</Item>
    </button>
  )
}

Burger.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default Burger
