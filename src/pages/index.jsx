/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Flex, Styled } from 'theme-ui'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import uniqid from 'uniqid'

import Section from '../components/section'
import Neon from '../components/neon'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'
import Mail from '../components/mail'

const Button = props => {
  const { color } = props
  return (
    <Link
      sx={{
        backgroundColor: color,
        color: 'white',
        py: 4,
        px: 4,
        textTransform: 'uppercase',
        textDecoration: 'none',
        fontSize: 3
      }}
      {...props}
    />
  )
}
Button.propTypes = {
  color: PropTypes.string
}
Button.defaultProps = {
  color: 'blue'
}

const mapColors = color => {
  switch (color) {
    case 'rouge':
      return 'red'
    case 'rose':
      return 'saumon'
    case 'vert':
      return 'green'
    default:
      return 'background'
  }
}

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
      <Section bg="marine" color="green" fullScreen>
        <Container>
          <Neon text={title} />
          {titles.map(t => (
            <p key={uniqid(t)}>{t}</p>
          ))}
        </Container>
      </Section>
      <Section>
        <Container>
          {sections.map(({ title: sectTitle, theme, content }, i) => {
            const left = i % 2 === 0
            return (
              <div
                sx={{
                  py: 5,
                  textAlign: left ? 'left' : 'right',
                  position: 'relative'
                }}
                key={uniqid(sectTitle)}
              >
                <p
                  sx={{
                    position: 'absolute',
                    fontWeight: 'heading',
                    fontFamily: 'body',
                    width: '100%',
                    fontSize: [8]
                  }}
                >{`${i + 1}.`}</p>
                <h3
                  sx={{
                    fontWeight: 'heading',
                    fontFamily: 'heading',
                    fontSize: [6],
                    pl: left ? 6 : 0,
                    pr: !left ? 6 : 0
                  }}
                >
                  {sectTitle}
                </h3>
                <div
                  sx={{
                    backgroundColor: mapColors(theme),
                    py: 4,
                    px: 3,
                    width: `${(2 / 3) * 100}%`,
                    ml: left ? 'auto' : 0,
                    mr: !left ? 'auto' : 0
                  }}
                >
                  <p sx={{}}>{content}</p>
                </div>
              </div>
            )
          })}
        </Container>
      </Section>
      <Section>
        <Container>
          <h2
            sx={{
              fontWeight: 'heading',
              fontFamily: 'heading',
              fontSize: [6],
              textAlign: 'center',
              mb: 5
            }}
          >
            {ctaTitle}
          </h2>
          <Flex sx={{ justifyContent: 'space-around' }}>
            <Button color="blue" to="/devis">
              {devisBtn}
            </Button>
            <Button color="fushia" to="/contact">
              {contactBtn}
            </Button>
          </Flex>
        </Container>
      </Section>
      <section sx={{ backgroundColor: 'marine', py: 0 }}>
        <Container sx={{}}>
          <div sx={{ py: 6 }}>
            <Mail mail="bonjour@bengale.studio" color="green" />
          </div>
          <p
            sx={{
              textAlign: 'center',
              color: 'fushia',
              m: 0,
              py: 3,
              fontFamily: 'makina'
            }}
          >{`${title} © ${new Date().getFullYear()}`}</p>
        </Container>
      </section>
    </Layout>
  )
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
