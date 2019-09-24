/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { jsx, Styled } from 'theme-ui'
import PropTypes from 'prop-types'

import AvatarAnimation from './avatarAnimation'
import Neon from '../../neon'
import useWindowSize from '../../../hooks/useWindowSize'
import { ramdomBetween } from '../../../utils/functions'

const cardSize = { width: 400, height: 150 }

const AvatarList = ({ members, siteName, visible, hide }) => {
  const windowSize = useWindowSize()
  const initialPositions = members.reduce((acc, curr) => {
    if (typeof acc !== 'object') acc = []
    const rx = cardSize.width
    const ry = cardSize.height
    acc.push({
      id: curr.id,
      x: ramdomBetween(windowSize.width - rx, rx),
      y: ramdomBetween(windowSize.height - ry, ry)
    })
    return acc
  }, [])

  const [positions, setPositions] = useState(initialPositions)

  function updatePositions({ y, x, id }) {
    setPositions(
      positions.map(position => {
        if (position.id === id) {
          return { ...position, x, y }
        }
        return position
      })
    )
  }

  return (
    <>
      <Styled.h2
        sx={{
          position: 'absolute',
          m: 0,
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
          zIndex: visible ? 10 : -1,
          display: hide ? 'none' : 'inherit'
        }}
      >
        <Neon text={siteName} />
      </Styled.h2>

      {members.map(node => (
        <AvatarAnimation
          key={node.id}
          {...node}
          visible={visible}
          hide={hide}
          cardSize={cardSize}
          handlePosition={position =>
            updatePositions({ ...position, id: node.id })
          }
          positions={positions}
        />
      ))}
    </>
  )
}

AvatarList.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      frontmatter: PropTypes.object
    })
  ).isRequired,
  siteName: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  hide: PropTypes.bool.isRequired
}

export default AvatarList
