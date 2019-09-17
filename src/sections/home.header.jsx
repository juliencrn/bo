/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Heading } from 'rebass'
import uniqid from 'uniqid'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import Container from '../components/container'
import Neon from '../components/neon'
import Section from '../components/section'

function HomeHeader({ title, titles }) {
  return (
    <Section bg="marine" color="green" fullScreen>
      <Container>
        <Neon text={title} />
        {titles && titles.map(t => <Heading key={uniqid(t)}>{t}</Heading>)}
      </Container>
    </Section>
  )
}

HomeHeader.propTypes = {
  title: PropTypes.string.isRequired,
  titles: PropTypes.arrayOf(PropTypes.string)
}

HomeHeader.defaultProps = {
  titles: []
}

export default HomeHeader
