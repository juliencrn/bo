/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Link } from 'rebass'

const Mail = props => {
  const { mail, color } = props
  return (
    <Link
      href={`mailto:${mail}`}
      sx={{
        color,
        fontSize: [5],
        fontFamily: 'heading',
        fontWeight: 'heading',
        textDecoration: 'none'
      }}
      {...props}
    >
      {mail}
    </Link>
  )
}

Mail.propTypes = {
  mail: PropTypes.string,
  color: PropTypes.string
}

Mail.defaultProps = {
  mail: '',
  color: 'blue'
}

export default Mail
