/** @jsx jsx */
import React, { useState, useRef, useEffect } from 'react'
import { Styled, Flex, Box, jsx } from 'theme-ui'
import { Transition, Spring } from 'react-spring/renderprops'
import { useTransition, useSpring, useChain, config } from 'react-spring'
import useMeasure from 'use-measure'
import PropTypes from 'prop-types'

import PackInit from './packInit'
import PackOpen from './packOpen'
import PackClosed from './packClosed'
import nodeTypes from './packPropsTypes'

export const INIT = 'INIT'
export const SELECTED = 'SELECTED'
export const UNSELECT = 'UNSELECT'
export const tabSize = 92

const Letter = ({ children }) => (
  <Styled.h1 sx={{ m: 'auto', textAlign: 'center', p: 3 }}>
    {children}
  </Styled.h1>
)

const Pack = props => {
  // Data
  const { state, measure, count, click, matches, frontmatter } = props
  const { width: screenW, height: screenH } = measure
  const { numero: num, bgColor } = frontmatter

  // Utilities
  const getMaxSize = size => size - tabSize * (count - 1)
  const selectedFlex = state === SELECTED ? { flex: 1 } : {}

  // Calculate pack dimensions
  const sizes = {}
  sizes[INIT] = { w: screenW / count, h: screenH / count }
  sizes[SELECTED] = { w: getMaxSize(screenW), h: getMaxSize(screenH) }
  sizes[UNSELECT] = { w: tabSize, h: tabSize }
  const { w: packW, h: packH } = sizes[state]

  return (
    <Transition
      items={matches ? packW : packH}
      from={
        selectedFlex && matches
          ? { width: tabSize, height: screenH }
          : { height: 0, width: screenW }
      }
      enter={matches ? { width: packW } : { height: packH }}
      leave={matches ? { width: 0 } : { height: 0 }}
      config={{ mass: 1, tension: 180, friction: 30 }}
    >
      {s1 =>
        s1 &&
        (props1 => (
          <div
            onClick={() => click(num)}
            style={{
              width: `100%`,
              height: `100%`,
              ...props1
            }}
            sx={{
              color: 'white',
              backgroundColor: bgColor
              // display: 'flex'
            }}
          >
            <Letter>A</Letter>
          </div>
        ))
      }
    </Transition>
  )
}

Pack.propTypes = {
  ...nodeTypes
}

export default Pack

/*
<Spring
      config={config.molasses}
      from={{ width: 0, height: 0, flex: 0 }}
      to={{
        width: matches ? size : `100%`,
        height: !matches ? size : 'initial',
        flex: state === UNSELECT ? `initial` : 1
      }}
    >
      {style => (
        <div
          onClick={() => click(num)}
          style={style}
          sx={{
            color: 'white',
            px: 4,
            backgroundColor: bgColor,
            display: 'flex'
          }}
        >
          Coucou content
        </div>
      )}
    </Spring>
 */

/*
<Transition
            items={state}
            from={{ opacity: 0, transform: 'scale(0)' }}
            enter={{ opacity: 1, transform: 'scale(1)' }}
            leave={{ opacity: 0, transform: 'scale(0)' }}
          >
            {s =>
              s === INIT
                ? props => (
                    <div style={props}>
                      <PackInit {...node} />
                    </div>
                  )
                : s === SELECTED
                ? props => (
                    <div style={props}>
                      <PackOpen {...node} />
                    </div>
                  )
                : props => (
                    <div style={props}>
                      <PackClosed {...node} />
                    </div>
                  )
            }
          </Transition>

           {state === INIT && <PackInit {...node} />}
           {state === SELECTED && <PackOpen {...node} />}
           {state === UNSELECT && <PackClosed {...node} />}
 */
