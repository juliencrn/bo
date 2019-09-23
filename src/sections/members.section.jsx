/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring/renderprops'
import styled from '@emotion/styled'

import AvatarList from '../components/members/avatar/avatarList'
import BigText from '../components/bigText'
import Container from '../components/container'
import useScrollPercentage from '../hooks/useScrollPercentage'

const Fixed = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100vh;
`

const MembersSection = ({ members, siteName }) => {
  const [scrollRef, scrollPercentage] = useScrollPercentage()

  /**
   * We want to start new percentage (for red content opacity)
   * into full page scroll percentage
   * at the 33% of te=he end for example.
   * @param x number: 0 > x > 100
   * @returns {number}
   */
  function partPercent(x = 75) {
    const state = scrollPercentage >= x ? scrollPercentage - x : 0
    const ratio = 1 / (100 - x)

    return state * ratio
  }

  return (
    <Fixed>
      <div
        ref={scrollRef}
        sx={{
          height: '100%',
          overflowY: 'scroll',
          color: 'white',
          bg: 'blue'
        }}
      >
        <Spring to={{ opacity: partPercent() }}>
          {props => (
            <div style={props}>
              <AvatarList
                members={members}
                siteName={siteName}
                visible={partPercent() > 0.95}
                hide={partPercent() < 0.05}
              />
            </div>
          )}
        </Spring>

        <Spring to={{ opacity: 1.05 - partPercent() }}>
          {props => (
            <div style={props}>
              <Container sx={{ py: [6, 6, 7] }}>
                <BigText />
              </Container>
            </div>
          )}
        </Spring>
      </div>
    </Fixed>
  )
}

MembersSection.propTypes = {
  members: PropTypes.arrayOf(PropTypes.object).isRequired,
  siteName: PropTypes.string.isRequired
}

export default MembersSection
