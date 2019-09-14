/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Flex, Styled } from 'theme-ui'

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
          <h1
            sx={{
              textAlign: 'center',
              fontWeight: 'heading',
              fontFamily: 'heading',
              fontSize: [6]
            }}
          >
            Devis
          </h1>
        </Container>
      </Section>
    </Layout>
  )
}

export default DevisPage
