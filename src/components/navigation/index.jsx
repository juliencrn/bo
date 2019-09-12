/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import Burger from './burger'
import Menu from './menu'

const Navigation = ({ color, list }) => {
  const [open, setOpen] = useState(false)
  return (
    <div
      sx={{
        color,
        fontFamily: 'makina',
        position: 'fixed',
        top: 0,
        left: 0,
        p: [4],
        zIndex: 50
      }}
    >
      <Burger onClick={() => setOpen(!open)} open={open} />
      {open && <Menu list={list} />}
    </div>
  )
}

Navigation.propTypes = {
  color: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object)
}

Navigation.defaultProps = {
  list: [
    {
      type: 'dropdown',
      data: {
        label: 'Action',
        childs: [
          { label: 'Portfolio', to: '/' },
          { label: 'Tarifs', to: '/packs' }
        ]
      }
    },
    { type: 'item', data: { label: 'Vérité', to: '/membres' } },
    { type: 'item', data: { label: 'Contact', to: '/' } }
  ],
  color: 'red'
}

export default Navigation
