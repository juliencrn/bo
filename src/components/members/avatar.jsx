/** @jsx jsx */
import React from 'react'
import Img from 'gatsby-image'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

const Avatar = ({ id, frontmatter }) => {
  const { avatar, title, profession, professionCool } = frontmatter
  return (
    <div key={id}>
      <p>{title}</p>
      <p>{profession}</p>
      <p>{professionCool}</p>

      <div
        sx={{
          width: ['150px'],
          height: ['150px'],
          overflow: 'hidden',
          borderRadius: '50%'
        }}
      >
        <Img fixed={avatar.childImageSharp.fixed} />
      </div>
    </div>
  )
}

Avatar.propTypes = {
  id: PropTypes.string.isRequired,
  frontmatter: PropTypes.shape({
    avatar: PropTypes.object,
    title: PropTypes.string,
    profession: PropTypes.string,
    professionCool: PropTypes.string
  }).isRequired
}

export default Avatar
