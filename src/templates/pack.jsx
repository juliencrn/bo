/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { jsx } from 'theme-ui'
import MediaQuery from 'react-responsive'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { breakpoints } from '../gatsby-plugin-theme-ui'
import { packPT } from '../utils/propTypes'
import PackSingle from '../sections/pack.single'

export default function PackTemplate({ data }) {
  const { title, excerpt } = data.mdx.frontmatter
  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <MediaQuery minWidth={breakpoints[1]}>
        {isXL => <PackSingle isXL={isXL} {...data.mdx} />}
      </MediaQuery>
    </Layout>
  )
}

PackTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape(packPT).isRequired
  }).isRequired
}

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        excerpt
        color
        bgColor
        numero
      }
      fields {
        slug
      }
    }
  }
`
