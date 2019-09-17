/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import { Heading } from 'rebass'

import Section from '../components/section'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

const PortfolioPage = () => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Section fullScreen bg="marine" color="green">
        <Container>
          <Heading
            sx={{
              textAlign: 'center',
              fontSize: [6]
            }}
          >
            Portfolio
          </Heading>
        </Container>
      </Section>
    </Layout>
  )
}

export default PortfolioPage
