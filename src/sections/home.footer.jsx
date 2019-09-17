/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box, Text } from 'rebass'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import Container from '../components/container'
import Mail from '../components/mail'

function HomeFooter({ title, mail }) {
  return (
    <section sx={{ backgroundColor: 'marine', py: 0 }}>
      <Container sx={{}}>
        <Box sx={{ py: 6 }}>
          <Mail mail={mail} color="green" />
        </Box>
        <Text
          sx={{
            textAlign: 'center',
            color: 'fushia',
            m: 0,
            py: 3,
            fontFamily: 'makina'
          }}
        >{`${title} © ${new Date().getFullYear()}`}</Text>
      </Container>
    </section>
  )
}

HomeFooter.propTypes = {
  title: PropTypes.string,
  mail: PropTypes.string
}

HomeFooter.defaultProps = {
  title: 'Bengale Studio',
  mail: 'bonjour@bengale.studio'
}

export default HomeFooter
