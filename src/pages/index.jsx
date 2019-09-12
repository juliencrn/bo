import React from 'react'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'
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
      <Section>
        <Container>
          <Styled.h1>Hi people :)</Styled.h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>

          <p>Menu</p>
          <ul>
            <li>
              <Link to="/packs">Packs</Link>
            </li>
            <li>
              <Link to="/membres">Membres</Link>
            </li>
          </ul>
        </Container>
      </Section>
    </Layout>
  )
}

export default IndexPage
