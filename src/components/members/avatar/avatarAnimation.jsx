/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import { Spring } from 'react-spring/renderprops-universal'
import Avatar from './avatar'
import useWindowSize from '../../../hooks/useWindowSize'
// import useMeasure from '../../../hooks/useMeasure'
import useInterval from '../../../hooks/useInterval'
import { ramdomBetween } from '../../../utils/functions'

const AvatarAnimation = ({
  visible,
  hide,
  handlePosition,
  positions,
  cardSize,
  ...props
}) => {
  const { width, height } = cardSize
  const [alignLeft, setAlign] = useState(false)
  const windowSize = useWindowSize()
  const initialPosition = positions.filter(({ id }) => id === props.id)[0]
  const [position, setPosition] = useState(initialPosition)
  const [directions, setDirections] = useState({ dy: 0, dx: 0 })
  const [hover, setHover] = useState(false)

  function move() {
    if (!hover) {
      const { width: cx, height: cy } = cardSize
      const { width: wx, height: wy } = windowSize
      const { x, y } = position
      let { dx, dy } = directions

      // Inverse direction if element touches wall
      dx = x + dx < 0 || x + dx > wx - cx ? -dx : dx
      dy = y + dy < 0 || y + dy > wy - cy ? -dy : dy

      // Inverse direction if element touches others element
      const rx = cx / 2 // radius = cardSize / 2
      const ry = cy / 2 // radius = cardSize / 2
      positions.forEach(other => {
        // echap this
        if (other.id !== props.id) {
          const { x: elx, y: ely } = other
          const tx = x + dx < elx + rx && x + dx > elx - rx // x touched
          const ty = y + dy < ely + ry && y + dy > ely - ry // y touched
          // if touched
          if (tx && ty) {
            dx = -dx
            dy = -dy
          }
        }
      })

      const newPosition = { x: x + dx, y: y + dy }

      setPosition(newPosition)
      setDirections({ dx, dy })
      handlePosition(newPosition)
    }
  }

  // Setup initial direction on mount only
  useEffect(
    () =>
      setDirections({
        dx: ramdomBetween(height / 2),
        dy: ramdomBetween(height / 2)
      }),
    []
  )

  // Update element position every X ms
  useInterval(() => move(), 500)

  return (
    <Spring
      to={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      config={{ mass: 1, tension: 1, friction: 1 }}
    >
      {styles => (
        <div
          style={{
            ...styles,
            width,
            height,
            maxWidth: `100%`,
            position: 'absolute',
            zIndex: visible ? 10 : -1,
            display: hide ? 'none' : 'inherit'
          }}
        >
          <Avatar
            {...props}
            hover={hover}
            setHover={setHover}
            size={cardSize}
            alignLeft={alignLeft}
          />
        </div>
      )}
    </Spring>
  )
}

AvatarAnimation.propTypes = {
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
  }).isRequired,
  visible: PropTypes.bool.isRequired,
  hide: PropTypes.bool.isRequired,
  handlePosition: PropTypes.func.isRequired,
  positions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    })
  ).isRequired,
  cardSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired
}

export default AvatarAnimation

/*
  // function updateAlign(ramdom = false) {
  //   const side = ramdom ? Math.random() > 0.5 : position.x < w / 2
  //   setAlign(side)
  // }
  // console.log({w,h})
  // Only on mount
  // useEffect(() => updateAlign(true), [])
  //
  // Update align
  // useInterval(() => updateAlign(), 500)
 */
