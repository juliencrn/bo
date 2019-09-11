/** @jsx jsx */
import React from 'react'
import { Styled, jsx, Flex } from 'theme-ui'
import PropTypes from 'prop-types'

import PackTitle from '../packTitle'

const PackClosed = ({ frontmatter: { title, color } }) => (
  <Flex style={{ width: `100%`, height: `100%` }} sx={{ m: 0, p: 0 }}>
    <PackTitle title={title} color={color} vertical />
  </Flex>
)

PackClosed.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired
}

export default PackClosed
