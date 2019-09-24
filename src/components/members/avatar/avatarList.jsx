/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import PropTypes from 'prop-types'

import AvatarAnimation from './avatarAnimation'
import Neon from '../../neon'

const AvatarList = ({ members, siteName, visible, hide }) => {
  return (
    <>
      <Styled.h2
        sx={{
          color: 'fushia',
          fontSize: [5, 5, 6],
          textAlign: 'center',
          position: 'absolute',
          m: 0,
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
          zIndex: visible ? 10 : -1,
          display: hide ? 'none' : 'inherit'
        }}
      >
        <Neon text={siteName} />
      </Styled.h2>
      {members.map(({ id, ...rest }) => (
        <AvatarAnimation key={id} {...rest} visible={visible} hide={hide} />
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
  ).isRequired,
  siteName: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  hide: PropTypes.bool.isRequired
}

export default AvatarList
