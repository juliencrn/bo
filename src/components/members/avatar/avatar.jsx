/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Img from 'gatsby-image'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Box, Flex } from 'rebass'

import IconMore from '../../../../static/svg/plus-sign-to-add.svg'
import Text from './text'

const Avatar = ({ frontmatter, fields, size, alignLeft, hover, setHover }) => {
  const { avatar, title, profession, professionCool, bgColor } = frontmatter
  const { slug } = fields

  return (
    <Link
      to={slug}
      sx={{
        flexDirection: alignLeft ? 'row' : 'row-reverse',
        justifyContent: 'center',
        display: 'flex',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <Flex
          sx={{
            color: bgColor,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            px: 3
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
      )}
      <Box
        sx={{
          width: [`${size.height}px`],
          height: [`${size.height}px`],
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
      </Box>
    </Link>
  )
}

Avatar.propTypes = {
  frontmatter: PropTypes.shape({
    avatar: PropTypes.object,
    title: PropTypes.string,
    bgColor: PropTypes.string,
    profession: PropTypes.string,
    professionCool: PropTypes.string
  }).isRequired,
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired
  }).isRequired,
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string
  }).isRequired,
  alignLeft: PropTypes.bool.isRequired,
  hover: PropTypes.bool.isRequired,
  setHover: PropTypes.func.isRequired
}

export default Avatar

/*
Text card part
<Flex
        sx={{
          color: bgColor,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          px: 3
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
 */
