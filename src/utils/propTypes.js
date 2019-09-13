import PropTypes from 'prop-types'

// eslint-disable-next-line import/prefer-default-export
export const childrenPT = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
])
