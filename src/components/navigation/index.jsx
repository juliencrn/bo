/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import { Box } from 'rebass'

import MenuDesktop from './menuDesktop'
import MenuMobile from './menuMobile'
import { breakpoints } from '../../gatsby-plugin-theme-ui'

const Navigation = ({ color, list }) => {
  const [open, setOpen] = useState(false)
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            shortTitle
          }
        }
      }
    `
  )
  const { title: siteName, shortTitle } = site.siteMetadata
  const style = {
    position: 'fixed',
    width: 'auto',
    height: 'auto',
    top: 0,
    right: 0,
    zIndex: 50
  }
  const margins = { m: [4, 4, 5] }
  const props = { margins, style, open, shortTitle, list, siteName }

  return (
    <Box sx={{ color, fontFamily: 'body' }}>
      <MediaQuery minWidth={breakpoints[0]}>
        {isXL =>
          isXL ? (
            <MenuDesktop setOpen={x => setOpen(x)} {...props} />
          ) : (
            <MenuMobile setOpen={x => setOpen(x)} {...props} />
          )
        }
      </MediaQuery>
    </Box>
  )
}

Navigation.propTypes = {
  color: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object)
}

Navigation.defaultProps = {
  list: [
    {
      type: 'dropdown',
      data: {
        label: 'Action',
        childs: [
          { label: 'Portfolio', to: '/portfolio' },
          { label: 'Tarifs', to: '/packs' }
        ]
      }
    },
    { type: 'item', data: { label: 'Vérité', to: '/membres' } },
    { type: 'item', data: { label: 'Contact', to: '/contact' } }
  ],
  color: 'fushia'
}

export default Navigation
