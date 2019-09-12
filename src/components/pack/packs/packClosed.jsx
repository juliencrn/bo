/** @jsx jsx */
import React from 'react'
import { jsx, Flex } from 'theme-ui'
import PropTypes from 'prop-types'

import PackTitle from '../packTitle'

const PackClosed = ({ frontmatter: { title, color }, matches }) => (
  <Flex style={{ width: `100%`, height: `100%` }} sx={{ m: 0, p: 0 }}>
    <PackTitle title={title} color={color} vertical matches={matches} />
  </Flex>
)

PackClosed.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  matches: PropTypes.bool.isRequired
}

export default PackClosed
