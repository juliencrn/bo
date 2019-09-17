/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box, Flex, Heading } from 'rebass'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Container from '../components/container'
import Section from '../components/section'
import Button from '../components/button'

function HomeCTA({ ctaTitle, devisBtn, contactBtn }) {
  return (
    <Section>
      <Container>
        <Heading
          as="h2"
          sx={{
            fontSize: [6],
            textAlign: 'center',
            mb: 5
          }}
        >
          {ctaTitle}
        </Heading>
        <Flex sx={{ justifyContent: 'space-around' }}>
          <Box>
            <Button as={Link} variant="blue" to="/devis">
              {devisBtn}
            </Button>
          </Box>
          <Box>
            <Button as={Link} variant="red" to="/contact">
              {contactBtn}
            </Button>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

HomeCTA.propTypes = {
  ctaTitle: PropTypes.string.isRequired,
  devisBtn: PropTypes.string.isRequired,
  contactBtn: PropTypes.string.isRequired
}

HomeCTA.defaultProps = {}

export default HomeCTA
