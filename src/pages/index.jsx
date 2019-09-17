/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HomeHeader from '../sections/home.header'
import HomeBody from '../sections/home.body'
import HomeCTA from '../sections/home.cta'
import HomeFooter from '../sections/home.footer'

const IndexPage = ({ data }) => {
  const {
    title,
    titles,
    sections,
    excerpt,
    ctaTitle,
    devisBtn,
    contactBtn
  } = data.mdx.frontmatter
  return (
    <Layout>
      <SEO title="Home" description={excerpt} />
      <HomeHeader title={title} titles={titles} />
      <HomeBody sections={sections} />
      <HomeCTA
        ctaTitle={ctaTitle}
        contactBtn={contactBtn}
        devisBtn={devisBtn}
      />
      <HomeFooter title={title} mail="bonjour@bengale.studio" />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        titles: PropTypes.arrayOf(PropTypes.string).isRequired,
        sections: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            theme: PropTypes.string,
            content: PropTypes.string
          })
        ).isRequired,
        excerpt: PropTypes.string.isRequired,
        ctaTitle: PropTypes.string.isRequired,
        devisBtn: PropTypes.string.isRequired,
        contactBtn: PropTypes.string.isRequired
      })
    })
  })
}

IndexPage.defaultProps = {
  data: { mdx: { frontmatter: {} } }
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    mdx(fileAbsolutePath: { regex: "//pages/index.md/" }) {
      id
      frontmatter {
        title
        titles
        sections {
          title
          theme
          content
        }
        excerpt
        ctaTitle
        devisBtn
        contactBtn
      }
    }
  }
`
