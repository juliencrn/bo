/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import { Heading } from 'rebass'

import Section from '../components/section'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

const DevisPage = () => {
  return (
    <Layout>
      <SEO title="Devis" />
      <Section fullScreen bg="marine" color="green">
        <Container>
          <Heading
            sx={{
              textAlign: 'center',
              fontSize: [6]
            }}
          >
            Devis
          </Heading>
        </Container>
      </Section>
    </Layout>
  )
}

export default DevisPage
