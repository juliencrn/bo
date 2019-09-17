/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box, Flex } from 'rebass'
import { jsx } from 'theme-ui'
import { useTransition, animated } from 'react-spring'

import Burger from './burger'
import Menu from './menu'
import Item, { HomeLink } from './menuItem'
import ButtonReset from '../buttonReset'

function MenuMobile({
  setOpen,
  shortTitle,
  siteName,
  list,
  margins,
  open,
  style
}) {
  const transitions = useTransition(open, null, {
    from: { ...style, opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })
  return transitions.map(({ item: isOpen, key, props }) =>
    isOpen ? (
      <animated.div key={key} style={props}>
        <Flex
          sx={{
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
          }}
        >
          <Flex sx={{ justifyContent: 'space-between', mb: 4 }}>
            <HomeLink label={siteName} />
            <ButtonReset onClick={() => setOpen(false)}>
              <Item>X</Item>
            </ButtonReset>
          </Flex>

          <Menu list={list} isXL={false} siteName={siteName} />
        </Flex>
        🤪
      </animated.div>
    ) : (
      <animated.div key={key} style={props}>
        <Box sx={margins}>
          <Burger
            setOpen={() => setOpen(true)}
            label={shortTitle}
            isXL={false}
          />
        </Box>
      </animated.div>
    )
  )
}

export default MenuMobile
