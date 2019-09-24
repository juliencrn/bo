/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import { Spring } from 'react-spring/renderprops-universal'
import Avatar from './avatar'
import useWindowSize from '../../../hooks/useWindowSize'
import useMeasure from '../../../hooks/useMeasure'
import useInterval from '../../../hooks/useInterval'

const AvatarAnimation = ({ visible, hide, ...props }) => {
  const cardDimension = { width: `400px`, height: `150px` }

  const [alignLeft, setAlign] = useState(false)
  const windowSize = useWindowSize()
  const [bind, cardSize] = useMeasure()
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const w = windowSize.width - cardSize.width - 100
  const h = windowSize.height - cardSize.height - 100

  function updatePosition() {
    const ramdom = max => Math.random() * max
    setPosition({ x: ramdom(w), y: ramdom(h) })
  }

  function updateAlign(ramdom = false) {
    const side = ramdom ? Math.random() > 0.5 : position.x < w / 2
    setAlign(side)
  }

  // Only on mount
  useEffect(() => updatePosition(), [])
  useEffect(() => updateAlign(true), [])

  useInterval(() => {
    updatePosition()
  }, 5000)

  // Update align
  // useInterval(() => updateAlign(), 500)

  return (
    <Spring
      to={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      config={{ mass: 60, tension: 60, friction: 120 }}
    >
      {styles => (
        <div
          style={{
            ...styles,
            width: cardDimension.width,
            height: cardDimension.height,
            maxWidth: `100%`,
            position: 'absolute',
            top: `50px`,
            bottom: `50px`,
            right: `50px`,
            left: `50px`,
            zIndex: visible ? 10 : -1,
            display: hide ? 'none' : 'flex'
          }}
          {...bind}
        >
          <Avatar {...props} size={cardDimension} alignLeft={alignLeft} />
        </div>
      )}
    </Spring>
  )
}

AvatarAnimation.propTypes = {
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
  hide: PropTypes.bool.isRequired
}

export default AvatarAnimation
