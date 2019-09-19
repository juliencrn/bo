/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Flex } from 'rebass'

import PackTitle from '../packTitle'

const PackClosed = ({ frontmatter: { title, color }, isXL }) => (
  <Flex sx={{ m: 0, p: 0, width: `100%`, height: `100%` }}>
    <PackTitle title={title} color={color} vertical isXL={isXL} />
  </Flex>
)

PackClosed.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  isXL: PropTypes.bool.isRequired
}

export default PackClosed
