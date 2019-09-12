/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import Avatar from './avatar'

const AvatarList = ({ members }) => {
  return (
    <>
      {members.map(({ id, frontmatter }) => (
        <Avatar key={id} frontmatter={frontmatter} id={id} />
      ))}
    </>
  )
}

AvatarList.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      frontmatter: PropTypes.object
    })
  ).isRequired
}

export default AvatarList
