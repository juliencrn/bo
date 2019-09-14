/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Flex, Box, jsx } from 'theme-ui'

import Layout from '../components/layout'
import Container from '../components/container'
import Mail from '../components/mail'
import BigText from '../components/bigText'
import Section from '../components/section'
import LinkList from '../components/linkList'
import { childrenPT } from '../utils/propTypes'

const Col = ({ children }) => (
  <Box
    sx={{
      width: ['100%', '50%'],
      px: 3,
      py: 4
    }}
  >
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
      }}
    >
      {children}
    </Flex>
  </Box>
)

Col.propTypes = { children: childrenPT.isRequired }

export default function PostTemplate({ data }) {
  const { body, frontmatter } = data.getMembers
  const {
    bgColor,
    color,
    firstname,
    lastname,
    mail,
    socialLinks,
    skills,
    profession
  } = frontmatter

  return (
    <Layout>
      <Section bg={bgColor} color="white" fullScreen>
        <Container>
          <Flex sx={{ mx: -3, flexWrap: 'wrap' }}>
            <Col>
              <h2
                sx={{ textTransform: 'uppercase', fontWeight: 'body' }}
              >{`${firstname} ${lastname}`}</h2>
              <LinkList list={[{ label: profession, link: '' }, ...skills]} />
            </Col>
            <Col>
              <BigText sx={{ fontSize: 4 }}>
                <MDXRenderer>{body}</MDXRenderer>
              </BigText>
            </Col>
            <Col>
              <LinkList list={socialLinks} />
            </Col>
            <Col>
              <Mail mail={mail} color={color} />
            </Col>
          </Flex>
        </Container>
      </Section>
    </Layout>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.shape({
    getMembers: PropTypes.shape({
      body: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        avatar: PropTypes.object,
        firstname: PropTypes.string,
        lastname: PropTypes.string,
        mail: PropTypes.string,
        bgColor: PropTypes.string,
        color: PropTypes.string,
        profession: PropTypes.string,
        professionCool: PropTypes.string,
        skills: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            link: PropTypes.string
          })
        ),
        socialLinks: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            link: PropTypes.string
          })
        )
      }).isRequired
    }).isRequired
  }).isRequired
}

export const pageQuery = graphql`
  query($id: String) {
    getMembers: mdx(id: { eq: $id }) {
      body
      frontmatter {
        avatar
        title
        firstname
        lastname
        mail
        profession
        professionCool
        bgColor
        color
        socialLinks {
          label
          link
        }
        skills {
          label
          link
        }
      }
    }
  }
`
