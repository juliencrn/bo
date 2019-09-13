/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
// import PropTypes from 'prop-types'

import Section from '../components/section'

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
          <h1
            sx={{
              color: 'red',
              fontSize: [5, 5, 6],
              textAlign: 'center',
              fontFamily: 'makina',
              pb: 4
            }}
          >
            Bengale Studio
          </h1>
        </Container>
      </Section>
    </Layout>
  )
}

export default IndexPage
