/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { jsx } from 'theme-ui'

import NextIcon from '../../../static/svg/next.svg'
import BackIcon from '../../../static/svg/back.svg'

const MemberArrow = ({ slug, next = false }) => (
  <Link
    to={slug}
    sx={{
      position: 'fixed',
      top: `50%`,
      transform: `translateY(-50%)`,
      left: next ? `inherit` : 0,
      right: next ? 0 : `inherit`,
      p: [0, 0, 0, 3],
      width: [24, 36, 48],
      height: [24, 36, 48],
      fill: 'white'
    }}
  >
    {next ? <NextIcon /> : <BackIcon />}
  </Link>
)

MemberArrow.propTypes = {
  slug: PropTypes.string.isRequired,
  next: PropTypes.bool
}

MemberArrow.defaultProps = {
  next: false
}

export default MemberArrow
