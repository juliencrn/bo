/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import { childrenPT } from '../../../utils/propTypes'

const Item = ({ link, children }) => {
  const style = {
    color: 'inherit',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: 2,
    py: 2,
    px: 3
  }
  return link ? (
    <Link to={link} sx={style}>
      {children}
    </Link>
  ) : (
    <span sx={style}>{children}</span>
  )
}

Item.propTypes = {
  link: PropTypes.string,
  children: childrenPT.isRequired
}
Item.defaultProps = {
  link: ''
}

export const HomeLink = ({ label }) => (
  <Item link="/">
    <span sx={{ fontFamily: 'makina' }}>{label}</span>
  </Item>
)

HomeLink.propTypes = { label: PropTypes.string.isRequired }

export default Item
