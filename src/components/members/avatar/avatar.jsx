/** @jsx jsx */
import React, { useState } from 'react'
import Img from 'gatsby-image'
import { jsx, Flex } from 'theme-ui'
import PropTypes from 'prop-types'

import IconMore from '../../../../static/svg/plus-sign-to-add.svg'
import Text from './text'

const Avatar = ({ id, frontmatter, fields }) => {
  const [alignLeft, setAlign] = useState(false)
  const [hover, setHover] = useState(false)
  const { avatar, title, profession, professionCool, bgColor } = frontmatter
  const { slug } = fields
  return (
    <a
      href={slug}
      key={id}
      sx={{
        display: 'flex',
        flexDirection: alignLeft ? 'row' : 'row-reverse',
        justifyContent: 'center',
        width: `400px`,
        maxWidth: `100%`,
        py: [3],
        px: [3],
        cursor: 'pointer'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Flex
        sx={{
          px: [3],
          color: bgColor,
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}
      >
        <Text text={title} />
        <Text
          text={profession}
          uppercase
          line
          sx={{ fontWeight: 'bold', fontSize: 2 }}
        />
        <Text text={professionCool} uppercase />
      </Flex>

      <div
        sx={{
          width: ['145px'],
          height: ['145px'],
          backgroundColor: bgColor,
          overflow: 'hidden',
          borderRadius: '50%',
          position: 'relative'
        }}
      >
        <Img
          sx={{ opacity: hover ? '0.2' : '1' }}
          fixed={avatar.childImageSharp.fixed}
        />
        <IconMore
          sx={{
            fill: 'white',
            width: '32px',
            height: '32px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
            opacity: hover ? '1' : '0'
          }}
        />
      </div>
    </a>
  )
}

Avatar.propTypes = {
  id: PropTypes.string.isRequired,
  frontmatter: PropTypes.shape({
    avatar: PropTypes.object,
    title: PropTypes.string,
    bgColor: PropTypes.string,
    profession: PropTypes.string,
    professionCool: PropTypes.string
  }).isRequired,
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired
  }).isRequired
}

export default Avatar
