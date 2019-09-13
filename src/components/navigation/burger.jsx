/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import Item from './menuItem'
import { buttonReset } from '../../utils/cssHelpers'

const Burger = ({ setOpen, label, isXL }) => {
  return (
    <button
      type="button"
      onMouseEnter={() => isXL && setOpen()}
      onClick={() => !isXL && setOpen()}
      sx={buttonReset}
    >
      <Item>
        <span sx={{ fontFamily: 'makina' }}>{label}</span>
      </Item>
    </button>
  )
}

Burger.propTypes = {
  setOpen: PropTypes.func.isRequired,
  isXL: PropTypes.bool.isRequired,
  label: PropTypes.string
}

Burger.defaultProps = {
  label: 'BO'
}

export default Burger
