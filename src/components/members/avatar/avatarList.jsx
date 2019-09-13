/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import PropTypes from 'prop-types'

import Avatar from './avatar'
import SiteName from '../../sitename'

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
        <SiteName />
      </Styled.h2>
      {members.map(({ id, ...rest }) => (
        <Avatar key={id} {...rest} />
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
