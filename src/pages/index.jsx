/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
// import PropTypes from 'prop-types'

import Section from '../components/section'
import Neon from '../components/neon'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

// export const query = graphql`
//   query IndexPage {
//     allMdx {
//       edges {
//         node {
//           fileAbsolutePath
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Section bg="marine">
        <Container>
          <Neon text="Bengale Studio" />
        </Container>
      </Section>
    </Layout>
  )
}

export default IndexPage
