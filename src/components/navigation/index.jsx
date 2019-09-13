/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Flex, jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

import Burger from './burger'
import Menu from './menu'
import Item, { HomeLink } from './menuItem'
import { breakpoints } from '../../gatsby-plugin-theme-ui'
import { buttonReset } from '../../utils/cssHelpers'

const Navigation = ({ color, list }) => {
  const [open, setOpen] = useState(false)
  return (
    <MediaQuery minWidth={breakpoints[0]}>
      {isXL => (
        <>
          <div
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
                    <button
                      sx={buttonReset}
                      type="button"
                      onClick={() => setOpen(false)}
                    >
                      <Item>X</Item>
                    </button>
                  </Flex>
                )}

                {open && <Menu list={list} isXL={isXL} />}
              </Flex>
            )}
          </div>
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
          { label: 'Portfolio', to: '/' },
          { label: 'Tarifs', to: '/packs' }
        ]
      }
    },
    { type: 'item', data: { label: 'Vérité', to: '/membres' } },
    { type: 'item', data: { label: 'Contact', to: '/' } }
  ],
  color: 'red'
}

export default Navigation
