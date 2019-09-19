/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Box, Text } from 'rebass'

import { Link } from 'gatsby'
import PackTitle from './packTitle'
import { packPT } from '../../utils/propTypes'

const PackInit = ({ frontmatter, fields, isXL }) => {
  const { slug } = fields
  const { title, color, bgColor, numero, excerpt } = frontmatter
  const style = isXL ? {} : { alignItems: 'center' }
  return (
    <Link
      to={slug}
      sx={{
        ...style,
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: bgColor
      }}
    >
      <Box
        sx={{
          width: `100%`,
          p: [3, 4, 4, 5],
          pt: [0, 4, 6, 7]
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <PackTitle
            pack={`Pack ${numero}`}
            title={title}
            color={color}
            isXL={isXL}
          />
          <Box
            sx={{
              position: isXL ? 'absolute' : 'inherit',
              width: '100%',
              top: 0,
              mt: [3, 3, 7, 7]
            }}
          >
            <Text sx={{ color: 'white', fontSize: [0, 1] }}>{excerpt}</Text>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

PackInit.propTypes = {
  ...packPT,
  isXL: PropTypes.bool.isRequired
}

export default PackInit
