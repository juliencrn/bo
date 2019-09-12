import PropTypes from 'prop-types'

export const childrenPT = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
])
