/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState, memo } from 'react'
import { jsx } from 'theme-ui'
import uniqid from 'uniqid'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import { useSpring, animated } from 'react-spring'

import Item from './menuItem'
import ButtonReset from '../../buttonReset'
import useMeasure from '../../../hooks/useMeasure'

const ItemDropdown = ({ label, childs, isXL }) => {
  const [open, setOpen] = useState(false)
  const [bind, { height: viewHeight }] = useMeasure()
  const { height, opacity, transform } = useSpring({
    from: {
      overflow: 'hidden',
      height: 0,
      opacity: 0,
      transform: 'translate3d(20px,0,0)'
    },
    to: {
      height: open ? viewHeight : 0,
      opacity: open ? 1 : 0,
      transform: `translate3d(${open ? 0 : 20}px, 0, 0)`
    }
  })
  return (
    <span
      sx={{ display: 'inline-block' }}
      onMouseLeave={() => isXL && setOpen(false)}
      onMouseEnter={() => isXL && setOpen(true)}
    >
      <ButtonReset
        sx={{
          display: 'inline-block',
          width: isXL ? 'auto' : '100%',
          height: `100%`
        }}
        onClick={() => !isXL && setOpen(!open)}
      >
        <Item>{label}</Item>
      </ButtonReset>

      <animated.div
        style={{
          opacity,
          height: open ? 'auto' : height,
          willChange: 'opacity, height',
          position: isXL ? 'absolute' : 'relative'
        }}
      >
        <animated.div style={{ willChange: 'transform', transform }} {...bind}>
          {childs.map(({ label: text, to }) => (
            <Box ml={isXL ? 0 : 3} key={uniqid(text)}>
              <Item link={to} child>
                {text}
              </Item>
            </Box>
          ))}
        </animated.div>
      </animated.div>
    </span>
  )
}

ItemDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  childs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string
    })
  ).isRequired,
  isXL: PropTypes.bool.isRequired
}

export default ItemDropdown
