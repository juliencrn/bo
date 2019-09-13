/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Flex } from 'theme-ui'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'

import Item, { HomeLink } from './menuItem'
import ItemDropdown from './menuItemDropdown'

const Menu = ({ list, isXL }) => {
  return (
    <Flex
      as="nav"
      sx={{
        flexDirection: isXL ? 'row' : 'column',
        width: `100%`
      }}
    >
      {isXL && <HomeLink />}
      {list.map(({ type, data }, i) =>
        type === 'item' ? (
          <Item key={uniqid(i)} link={data.to}>
            {data.label}
          </Item>
        ) : (
          <ItemDropdown key={uniqid(i)} isXL={isXL} {...data} />
        )
      )}
    </Flex>
  )
}

Menu.propTypes = {
  isXL: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Menu
