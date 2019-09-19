import PropTypes from 'prop-types'

export const childrenPT = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
])

export const packPT = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired
  }).isRequired,
  body: PropTypes.string.isRequired,
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired
  }).isRequired
}
