/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import { jsx } from 'theme-ui'
import { useTransition, useChain, animated } from 'react-spring'
import PropTypes from 'prop-types'

import PackInit from './packs/packInit'
import PackOpen from './packs/packOpen'
import PackClosed from './packs/packClosed'
import nodeTypes from './packPropsTypes'

export const INIT = 'INIT'
export const SELECTED = 'SELECTED'
export const UNSELECT = 'UNSELECT'
export const tabSize = 92

const Pack = ({ state, measure, count, click, ...node }) => {
  const { frontmatter, matches } = node
  const { numero: num, bgColor } = frontmatter
  const { width: screenW, height: screenH } = measure
  const config = { mass: 1, tension: 180, friction: 30 }

  // Calculate pack dimensions
  const getMaxSize = size => size - tabSize * (count - 1)
  const selectedFlex = state === SELECTED ? { flex: 1 } : {}
  const sizes = {}
  sizes[INIT] = { w: screenW / count, h: screenH / count }
  sizes[SELECTED] = { w: getMaxSize(screenW), h: getMaxSize(screenH) }
  sizes[UNSELECT] = { w: tabSize, h: tabSize }
  const { w: packW, h: packH } = sizes[state]

  // Animation Slider style
  const slideRef = useRef()
  const transitionsWrap = useTransition(matches ? packW : packH, null, {
    from:
      selectedFlex && matches
        ? { width: tabSize, height: screenH }
        : { height: 0, width: screenW },
    enter: matches ? { width: packW } : { height: packH },
    leave: matches ? { width: 0 } : { height: 0 },
    config,
    ref: slideRef
  })

  console.log({ packW, packH })

  // // Animations next scale content
  const contentRef = useRef()
  const transitionsContent = useTransition(state, null, {
    from: {
      opacity: 0,
      position: 'absolute',
      overflow: 'hidden',
      transform: `scale(0)`
    },
    enter: { opacity: 1, transform: `scale(1)` },
    leave: { opacity: 0, transform: `scale(0)` },
    ref: contentRef,
    unique: true,
    reset: true
    // config
  })

  useChain(
    state === SELECTED ? [slideRef, contentRef] : [slideRef, contentRef],
    [0, 1]
  )

  return transitionsWrap.map(({ key, props }) => (
    <animated.div
      ref={slideRef}
      key={key}
      onClick={() => click(num)}
      style={{
        width: packW,
        height: packH,
        position: 'relative',
        ...props
      }}
      sx={{
        color: 'white',
        backgroundColor: bgColor
      }}
    >
      {transitionsContent.map(
        ({ item, key: key2, props: props2 }) =>
          item && (
            <animated.div
              key={key2}
              sx={{ p: state === UNSELECT ? 0 : 4 }}
              style={{
                ...props2,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div
                sx={{
                  p: 0,
                  m: 0,
                  minHeight: matches ? `60vh` : null,
                  position: 'relative',
                  border: `2px solid yellow`
                }}
              >
                {state === INIT && <PackInit {...node} />}
                {state === SELECTED && <PackOpen {...node} />}
                {state === UNSELECT && <PackClosed {...node} />}
              </div>
            </animated.div>
          )
      )}
    </animated.div>
  ))
}

Pack.propTypes = {
  ...nodeTypes,
  state: PropTypes.oneOf([INIT, SELECTED, UNSELECT]).isRequired,
  measure: PropTypes.objectOf(PropTypes.number).isRequired,
  count: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired
}

export default Pack
