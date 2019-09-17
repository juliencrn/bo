/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box, Heading, Text } from 'rebass'
import uniqid from 'uniqid'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import Container from '../components/container'
import Section from '../components/section'

function mapColors(color) {
  switch (color) {
    case 'rouge':
      return 'red'
    case 'rose':
      return 'saumon'
    case 'vert':
      return 'green'
    default:
      return 'background'
  }
}

function HomeBody({ sections }) {
  return (
    <Section>
      <Container>
        {sections.map(({ title, theme, content }, i) => {
          const left = i % 2 === 0
          return (
            <Box
              sx={{
                py: 5,
                textAlign: left ? 'left' : 'right',
                position: 'relative'
              }}
              key={uniqid(title)}
            >
              <Heading
                sx={{
                  position: 'absolute',
                  fontFamily: 'body',
                  width: '100%',
                  fontSize: [8]
                }}
              >{`${i + 1}.`}</Heading>
              <Heading
                as="h2"
                sx={{
                  fontSize: [6],
                  pl: left ? 6 : 0,
                  pr: !left ? 6 : 0
                }}
              >
                {title}
              </Heading>
              <Box
                sx={{
                  backgroundColor: mapColors(theme),
                  py: 4,
                  px: 3,
                  width: `${(2 / 3) * 100}%`,
                  ml: left ? 'auto' : 0,
                  mr: !left ? 'auto' : 0
                }}
              >
                <Text>{content}</Text>
              </Box>
            </Box>
          )
        })}
      </Container>
    </Section>
  )
}

HomeBody.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      theme: PropTypes.string,
      content: PropTypes.string
    })
  ).isRequired
}

export default HomeBody
