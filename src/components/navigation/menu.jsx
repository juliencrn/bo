/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'

import Item from './menuItem'

const Menu = ({ list }) => {
  return (
    <>
      {list.map(({ type, data }, i) =>
        type === 'item' ? (
          <Item key={uniqid(i)} link={data.to}>
            {data.label}
          </Item>
        ) : (
          <span key={uniqid(i)}>
            {data.childs.map(({ label, to }) => (
              <Item key={uniqid(i)} link={to}>
                {label}
              </Item>
            ))}
          </span>
        )
      )}
    </>
  )
}

Menu.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Menu
