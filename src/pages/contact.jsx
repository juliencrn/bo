/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import { Heading } from 'rebass'

import Section from '../components/section'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Section fullScreen bg="marine" color="green">
        <Container>
          <Heading
            sx={{
              textAlign: 'center',
              fontSize: [6]
            }}
          >
            Contact
          </Heading>
        </Container>
      </Section>
    </Layout>
  )
}

export default ContactPage
