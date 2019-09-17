/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import { Box, Flex } from 'rebass'

import Burger from './burger'
import Menu from './menu'
import Item, { HomeLink } from './menuItem'
import ButtonReset from '../buttonReset'
import { breakpoints } from '../../gatsby-plugin-theme-ui'

const Navigation = ({ color, list }) => {
  const [open, setOpen] = useState(false)
  return (
    <MediaQuery minWidth={breakpoints[0]}>
      {isXL => (
        <>
          <Box
            sx={{
              color,
              fontFamily: 'body',
              position: 'fixed',
              width: 'auto',
              height: 'auto',
              top: 0,
              right: 0,
              zIndex: 50,
              m: [4, 4, 5]
            }}
            onMouseLeave={() => isXL && setOpen(false)}
          >
            {!open && <Burger setOpen={() => setOpen(true)} isXL={isXL} />}

            {open && (
              <Flex
                sx={
                  !isXL && {
                    p: 4,
                    width: `100%`,
                    height: `auto`,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    flexDirection: 'column',
                    overflow: 'auto',
                    backgroundColor: 'marine'
                  }
                }
              >
                {!isXL && open && (
                  <Flex sx={{ justifyContent: 'space-between', mb: 4 }}>
                    <HomeLink />
                    <ButtonReset onClick={() => setOpen(false)}>
                      <Item>X</Item>
                    </ButtonReset>
                  </Flex>
                )}

                {open && <Menu list={list} isXL={isXL} />}
              </Flex>
            )}
          </Box>
        </>
      )}
    </MediaQuery>
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
