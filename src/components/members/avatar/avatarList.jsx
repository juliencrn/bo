/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import PropTypes from 'prop-types'

import Avatar from './avatar'

const AvatarList = ({ members }) => {
  return (
    <>
      <Styled.h2
        sx={{
          color: 'red',
          fontSize: [5, 5, 6],
          textAlign: 'center'
        }}
      >
        Bengale Studio
      </Styled.h2>
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