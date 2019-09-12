/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import { childrenPT } from '../../utils/propTypes'

const Item = ({ link, children }) => (
  <p sx={{ display: 'inline-block', p: 2, m: 0 }}>
    {link ? (
      <Link to={link} sx={{ color: 'inherit', textDecoration: 'none' }}>
        {children}
      </Link>
    ) : (
      <span>{children}</span>
    )}
  </p>
)

Item.propTypes = {
  link: PropTypes.string,
  children: childrenPT.isRequired
}
Item.defaultProps = {
  link: ''
}

export default Item
