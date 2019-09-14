/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import { keyframes } from '@emotion/core'
import { animated, useSpring } from 'react-spring'
import PropTypes from 'prop-types'

const roughEase = {
  range: [
    0,
    0.025,
    0.1,
    0.225,
    0.3,
    0.4,
    0.6,
    0.65,
    0.7,
    0.775,
    0.833,
    0.88,
    0.95,
    1
  ], // Time
  output: [
    0,
    -0.1,
    0.2,
    0.4,
    0.2,
    0.55,
    0.45,
    0.55,
    0.8,
    0.825,
    0.65,
    0.95,
    0.93,
    1
  ] // Value
}

const blink = keyframes`
  from, 78%, 81%, 83%, 92.5%, to {
    color: inherit;
    text-shadow: inherit;
  }
  79%{
     color: #333;
  }
  80% {
    text-shadow: none;
  }
  82%, 92% {
    color: #333;
    text-shadow: none;
  }
`

const Neon = ({ text }) => {
  const { x } = useSpring({ from: { x: 0 }, x: 1, config: { duration: 2500 } })
  return (
    <animated.div
      style={{
        opacity: x.interpolate(roughEase).interpolate(y => `${y}`)
      }}
      sx={{
        color: 'fushia',
        textShadow: `0 5px 20px`
      }}
    >
      <h1
        sx={{
          fontSize: [5, 6, 7],
          textAlign: 'center',
          fontFamily: 'makina',
          fontWeight: 'heading',
          lineHeight: 'copy',
          letterSpacing: '8px',
          animation: `${blink} linear infinite 3s`
        }}
      >
        {text}
      </h1>
    </animated.div>
  )
}

Neon.propTypes = { text: PropTypes.string }
Neon.defaultProps = { text: 'Bengale Studio' }

export default Neon
