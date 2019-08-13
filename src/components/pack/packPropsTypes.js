import PropTypes from 'prop-types'

const nodeTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired
  }).isRequired,
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired
  }).isRequired,
  body: PropTypes.string.isRequired
}

export default nodeTypes
