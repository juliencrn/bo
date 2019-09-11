/** @jsx jsx */
import React, { useState, useRef } from 'react'
import { graphql } from 'gatsby'
import { Container, jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'

const introduction =
  'Aenean eu porta est, vel faucibus tellus. Vestibulum in arcu ultrices, semper velit vel, tempor augue. Nulla vulputate tempus arcu sed mattis. Duis sed tristique magna. Donec accumsan nisi non quam interdum, sit amet dignissim nibh euismod. Duis eu auctor turpis, ac commodo turpis. Mauris non aliquet enim. Sed aliquet neque eget tortor luctus pulvinar. Cras et metus enim. In a erat et odio consectetur ullamcorper a Bengale Studio. Curabitur nec ornare purus. In eget augue in neque dignissim varius sed non ligula.\n' +
  'Fusce in sapien faucibus, congue odio id, iaculis turpis. Nulla facilisi. Sed nec dolor neque. Nunc viverra in diam in tristique. Vivamus efficitur fringilla purus non tincidunt. Nulla fermentum nibh eu nisl imperdiet ultrices. Nam tincidunt pretium felis, et faucibus mauris dignissim eu. Morbi placerat felis posuere justo viverra, id iaculis felis pharetra. Aliquam vulputate nulla id facilisis commodo. Mauris ante mi, venenatis eu tempus non, finibus.'

const BigIntro = ({ text }) => (
  <p
    sx={{
      fontFamily: 'heading',
      fontSize: [6],
      lineHeight: 1,
      fontWeight: 'heading'
    }}
  >
    {introduction}
  </p>
)

const AvatarList = ({ members }) => (
  <ul>{members.map(member => console.log(member))}</ul>
)

const MembersPage = ({ data }) => {
  const packs = data.allMdx.edges

  return (
    <Layout>
      <SEO title="L'équipe" />
      <div
        sx={{
          backgroundColor: 'blue',
          color: 'white',
          minHeight: '100vh',
          width: '100%',
          py: [5, 5, 6]
        }}
      >
        <Container>
          {/* <BigIntro text={introduction} /> */}
          <AvatarList members={[]} />
        </Container>
      </div>
    </Layout>
  )
}

MembersPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf().isRequired
    }).isRequired
  }).isRequired
}

export default MembersPage

export const query = graphql`
  query getMembers {
    allMdx(
      filter: { fields: { slug: { regex: "//packs//" } } }
      sort: { order: ASC, fields: frontmatter___numero }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
          body
        }
      }
    }
  }
`
